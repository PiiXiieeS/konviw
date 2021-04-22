import { ContextService } from '../../../src/context/context.service';
import { Step } from '../../../src/proxy-page/proxy-page.step';
import addJira from '../../../src/proxy-page/steps/addJira';
import { createModuleRefForStep } from './utils';

class JiraServiceMock {
  async findTickets() {
    return {
      issues: [
        {
          expand:
            'operations,versionedRepresentations,editmeta,changelog,renderedFields',
          id: 'id',
          self: 'link',
          key: 'FND-319',
          fields: {
            summary: 'Awesome Summary',
            issuetype: { name: 'issue', iconUrl: 'image.png' },
            assignee: { displayName: 'an assignee' },
            priority: { name: 'low', iconUrl: 'image.png' },
            resolution: { name: 'resolved' },
            updated: '2020-10-27T00:32:34.001+0100',
            status: { name: 'a status', statusCategory: { color: 'green' } },
          },
        },
      ],
    };
  }
}

describe('Confluence Proxy / addJira', () => {
  let context: ContextService;
  let step: Step;

  beforeEach(async () => {
    const moduleRef = await createModuleRefForStep();
    step = addJira();
    context = moduleRef.get<ContextService>(ContextService);
    context.Init('XXX', '123456', 'dark');
  });

  it('should add the jira grid', async () => {
    const cheerioBody = `<input 
      type="hidden" 
      class="refresh-wiki" 
      id="refresh-wiki-1366834209" 
      data-wikimarkup='
        <ac:structured-macro ac:name="jira" ac:schema-version="1" ac:macro-id="macro-id">
        <ac:parameter ac:name="server">System JIRA</ac:parameter>
        <ac:parameter ac:name="maximumIssues">100</ac:parameter>
        <ac:parameter ac:name="columns">key,summary,type,updated,assignee,priority,status,resolution</ac:parameter>
        <ac:parameter ac:name="jqlQuery">project = FND AND "Epic Link" = FND-303 ORDER BY resolution DESC, priority </ac:parameter>
        <ac:parameter ac:name="serverId">server-id</ac:parameter>
        <ac:parameter ac:name=": = | RAW | = :">server=System JIRA|maximumIssues=100|columns=key,summary,type,updated,assignee,priority,status,resolution|jqlQuery=project = FND AND "Epic Link" = FND-303 ORDER BY resolution DESC, priority |serverId=server-id</ac:parameter>
        <ac:parameter ac:name=": = | TOKEN_TYPE | = :">BLOCK</ac:parameter>
        </ac:structured-macro>' data-pageid="page-id">`;

    context.setHtmlBody(
      `<html><head><title>test</title><style default-inline-css></style></head><body>${cheerioBody} <div id='Content'></div></body></html>`,
    );
    await step(context, new JiraServiceMock() as any);
    const $ = context.getCheerioBody();
    const data = JSON.stringify([
      {
        key: {
          name: 'FND-319',
          link: 'https://iadc.atlassian.net/browse/FND-319?src=confmacro',
        },
        t: { name: 'issue', icon: 'image.png' },
        summary: {
          name: 'Awesome Summary',
          link: 'https://iadc.atlassian.net/browse/FND-319?src=confmacro',
        },
        updated: 'Oct 27, 2020, 12:32 AM',
        assignee: 'an assignee',
        pr: { name: 'low', icon: 'image.png' },
        status: { name: 'a status' },
        resolution: 'resolved',
      },
    ]);
    expect($('#Content').html()).toContain(`data: ${data}`);
  });
});
