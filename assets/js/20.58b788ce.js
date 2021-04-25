(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{376:function(e,t,a){"use strict";a.r(t);var s=a(26),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",{attrs:{align:"center"}},[a("a",{attrs:{href:"https://sanofi-iadc.github.io/konviw/",target:"blank"}},[a("img",{attrs:{src:e.$withBase("/konviw.svg"),width:"320",alt:"Nest Logo"}})])]),e._v(" "),a("p",{attrs:{align:"center"}},[e._v("\n  Enterprise public viewer for your "),a("a",{attrs:{href:"https://www.atlassian.com/software/confluence",target:"_blank"}},[e._v("Confluence")]),e._v(" pages.\n")]),e._v(" "),a("h2",{attrs:{id:"konviw-a-confluence-viewer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#konviw-a-confluence-viewer"}},[e._v("#")]),e._v(" Konviw, a Confluence viewer")]),e._v(" "),a("p",[e._v("It comes from the abreviation of Confluence Viewer and the word "),a("em",[e._v("conviu")]),e._v(" (coming from Catalan and pronouced /koɱˈviw/) which means coexist en English.")]),e._v(" "),a("blockquote",[a("p",[e._v("Konviw is the right companion for your Confluence private cloud instance")])]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("Konviw is an open source public viewer for Confluence pages in Enterprise private networks created by Sanofi IADC. We created it to provide an easy way for our end users to read Confluence pages without the clutter of going to Confluence.")]),e._v(" "),a("h3",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),a("ul",[a("li",[e._v("Simplified REST API providing a read-only access to search pages and retrieve page content")]),e._v(" "),a("li",[e._v("Page content formated with configurable CSS stylesheets, zoomable images, draw.io diagrams preview, web statisics, reading progress...")]),e._v(" "),a("li",[e._v("Nicer blog pots with image header, tagline, author and read time estimation")]),e._v(" "),a("li",[e._v("Slides (thanks to reveal.js) from a Confluence page")])]),e._v(" "),a("h3",{attrs:{id:"use-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[e._v("#")]),e._v(" Use cases")]),e._v(" "),a("ul",[a("li",[e._v("Headless CMS via Confluence")]),e._v(" "),a("li",[e._v("Corporate blogs")]),e._v(" "),a("li",[e._v("Cool tech sessions with stunning presentations on the Web")])]),e._v(" "),a("h3",{attrs:{id:"roadmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#roadmap"}},[e._v("#")]),e._v(" Roadmap")]),e._v(" "),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{disabled:"",type:"checkbox"}}),e._v(" Plugin system")]),e._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),e._v(" Comments")]),e._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{disabled:"",type:"checkbox"}}),e._v(" Dockerized deployment")]),e._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),e._v(" Make the 'perf_hooks' measurement optional via .env configuration")]),e._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),e._v(" Jira macro renders issues as a table")])]),e._v(" "),a("h2",{attrs:{id:"architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),a("p",[e._v("Konviw implements a proxy http(s) webserver that handle requests to view Confluence pages (NestJS controller) on one hand and resolves them by calling the Confluence content API end-points (NestJS service) and formating them to be visually appealing.")]),e._v(" "),a("p",[e._v("This sequence represents the common steps handled by the proxy server:")]),e._v(" "),a("ol",[a("li",[e._v("A user request a Confluence page via the Page ID.")]),e._v(" "),a("li",[e._v("The Proxy page service request a new page to the Confluence API service.")]),e._v(" "),a("li",[e._v("The Confluence API service calls the Confluence API and expands some fields with special focus on 'body.styled_view' which returns the HTML version of the page.")]),e._v(" "),a("li",[e._v("The Proxy page service starts from the initial version of the HTML returned by the API and goes thru a sequence of steps to reformat the page accordingly to our needs.")]),e._v(" "),a("li",[e._v("Example of transformations are fixEmojis, fixDrawio, fixExpander... or addCustomCss, addHighlightjs...")]),e._v(" "),a("li",[e._v("After all the transformations are applied the HTML page is returned to the user browser.")])]),e._v(" "),a("p",[e._v("For a more detailed deep dive check the docs section for "),a("a",{attrs:{href:"architecture"}},[e._v("the konviw architecture")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"tech-stack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tech-stack"}},[e._v("#")]),e._v(" Tech Stack")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://nestjs.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nest.js"),a("OutboundLink")],1),e._v(". A progressive Node.js framework for building efficient, reliable and scalable server-side applications. Guess what, we use NestJS to serve the backend proxy.")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://nestjs.com/",target:"blank"}},[a("img",{attrs:{src:e.$withBase("/nestjs-logo.svg"),width:"120",alt:"Nest Logo"}})])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Simple REST API")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://cheerio.js.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cheerio"),a("OutboundLink")],1),e._v(" is used to parse the DOM of the HTML returned by the Confluence API and perform the desired transformations.")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://revealjs.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reveal.js"),a("OutboundLink")],1),e._v(" is our choice to create stunning presentations on the Web from a Confluence page.")])])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://revealjs.com",target:"blank"}},[a("img",{attrs:{src:e.$withBase("/revealjs-logo.svg"),width:"120",alt:"Nest Logo"}})])]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/kingdido999/zooming",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zooming"),a("OutboundLink")],1),e._v(" an image zoom 🔍 that makes sense.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://highlightjs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Highlight.js"),a("OutboundLink")],1),e._v(" a JavaScript syntax highlighter with language auto-detection.")])]),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/Sanofi-IADC/konviw.git\n\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" konviw "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run start\n")])])]),a("p",[e._v("For configuration check the detailed "),a("a",{attrs:{href:"/installation"}},[e._v("installation")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"how-to-contribute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-contribute"}},[e._v("#")]),e._v(" How to contribute?")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/Sanofi-IADC/konviw/actions",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://github.com/Sanofi-IADC/konviw/workflows/CI/badge.svg?branch=main&event=push",alt:"CI"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://sonarcloud.io/dashboard?id=Sanofi-IADC_konviw",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://sonarcloud.io/api/project_badges/measure?project=Sanofi-IADC_konviw&metric=alert_status",alt:"Sonarcloud quality"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.com/Sanofi-IADC/whispr/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/License-MIT-green.svg",alt:"MIT License"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://gitpod.io/#https://github.com/Sanofi-IADC/konviw",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod",alt:"Gitpod ready-to-code"}}),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/Sanofi-IADC/konviw/issues/new?assignees=&labels=&template=bug_report.md&title=",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create a Bug report"),a("OutboundLink")],1),e._v(" to help us improve.")]),e._v(" "),a("li",[e._v("Suggest "),a("a",{attrs:{href:"https://github.com/Sanofi-IADC/konviw/issues/new?assignees=&labels=&template=feature_request.md&title=",target:"_blank",rel:"noopener noreferrer"}},[e._v("feature request"),a("OutboundLink")],1),e._v(" or idea for this project]")]),e._v(" "),a("li",[e._v("And if you are interested to contribute to the development or documenation do not hesitate to fork of this repository and propose a pull request with new features.")])]),e._v(" "),a("h2",{attrs:{id:"support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#support"}},[e._v("#")]),e._v(" Support")]),e._v(" "),a("p",[e._v("Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please "),a("a",{attrs:{href:"https://docs.nestjs.com/support",target:"_blank",rel:"noopener noreferrer"}},[e._v("read more here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Reveal.js is a MIT-licensed open source HTML presentation framework copyright (C) by Hakim El Hattab, (https://hakim.se). Support the project via "),a("a",{attrs:{href:"https://github.com/sponsors/hakimel",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Sponsors"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Cheerio is a MIT-licensed open source blazingly fast DOM parser for nodejs servers. Support the project via "),a("a",{attrs:{href:"https://github.com/sponsors/cheeriojs",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Sponsors"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[e._v("#")]),e._v(" License")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/Sanofi-IADC/konviw/blob/main/LICENCE",target:"_blank",rel:"noopener noreferrer"}},[e._v("MIT licensed"),a("OutboundLink")],1),e._v(" made by Sanofi IADC")])])}),[],!1,null,null,null);t.default=r.exports}}]);