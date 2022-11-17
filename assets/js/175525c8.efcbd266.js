"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[34422],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,g=c["".concat(d,".").concat(m)]||c[m]||s[m]||l;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},43942:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"Bare Metal",sidebar_position:4},o=void 0,i={unversionedId:"deployment/bare_metal",id:"version-1.4.0/deployment/bare_metal",title:"Bare Metal",description:"Environment Requirements",source:"@site/versioned_docs/version-1.4.0/deployment/bare_metal.md",sourceDirName:"deployment",slug:"/deployment/bare_metal",permalink:"/docs/deployment/bare_metal",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.4.0/deployment/bare_metal.md",tags:[],version:"1.4.0",sidebarPosition:4,frontMatter:{title:"Bare Metal",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/docs/deployment/k8s"},next:{title:"Overview",permalink:"/docs/modules/agent/overview"}},d={},p=[{value:"Environment Requirements",id:"environment-requirements",level:2},{value:"Prepare Message Queue",id:"prepare-message-queue",level:2},{value:"Download the Binary Package",id:"download-the-binary-package",level:2},{value:"Standard Architecture",id:"standard-architecture",level:2},{value:"Deploy",id:"deploy",level:3},{value:"Create Data Stream",id:"create-data-stream",level:3},{value:"Lightweight Architecture",id:"lightweight-architecture",level:2},{value:"Deploy",id:"deploy-1",level:3}],u={toc:p};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MySQL 5.7+"),(0,r.kt)("li",{parentName:"ul"},"Flink 1.13.5")),(0,r.kt)("h2",{id:"prepare-message-queue"},"Prepare Message Queue"),(0,r.kt)("p",null,"InLong Support the following Message Queue services now, you can choose one of them."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/modules/tubemq/quick_start"},"InLong TubeMQ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/docs/en/2.8.1/standalone/"},"Apache Pulsar 2.8.x"))),(0,r.kt)("h2",{id:"download-the-binary-package"},"Download the Binary Package"),(0,r.kt)("p",null,"You can get binary package from ",(0,r.kt)("a",{parentName:"p",href:"https://inlong.apache.org/download"},"Download Page")," ,or you can build the InLong refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/quick_start/how_to_build"},"How to Build"),".\u3002"),(0,r.kt)("h2",{id:"standard-architecture"},"Standard Architecture"),(0,r.kt)("p",null,"You need deploy all InLong components for Standard Architecture."),(0,r.kt)("h3",{id:"deploy"},"Deploy"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"order"),(0,r.kt)("th",{parentName:"tr",align:null},"component"),(0,r.kt)("th",{parentName:"tr",align:null},"dependencies"),(0,r.kt)("th",{parentName:"tr",align:null},"deploy guide"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong-audit"),(0,r.kt)("td",{parentName:"tr",align:null},"MySQL or Elasticsearch"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/modules/audit/quick_start"},"InLong Audit")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong-manager"),(0,r.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/modules/manager/quick_start"},"InLong Manager")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong-dataproxy"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/modules/dataproxy/quick_start"},"InLong DataProxy")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong-agent"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/modules/agent/quick_start"},"InLong Agent")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong-dashboard"),(0,r.kt)("td",{parentName:"tr",align:null},"Nginx or Docker"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/modules/dashboard/quick_start"},"InLong Dashboard")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong-sort-connectors"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache Flink"),(0,r.kt)("td",{parentName:"tr",align:null},"Extract ",(0,r.kt)("a",{parentName:"td",href:"https://inlong.apache.org/download/"},"apache-inlong-[version]-sort-connectors.tar.gz")," and move connectors jar to ",(0,r.kt)("inlineCode",{parentName:"td"},"inlong-sort/connectors")," directory."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"create-data-stream"},"Create Data Stream"),(0,r.kt)("p",null,"After the InLong cluster deployed successfully, you can create a data stream refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/user_guide/dashboard_usage"},"Dashboard Usage Guide")," to start using."),(0,r.kt)("h2",{id:"lightweight-architecture"},"Lightweight Architecture"),(0,r.kt)("h3",{id:"deploy-1"},"Deploy"),(0,r.kt)("p",null,"Lightweight Architecture only needs InLong Sort component, it is simple and flexible, suitable for small-scale data.\nYou can deploy and use it refer ",(0,r.kt)("a",{parentName:"p",href:"/docs/modules/sort/quick_start"},"the deployment guide"),"."))}s.isMDXComponent=!0}}]);