"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8719],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),k=c(n),m=a,d=k["".concat(p,".").concat(m)]||k[m]||s[m]||o;return n?r.createElement(d,l(l({ref:e},u),{},{components:n})):r.createElement(d,l({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},83963:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},p=void 0,c={unversionedId:"modules/sort/quick_start",id:"modules/sort/quick_start",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u914d\u7f6e Flink \u8fd0\u884c\u73af\u5883",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/modules/sort/quick_start.md",sourceDirName:"modules/sort",slug:"/modules/sort/quick_start",permalink:"/zh-CN/docs/next/modules/sort/quick_start",draft:!1,editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/modules/sort/quick_start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/next/modules/sort/overview"},next:{title:"\u6570\u636e\u6d41\u793a\u4f8b",permalink:"/zh-CN/docs/next/modules/sort/datastream_example"}},u={},s=[{value:"\u914d\u7f6e Flink \u8fd0\u884c\u73af\u5883",id:"\u914d\u7f6e-flink-\u8fd0\u884c\u73af\u5883",level:2},{value:"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6",id:"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6",level:2},{value:"\u542f\u52a8 InLong-Sort \u5e94\u7528",id:"\u542f\u52a8-inlong-sort-\u5e94\u7528",level:2},{value:"\u5fc5\u8981\u7684\u914d\u7f6e",id:"\u5fc5\u8981\u7684\u914d\u7f6e",level:2},{value:"\u6240\u6709\u652f\u6301\u7684\u914d\u7f6e",id:"\u6240\u6709\u652f\u6301\u7684\u914d\u7f6e",level:2}],k={toc:s};function m(t){var e=t.components,n=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u914d\u7f6e-flink-\u8fd0\u884c\u73af\u5883"},"\u914d\u7f6e Flink \u8fd0\u884c\u73af\u5883"),(0,o.kt)("p",null,"\u5f53\u524d InLong-Sort \u662f\u57fa\u4e8e Flink \u7684\u4e00\u4e2a\u5e94\u7528\uff0c\u56e0\u6b64\u8fd0\u884c InLong-Sort \u5e94\u7528\u524d\uff0c\u9700\u8981\u51c6\u5907\u597d ",(0,o.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/deployment/overview/"},"Flink \u73af\u5883"),"\u3002"),(0,o.kt)("p",null,"\u7531\u4e8e\u5f53\u524d InLong-Sort \u4f9d\u8d56\u7684\u662f Flink1.13.5 \u7248\u672c\uff0c\u56e0\u6b64\u5728\u4e0b\u8f7d\u90e8\u7f72\u5305\u65f6\uff0c\u8bf7\u9009\u62e9",(0,o.kt)("inlineCode",{parentName:"p"},"flink-1.13.5-bin-scala_2.11.tgz")),(0,o.kt)("p",null,"Flink \u73af\u5883\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95ee Flink \u7684 Web UI\uff0c\u5bf9\u5e94\u7684\u5730\u5740\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"/{Flink \u90e8\u7f72\u8def\u5f84}/conf/masters"),"\u6587\u4ef6\u4e2d\u7684\u5730\u5740"),(0,o.kt)("h2",{id:"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6"},"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6"),(0,o.kt)("p",null,"\u5b89\u88c5\u6587\u4ef6\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"inlong-sort"),"\u76ee\u5f55\u3002"),(0,o.kt)("h2",{id:"\u542f\u52a8-inlong-sort-\u5e94\u7528"},"\u542f\u52a8 InLong-Sort \u5e94\u7528"),(0,o.kt)("p",null,"\u6709\u4e86\u4e0a\u8ff0\u7f16\u8bd1\u9636\u6bb5\u4ea7\u51fa\u7684jar\u5305\u540e\uff0c\u5c31\u53ef\u4ee5\u542f\u52a8 InLong-Sort \u7684\u5e94\u7528\u4e86\u3002\u63d0\u4ea4\u65b9\u5f0f\u53ef\u4ee5\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/deployment/cli/#submitting-a-job"},"\u5982\u4f55\u63d0\u4ea4 Flink \u4f5c\u4e1a"),"\u3002"),(0,o.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./bin/flink run -c org.apache.inlong.sort.Entrance inlong-sort/sort-[version].jar \\\n--group.info.file /YOUR_DATASTREAM_INFO_DIR/mysql-to-kafka.json\n")),(0,o.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-c org.apache.inlong.sort.Entrance")," \u8868\u793a Main class name ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"inlong-sort/sort-[version].jar")," \u4e3a\u7f16\u8bd1\u9636\u6bb5\u4ea7\u51fa\u7684 Jar \u5305"))),(0,o.kt)("h2",{id:"\u5fc5\u8981\u7684\u914d\u7f6e"},"\u5fc5\u8981\u7684\u914d\u7f6e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--group.info.file")," \u6d41\u914d\u7f6e\u6587\u4ef6\u8def\u5f84")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u542f\u52a8\u53c2\u6570\u914d\u7f6e\u793a\u4f8b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--group.info.file /YOUR_DATASTREAM_INFO_DIR/mysql-to-kafka.json\n")),(0,o.kt)("h2",{id:"\u6240\u6709\u652f\u6301\u7684\u914d\u7f6e"},"\u6240\u6709\u652f\u6301\u7684\u914d\u7f6e"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u540d"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u987b"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"checkpoint.interval"),(0,o.kt)("td",{parentName:"tr",align:"center"},"N"),(0,o.kt)("td",{parentName:"tr",align:"center"},"600000"),(0,o.kt)("td",{parentName:"tr",align:null},"checkpoint\u95f4\u9694\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"min.pause.between.checkpoints.ms"),(0,o.kt)("td",{parentName:"tr",align:"center"},"N"),(0,o.kt)("td",{parentName:"tr",align:"center"},"500"),(0,o.kt)("td",{parentName:"tr",align:null},"checkpoint\u4e4b\u95f4\u7684\u6700\u5c0f\u95f4\u9694\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"checkpoint.timeout.ms"),(0,o.kt)("td",{parentName:"tr",align:"center"},"N"),(0,o.kt)("td",{parentName:"tr",align:"center"},"600000"),(0,o.kt)("td",{parentName:"tr",align:null},"checkpoint\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2")))))}m.isMDXComponent=!0}}]);