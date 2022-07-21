"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=o,f=p["".concat(s,".").concat(g)]||p[g]||u[g]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"Overview",sidebar_position:1},a=void 0,l={unversionedId:"modules/agent/overview",id:"modules/agent/overview",title:"Overview",description:"InLong Agent is a collection tool that supports multiple types of data sources, and is committed to achieving stable and efficient data collection functions between multiple heterogeneous data sources including File, SQL, Binlog, Metrics, etc.",source:"@site/docs/modules/agent/overview.md",sourceDirName:"modules/agent",slug:"/modules/agent/overview",permalink:"/docs/next/modules/agent/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/modules/agent/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Bare Metal",permalink:"/docs/next/deployment/bare_metal"},next:{title:"Deployment",permalink:"/docs/next/modules/agent/quick_start"}},s={},c=[{value:"Design Concept",id:"design-concept",level:2},{value:"InLong-Agent Architecture",id:"inlong-agent-architecture",level:2},{value:"Different kinds of agent",id:"different-kinds-of-agent",level:2},{value:"File",id:"file",level:3},{value:"SQL",id:"sql",level:3},{value:"Binlog",id:"binlog",level:3}],d={toc:c};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"InLong Agent is a collection tool that supports multiple types of data sources, and is committed to achieving stable and efficient data collection functions between multiple heterogeneous data sources including File, SQL, Binlog, Metrics, etc."),(0,o.kt)("h2",{id:"design-concept"},"Design Concept"),(0,o.kt)("p",null,"In order to solve the problem of data source diversity, InLong-agent abstracts multiple data sources into a unified source concept, and abstracts sinks to write data. When you need to access a new data source, you only need to configure the format and reading parameters of the data source to achieve efficient reading."),(0,o.kt)("h2",{id:"inlong-agent-architecture"},"InLong-Agent Architecture"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(11846).Z,width:"1652",height:"506"})),(0,o.kt)("p",null,"The InLong Agent task is used as a data acquisition framework, constructed with a channel + plug-in architecture. Read and write the data source into a reader/writer plug-in, and then into the entire framework."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reader: Reader is the data collection module, responsible for collecting data from the data source and sending the data to the channel."),(0,o.kt)("li",{parentName:"ul"},"Writer: Writer is a data writing module, which reuses data continuously to the channel and writes the data to the destination."),(0,o.kt)("li",{parentName:"ul"},"Channel: The channel used to connect the reader and writer, and as the data transmission channel of the connection, which realizes the function of data reading and monitoring")),(0,o.kt)("h2",{id:"different-kinds-of-agent"},"Different kinds of agent"),(0,o.kt)("h3",{id:"file"},"File"),(0,o.kt)("p",null,"File collection includes the following functions:"),(0,o.kt)("p",null,"User-configured path monitoring, able to monitor the created file information\nDirectory regular filtering, support YYYYMMDD+regular expression path configuration\nBreakpoint retransmission, when InLong-Agent restarts, it can automatically re-read from the last read position to ensure no reread or missed reading."),(0,o.kt)("h3",{id:"sql"},"SQL"),(0,o.kt)("p",null,"This type of data refers to the way it is executed through SQL\nSQL regular decomposition, converted into multiple SQL statements\nExecute SQL separately, pull the data set, the pull process needs to pay attention to the impact on mysql itself\nThe execution cycle, which is generally executed regularly"),(0,o.kt)("h3",{id:"binlog"},"Binlog"),(0,o.kt)("p",null,"This type of collection reads binlog and restores data by configuring mysql slave\nNeed to pay attention to multi-threaded parsing when binlog is read, and multi-threaded parsing data needs to be labeled in order\nThe code is based on the old version of dbsync, the main modification is to change the sending of tdbus-sender to push to agent-channel for integration"))}u.isMDXComponent=!0},11846:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/architecture-4c55eb883104dccdff77e8b8e57f2678.png"}}]);