"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[51650],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,i(i({ref:e},p),{},{components:n})):a.createElement(g,i({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10299:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Basic Concept",sidebar_position:1},i=void 0,l={unversionedId:"design_and_concept/basic_concept",id:"version-1.3.0/design_and_concept/basic_concept",title:"Basic Concept",description:"| Name                     | Description                                                                                                                | Other                                                                              |",source:"@site/versioned_docs/version-1.3.0/design_and_concept/basic_concept.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/basic_concept",permalink:"/docs/1.3.0/design_and_concept/basic_concept",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.3.0/design_and_concept/basic_concept.md",tags:[],version:"1.3.0",sidebarPosition:1,frontMatter:{title:"Basic Concept",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"InLong Introduction",permalink:"/docs/1.3.0/introduction"},next:{title:"Agent Plugin",permalink:"/docs/1.3.0/design_and_concept/how_to_write_plugin_agent"}},s={},c=[],p={toc:c};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Other"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Standard Architecture"),(0,r.kt)("td",{parentName:"tr",align:null},"Contains all InLong components such as InLong Agent/Manager/MQ/Sort/Dashboard"),(0,r.kt)("td",{parentName:"tr",align:null},"Suitable for massive data and large-scale production environments")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight Architecture"),(0,r.kt)("td",{parentName:"tr",align:null},"Contains only one component of InLong Sort, which can be used with Manager/Dashboard"),(0,r.kt)("td",{parentName:"tr",align:null},"The lightweight architecture is simple and flexible, suitable for small-scale data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Group"),(0,r.kt)("td",{parentName:"tr",align:null},"Data Streams Group, it contains multiple data streams, and one Group represents one data ingestion."),(0,r.kt)("td",{parentName:"tr",align:null},"Group has attributes such as ID and Name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stream"),(0,r.kt)("td",{parentName:"tr",align:null},"Data Stream, a stream has a specific flow direction."),(0,r.kt)("td",{parentName:"tr",align:null},"Stream has attributes such as ID, Name, and data fields.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node"),(0,r.kt)("td",{parentName:"tr",align:null},"Data Node, including ",(0,r.kt)("inlineCode",{parentName:"td"},"Extract Node")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"Load Node"),",  stands for the data source and sink types separately."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InLongMsg"),(0,r.kt)("td",{parentName:"tr",align:null},"InLong data format, if you consume message directly from the message queue, you need to perform ",(0,r.kt)("inlineCode",{parentName:"td"},"InLongMsg")," parsing first."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Agent"),(0,r.kt)("td",{parentName:"tr",align:null},"The standard architecture uses Agent for data collection, and Agent represents different types of collection capabilities."),(0,r.kt)("td",{parentName:"tr",align:null},"It contains File Agent, SQL Agent, Binlog Agent, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DataProxy"),(0,r.kt)("td",{parentName:"tr",align:null},"Forward received data to different message queues."),(0,r.kt)("td",{parentName:"tr",align:null},"Supports data transmission blocking, placing retransmission.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sort"),(0,r.kt)("td",{parentName:"tr",align:null},"Data stream sorting."),(0,r.kt)("td",{parentName:"tr",align:null},"Sort-flink based on Flink, sort-standalone for local sorting.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TubeMQ"),(0,r.kt)("td",{parentName:"tr",align:null},"InLong's self-developed message queuing service"),(0,r.kt)("td",{parentName:"tr",align:null},"It can also be called Tube, with low-cost, high-performance features.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/"},"Apache Pulsar"),", a high-performance, high-consistency message queue service"),(0,r.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);