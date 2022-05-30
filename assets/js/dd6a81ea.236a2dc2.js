"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2437],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},18024:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"File",sidebar_position:2},c=void 0,d={unversionedId:"data_node/extract_node/file",id:"version-1.1.0/data_node/extract_node/file",title:"File",description:"Parameters",source:"@site/versioned_docs/version-1.1.0/data_node/extract_node/file.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/file",permalink:"/docs/data_node/extract_node/file",draft:!1,editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-1.1.0/data_node/extract_node/file.md",tags:[],version:"1.1.0",sidebarPosition:2,frontMatter:{title:"File",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Auto Push",permalink:"/docs/data_node/extract_node/auto_push"},next:{title:"Kafka",permalink:"/docs/data_node/extract_node/kafka"}},s={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Path Configuration",id:"path-configuration",level:2},{value:"Data Time",id:"data-time",level:2}],p={toc:u};function f(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"File Params",src:n(3615).Z,width:"825",height:"444"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DataSource Name"),(0,o.kt)("li",{parentName:"ul"},"Data source IP: Collect Node Agent IP."),(0,o.kt)("li",{parentName:"ul"},"File path: Must be an absolute path and support regular expressions."),(0,o.kt)("li",{parentName:"ul"},"Time offset: The file will be collected from a certain time,' 1m' means 1 minute later,' -1m' means 1 minute before, and m(minute), h(hour), d(day) are supported. If it is empty, the file will be collected from the current time."),(0,o.kt)("li",{parentName:"ul"},"Source data fileDelimiter: Vertical line(|), Comma(,), Semicolon(;)..."),(0,o.kt)("li",{parentName:"ul"},"Source data field: Delimited fields")),(0,o.kt)("h2",{id:"path-configuration"},"Path Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'/data/inlong-agent/test.log //Represents reading the new file test.log in the inlong-agent folder\n/data/inlong-agent/test[0-9]{1} // means to read the new file test in the inlong-agent folder followed by a number at the end\n/data/inlong-agent/test //If test is a directory, it means to read all new files under test\n/data/inlong-agent/^\\\\d+(\\\\.\\\\d+)? // Start with one or more digits, followed by. or end with one. or more digits (? stands for optional, can match Examples: "5", "1.5" and "2.21"\n')),(0,o.kt)("h2",{id:"data-time"},"Data Time"),(0,o.kt)("p",null,"Agent supports obtaining the time from the file name as the production time of the data. The configuration instructions are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/data/inlong-agent/***YYYYMMDDHH***\n")),(0,o.kt)("p",null,"Where YYYYDDMMHH represents the data time, YYYY represents the year, MM represents the month, DD represents the day, and HH represents the hour\nWhere *** is any character"),(0,o.kt)("p",null,"At the same time, you need to add the current data cycle to the job conf, the current support day cycle and hour cycle,\nWhen adding a task, add the property job.cycleUnit. job.cycleUnit contains the following two types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"D: Represents the data time and day dimension"),(0,o.kt)("li",{parentName:"ul"},"H: Represents the data time and hour dimension")),(0,o.kt)("p",null,"E.g:\nThe configuration data source is"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/data/inlong-agent/2021020211.log\n")),(0,o.kt)("p",null,"Write data to 2021020211.log\nConfigure job.cycleUnit as D\nThen the agent will try the 202020211.log file at the time of 202020211. When reading the data in the file, it will write all the data to the backend proxy at the time of 20210202.\nIf job.cycleUnit is configured as H\nWhen collecting data in the 2021020211.log file, all data will be written to the backend proxy at the time of 2021020211\u3002"))}f.isMDXComponent=!0},3615:function(e,t,n){t.Z=n.p+"assets/images/file_param-6ab61c501b7638c30c5de7151c339079.png"}}]);