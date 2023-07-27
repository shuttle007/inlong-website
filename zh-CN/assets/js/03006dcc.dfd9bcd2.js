"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[60378],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),h=l,m=p["".concat(s,".").concat(h)]||p[h]||g[h]||r;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},22426:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const r={title:"1.7.0 \u7248\u672c\u53d1\u5e03",author:"Charles Zhang",author_url:"https://github.com/dockerzhang",author_image_url:"https://avatars.githubusercontent.com/u/18047329?v=4",tags:["Apache InLong","Version"]},o=void 0,i={permalink:"/zh-CN/blog/2023/05/19/release-1.7.0",editUrl:"https://github.com/apache/inlong-website/edit/master/blog/blog/2023-05-19-release-1.7.0.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2023-05-19-release-1.7.0.md",title:"1.7.0 \u7248\u672c\u53d1\u5e03",description:"Apache InLong\uff08\u5e94\u9f99\uff09 \u6700\u8fd1\u53d1\u5e03\u4e86 1.7.0 \u7248\u672c\uff0c\u8be5\u7248\u672c\u5173\u95ed\u4e86\u7ea6 150+ \u4e2aissue\uff0c\u5305\u542b 3+ \u4e2a\u5927\u7279\u6027\u548c 40+ \u4e2a\u4f18\u5316\u3002\u4e3b\u8981\u5b8c\u6210\u4e86\u652f\u6301\u76f4\u53d1\u6570\u636e\u5230 Kafka\u3001MySQL \u6574\u5e93\u8fc1\u79fb\u652f\u6301 schema \u53d8\u66f4\u3001MySQL \u6574\u5e93\u8fc1\u79fb\u652f\u6301 GH-OST \u611f\u77e5\u3001\u589e\u52a0 CSV/SQL/JSON/Excel 4 \u79cd\u6279\u91cf\u5bfc\u5165\u6a21\u5f0f\u3001\u7b80\u5316\u547d\u4ee4\u884c\u5de5\u5177\u521b\u5efa\u6570\u636e\u6d41\u914d\u7f6e\u3001\u91cd\u6784 Dashboard \u6574\u4f53\u5e03\u5c40\u7b49\u3002",date:"2023-05-19T00:00:00.000Z",formattedDate:"2023\u5e745\u670819\u65e5",tags:[{label:"Apache InLong",permalink:"/zh-CN/blog/tags/apache-in-long"},{label:"Version",permalink:"/zh-CN/blog/tags/version"}],readingTime:10.79,hasTruncateMarker:!0,authors:[{name:"Charles Zhang",url:"https://github.com/dockerzhang",imageURL:"https://avatars.githubusercontent.com/u/18047329?v=4"}],frontMatter:{title:"1.7.0 \u7248\u672c\u53d1\u5e03",author:"Charles Zhang",author_url:"https://github.com/dockerzhang",author_image_url:"https://avatars.githubusercontent.com/u/18047329?v=4",tags:["Apache InLong","Version"]},prevItem:{title:"1.8.0 \u7248\u672c\u53d1\u5e03",permalink:"/zh-CN/blog/2023/07/24/release-1.8.0"},nextItem:{title:"1.6.0 \u7248\u672c\u53d1\u5e03",permalink:"/zh-CN/blog/2023/03/23/release-1.6.0"}},s={authorsImageUrls:[void 0]},u=[{value:"\u5173\u4e8e Apache InLong",id:"\u5173\u4e8e-apache-inlong",level:2},{value:"1.7.0 \u7248\u672c\u603b\u89c8",id:"170-\u7248\u672c\u603b\u89c8",level:2},{value:"Agent \u6a21\u5757",id:"agent-\u6a21\u5757",level:3},{value:"DataProxy \u6a21\u5757",id:"dataproxy-\u6a21\u5757",level:3},{value:"Manager \u6a21\u5757",id:"manager-\u6a21\u5757",level:3},{value:"Sort \u6a21\u5757",id:"sort-\u6a21\u5757",level:3},{value:"Dashboard \u6a21\u5757",id:"dashboard-\u6a21\u5757",level:3},{value:"\u5176\u5b83",id:"\u5176\u5b83",level:3},{value:"1.7.0 \u7248\u672c\u7279\u6027\u4ecb\u7ecd",id:"170-\u7248\u672c\u7279\u6027\u4ecb\u7ecd",level:2},{value:"\u652f\u6301\u76f4\u53d1\u6570\u636e\u5230 Kafka",id:"\u652f\u6301\u76f4\u53d1\u6570\u636e\u5230-kafka",level:3},{value:"MySQL \u6574\u5e93\u8fc1\u79fb\u652f\u6301 schema \u53d8\u66f4",id:"mysql-\u6574\u5e93\u8fc1\u79fb\u652f\u6301-schema-\u53d8\u66f4",level:3},{value:"MySQL \u6574\u5e93\u8fc1\u79fb\u652f\u6301 GH-OST \u611f\u77e5",id:"mysql-\u6574\u5e93\u8fc1\u79fb\u652f\u6301-gh-ost-\u611f\u77e5",level:3},{value:"\u589e\u52a0 CSV/SQL/JSON/Excel 4 \u79cd\u6279\u91cf\u5bfc\u5165\u6a21\u5f0f",id:"\u589e\u52a0-csvsqljsonexcel-4-\u79cd\u6279\u91cf\u5bfc\u5165\u6a21\u5f0f",level:3},{value:"\u7b80\u5316\u547d\u4ee4\u884c\u5de5\u5177\u521b\u5efa\u6570\u636e\u6d41\u914d\u7f6e",id:"\u7b80\u5316\u547d\u4ee4\u884c\u5de5\u5177\u521b\u5efa\u6570\u636e\u6d41\u914d\u7f6e",level:3},{value:"\u91cd\u6784 Dashboard \u6574\u4f53\u5e03\u5c40",id:"\u91cd\u6784-dashboard-\u6574\u4f53\u5e03\u5c40",level:3},{value:"\u540e\u7eed\u89c4\u5212",id:"\u540e\u7eed\u89c4\u5212",level:2}],c={toc:u},p="wrapper";function g(e){let{components:t,...r}=e;return(0,l.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Apache InLong\uff08\u5e94\u9f99\uff09 \u6700\u8fd1\u53d1\u5e03\u4e86 1.7.0 \u7248\u672c\uff0c\u8be5\u7248\u672c\u5173\u95ed\u4e86\u7ea6 150+ \u4e2aissue\uff0c\u5305\u542b 3+ \u4e2a\u5927\u7279\u6027\u548c 40+ \u4e2a\u4f18\u5316\u3002\u4e3b\u8981\u5b8c\u6210\u4e86\u652f\u6301\u76f4\u53d1\u6570\u636e\u5230 Kafka\u3001MySQL \u6574\u5e93\u8fc1\u79fb\u652f\u6301 schema \u53d8\u66f4\u3001MySQL \u6574\u5e93\u8fc1\u79fb\u652f\u6301 GH-OST \u611f\u77e5\u3001\u589e\u52a0 CSV/SQL/JSON/Excel 4 \u79cd\u6279\u91cf\u5bfc\u5165\u6a21\u5f0f\u3001\u7b80\u5316\u547d\u4ee4\u884c\u5de5\u5177\u521b\u5efa\u6570\u636e\u6d41\u914d\u7f6e\u3001\u91cd\u6784 Dashboard \u6574\u4f53\u5e03\u5c40\u7b49\u3002"),(0,l.kt)("h2",{id:"\u5173\u4e8e-apache-inlong"},"\u5173\u4e8e Apache InLong"),(0,l.kt)("p",null,"\u4f5c\u4e3a\u4e1a\u754c\u9996\u4e2a\u4e00\u7ad9\u5f0f\u5f00\u6e90\u6d77\u91cf\u6570\u636e\u96c6\u6210\u6846\u67b6\uff0cApache InLong\uff08\u5e94\u9f99\uff09 \u63d0\u4f9b\u4e86\u81ea\u52a8\u3001\u5b89\u5168\u3001\u53ef\u9760\u548c\u9ad8\u6027\u80fd\u7684\u6570\u636e\u4f20\u8f93\u80fd\u529b\uff0c\u65b9\u4fbf\u4e1a\u52a1\u5feb\u901f\u6784\u5efa\u57fa\u4e8e\u6d41\u5f0f\u7684\u6570\u636e\u5206\u6790\u3001\u5efa\u6a21\u548c\u5e94\u7528\u3002\u76ee\u524d InLong \u6b63\u5e7f\u6cdb\u5e94\u7528\u4e8e\u5e7f\u544a\u3001\u652f\u4ed8\u3001\u793e\u4ea4\u3001\u6e38\u620f\u3001\u4eba\u5de5\u667a\u80fd\u7b49\u5404\u4e2a\u884c\u4e1a\u9886\u57df\uff0c\u670d\u52a1\u4e0a\u5343\u4e2a\u4e1a\u52a1\uff0c\u5176\u4e2d\u9ad8\u6027\u80fd\u573a\u666f\u6570\u636e\u89c4\u6a21\u8d85\u767e\u4e07\u4ebf\u6761/\u5929\uff0c\u9ad8\u53ef\u9760\u573a\u666f\u6570\u636e\u89c4\u6a21\u8d85\u5341\u4e07\u4ebf\u6761/\u5929\u3002"),(0,l.kt)("p",null,"InLong \u9879\u76ee\u5b9a\u4f4d\u7684\u6838\u5fc3\u5173\u952e\u8bcd\u662f\u201c\u4e00\u7ad9\u5f0f\u201d\u548c\u201c\u6d77\u91cf\u6570\u636e\u201d\u3002\u5bf9\u4e8e\u201c\u4e00\u7ad9\u5f0f\u201d\uff0c\u6211\u4eec\u5e0c\u671b\u5c4f\u853d\u6280\u672f\u7ec6\u8282\u3001\u63d0\u4f9b\u5b8c\u6574\u6570\u636e\u96c6\u6210\u53ca\u914d\u5957\u670d\u52a1\uff0c\u5b9e\u73b0\u5f00\u7bb1\u5373\u7528\uff1b\u5bf9\u4e8e\u201c\u6d77\u91cf\u6570\u636e\u201d\uff0c\u6211\u4eec\u5e0c\u671b\u901a\u8fc7\u67b6\u6784\u4e0a\u7684\u6570\u636e\u94fe\u8def\u5206\u5c42\u3001\u5168\u7ec4\u4ef6\u53ef\u6269\u5c55\u3001\u81ea\u5e26\u591a\u96c6\u7fa4\u7ba1\u7406\u7b49\u4f18\u52bf\uff0c\u5728\u767e\u4e07\u4ebf\u6761/\u5929\u7684\u57fa\u7840\u4e0a\uff0c\u7a33\u5b9a\u652f\u6301\u66f4\u5927\u89c4\u6a21\u7684\u6570\u636e\u91cf\u3002"),(0,l.kt)("h2",{id:"170-\u7248\u672c\u603b\u89c8"},"1.7.0 \u7248\u672c\u603b\u89c8"),(0,l.kt)("p",null,"Apache InLong\uff08\u5e94\u9f99\uff09 \u6700\u8fd1\u53d1\u5e03\u4e86 1.7.0 \u7248\u672c\uff0c\u8be5\u7248\u672c\u5173\u95ed\u4e86\u7ea6 150+ \u4e2aissue\uff0c\u5305\u542b 3+ \u4e2a\u5927\u7279\u6027\u548c 40+ \u4e2a\u4f18\u5316\u3002\u4e3b\u8981\u5b8c\u6210\u4e86\u652f\u6301\u76f4\u53d1\u6570\u636e\u5230 Kafka\u3001MySQL \u6574\u5e93\u8fc1\u79fb\u652f\u6301 schema \u53d8\u66f4\u3001MySQL \u6574\u5e93\u8fc1\u79fb\u652f\u6301 GH-OST \u611f\u77e5\u3001\u589e\u52a0 CSV/SQL/JSON/Excel 4 \u79cd\u6279\u91cf\u5bfc\u5165\u6a21\u5f0f\u3001\u7b80\u5316\u547d\u4ee4\u884c\u5de5\u5177\u521b\u5efa\u6570\u636e\u6d41\u914d\u7f6e\u3001\u91cd\u6784 Dashboard \u6574\u4f53\u5e03\u5c40\u7b49\u3002\u8be5\u7248\u672c\u8fd8\u5b8c\u6210\u4e86\u5927\u91cf\u5176\u5b83\u7279\u6027\uff0c\u4e3b\u8981\u5305\u62ec\uff1a"),(0,l.kt)("h3",{id:"agent-\u6a21\u5757"},"Agent \u6a21\u5757"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u76f4\u63a5\u53d1\u9001\u6570\u636e\u5230 Kafka\uff0c\u4e0d\u7ecf\u8fc7 DataProxy"),(0,l.kt)("li",{parentName:"ul"},"Agent \u4f18\u5316\uff0c\u63d0\u4f9b\u6587\u4ef6\u91c7\u96c6\u53d1\u6027\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u590d MySQL \u91c7\u96c6\u65f6 Reader \u521b\u5efa\u5931\u8d25\u95ee\u9898")),(0,l.kt)("h3",{id:"dataproxy-\u6a21\u5757"},"DataProxy \u6a21\u5757"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7b80\u5316 common \u914d\u7f6e\u53ca\u76f8\u5173\u63a7\u5236\u903b\u8f91"),(0,l.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u4f18\u5316\uff0c\u6e05\u7406 ConfigManager \u4e2d\u7684\u65e0\u6548\u914d\u7f6e")),(0,l.kt)("h3",{id:"manager-\u6a21\u5757"},"Manager \u6a21\u5757"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u589e\u52a0 PostgreSQL\u3001Redis \u6570\u636e\u8282\u70b9\u7ba1\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u4e3a\u6570\u636e\u6e90\u589e\u52a0\u5fc3\u8df3\u8d85\u65f6\u72b6\u6001"),(0,l.kt)("li",{parentName:"ul"},"\u589e\u52a0 CSV/SQL/JSON/Excel 4 \u79cd\u6279\u91cf\u5bfc\u5165\u6a21\u5f0f"),(0,l.kt)("li",{parentName:"ul"},"\u7b80\u5316\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u6d89\u53ca\u6570\u636e\u6d41\u521b\u5efa\u7684\u903b\u8f91"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u91cd\u542f\u548c\u505c\u6b62\u6570\u636e\u6d41\u4e2d\u7684\u6570\u636e\u6e90\u4efb\u52a1"),(0,l.kt)("li",{parentName:"ul"},"Redis\u3001Kudu \u589e\u52a0\u8fde\u63a5\u6027\u6d4b\u8bd5")),(0,l.kt)("h3",{id:"sort-\u6a21\u5757"},"Sort \u6a21\u5757"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u65e5\u5fd7\u4e2d\u5c4f\u853d Flink SQL \u76f8\u5173\u6570\u636e\u6e90/\u76ee\u6807\u7aef\u7684\u654f\u611f\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5316\u8ba1\u7b97\u5bf9\u8c61\u5b57\u8282\u5927\u5c0f\u7684\u903b\u8f91\u53ca\u76f8\u5173\u6307\u6807"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u5728\u539f\u59cb\u6570\u636e\u4e2d\u63d0\u53d6 DDL \u53ca\u64cd\u4f5c"),(0,l.kt)("li",{parentName:"ul"},"\u5199\u5165 Iceberg \u65f6\u589e\u52a0\u901f\u7387\u63a7\u5236"),(0,l.kt)("li",{parentName:"ul"},"MySQL \u6574\u5e93\u8fc1\u79fb\u652f\u6301 schema \u53d8\u66f4"),(0,l.kt)("li",{parentName:"ul"},"\u6574\u5e93\u8fc1\u79fb\u4e2d\uff0cMySQL Connector \u652f\u6301\u611f\u77e5 GH-OST \u7684 DDL")),(0,l.kt)("h3",{id:"dashboard-\u6a21\u5757"},"Dashboard \u6a21\u5757"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u589e\u52a0 CSV/SQL/JSON/Excel 4 \u79cd\u6279\u91cf\u5bfc\u5165\u9875\u9762"),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5316 Clickhouse \u6d41\u5411\u914d\u7f6e\uff0c\u652f\u6301 ttl/engine \u7b49\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u91cd\u6784 Dashboard \u6574\u4f53\u5e03\u5c40\uff0c\u4f18\u5316\u663e\u793a\u4f53\u9a8c"),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5316\u6570\u636e\u6e90\u548c\u6570\u636e\u76ee\u6807\u7aef\u521b\u5efa\u6d41\u7a0b")),(0,l.kt)("h3",{id:"\u5176\u5b83"},"\u5176\u5b83"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4fee\u590d\u591a\u4e2a MySQL \u76f8\u5173\u5b89\u5168\u6f0f\u6d1e"),(0,l.kt)("li",{parentName:"ul"},"TubeMQ Golang SDK \u652f\u6301\u751f\u4ea7\uff0c\u5b8c\u6210\u4e00\u671f\u5f00\u53d1"),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5316 InLong \u5f00\u53d1\u5de5\u5177\u5728 MacOS \u548c Linux \u7684\u652f\u6301"),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5316 Pulsar Client \u4f9d\u8d56\u51cf\u5c0f\u5b89\u88c5\u5305\u5927\u5c0f")),(0,l.kt)("h2",{id:"170-\u7248\u672c\u7279\u6027\u4ecb\u7ecd"},"1.7.0 \u7248\u672c\u7279\u6027\u4ecb\u7ecd"),(0,l.kt)("h3",{id:"\u652f\u6301\u76f4\u53d1\u6570\u636e\u5230-kafka"},"\u652f\u6301\u76f4\u53d1\u6570\u636e\u5230 Kafka"),(0,l.kt)("p",null,"\u5728\u4e4b\u524d\u7248\u672c\u4e2d\uff0cInLong \u652f\u6301\u4e86 Agent \u76f4\u53d1\u6570\u636e\u5230 Pulsar \u800c\u4e0d\u7ecf\u8fc7 DataProxy\uff0c\u901a\u8fc7\u8fd9\u6837\u7684\u8bbe\u8ba1\uff0c\u5bf9\u4e8e\u6570\u636e\u573a\u666f\u7b80\u5355\u3001\u5c3d\u53ef\u80fd\u4fdd\u8bc1\u6570\u636e\u5b8c\u6574\u6027\u7528\u6237\uff0c\u53ef\u4ee5\u51cf\u5c11\u5bf9 DataProxy \u7684\u4f9d\u8d56\u3002\u5bf9\u4e8e\u4e60\u60ef\u4f7f\u7528 Kafka \u7684\u7528\u6237\uff0c\u5728 1.7.0 \u7248\u672c\u4e2d\u652f\u6301\u4e86 Agent \u76f4\u53d1\u6570\u636e\u5230 Kafka \u7684\u7279\u6027\uff0c\u611f\u8c22 @wangpeix \u7684\u5b8c\u6574\u8d21\u732e\uff0c\u8be6\u60c5\u53ef\u89c1 INLONG-7783\u3002\u5982\u679c\u9700\u8981\u4f53\u9a8c\u8be5\u7279\u6027\uff0c\u53ef\u4ee5\u5728\u6570\u636e\u6d41\u5ba1\u6279\u73af\u8282\u9009\u62e9\u201c\u53d1\u5f80 MQ\uff0c\u5f85 MQ \u63a5\u6536\u540e\u518d\u54cd\u5e94\u201d\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"1.7.0-kafka-stream",src:a(79810).Z,width:"796",height:"306"})),(0,l.kt)("h3",{id:"mysql-\u6574\u5e93\u8fc1\u79fb\u652f\u6301-schema-\u53d8\u66f4"},"MySQL \u6574\u5e93\u8fc1\u79fb\u652f\u6301 schema \u53d8\u66f4"),(0,l.kt)("p",null,"\u968f\u7740\u793e\u533a\u7528\u6237\u5bf9 InLong \u7684\u6df1\u5165\u4f7f\u7528\uff0c\u4e0d\u80fd\u652f\u6301 schema \u53d8\u66f4\u7684\u5f0a\u7aef\u9010\u6e10\u663e\u73b0\uff0c\u6e90\u7aef\u53d8\u66f4 DDL \u540e\u9700\u8981\u4efb\u52a1\u4fee\u6539\u914d\u7f6e\u91cd\u542f\uff0c\u5927\u5927\u589e\u5927\u4e86\u8fd0\u7ef4\u6210\u672c\uff0c\u5728\u5f53\u524d\u7248\u672c\u4e2d\uff0cInLong \u652f\u6301\u4e86 schema \u7684\u81ea\u52a8\u53d8\u66f4\u80fd\u529b\uff0c\u4e0a\u6e38\u6570\u636e\u6e90\u652f\u6301\u611f\u77e5 Create\u3001Alter\u3001Drop\u3001Truncate\u3001Rename \u7b49 DDL \u64cd\u4f5c\uff0c\u5e76\u540c\u6b65\u8be5 DDL \u64cd\u4f5c\u5230\u4e0b\u6e38\uff0c\u540c\u65f6\u4e0b\u6e38\u6570\u636e\u6e90\u652f\u6301\u54cd\u5e94\u4e0a\u6e38 DDL \u53d8\u66f4\uff0c\u5e76\u540c\u6b65\u5904\u7406\u8be5 DDL \u53d8\u66f4\uff0c\u540c\u65f6\u652f\u6301\u4e0d\u540c\u5904\u7406\u7b56\u7565\uff0c\u8be6\u60c5\u53c2\u8003 INLONG-7553\u3002\u611f\u8c22 @Emsnap @yunqingmoswu @lordcheng10 \u5bf9\u8be5\u529f\u80fd\u7684\u8d21\u732e\uff0c\u4e0b\u56fe\u4e3a\u6838\u5fc3\u6d41\u7a0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"1.7.0-mysql-schema",src:a(14024).Z,width:"1500",height:"528"})),(0,l.kt)("p",null,"\u6570\u636e\u5e93\u4e2d\u7684 DDL \u6d88\u606f\u7531 CDC \u4e2d\u7684 DEBEZIUM \u611f\u77e5\uff0c\u6b64\u65f6\u5f97\u5230\u7684\u6570\u636e\u4e3a\u5355\u4e00\u7684 DDL \u8bed\u53e5\uff0c\u4f8b\u5982\uff1a\u201cDROP TABLE A\u201d\uff0c\u8be5\u8bed\u53e5\u4e3a DEBEZIUM JSON \u4e2d\u7684\u5b57\u6bb5\uff0cDDL \u8bed\u53e5\u540e\u7ecf\u7531 JSQLPARSER \u89e3\u6790\u4e3a DDL MODEL\uff0c\u8be5 MODEL \u4e2d\u5bf9\u5e38\u89c1\u7684 DDL \u6d88\u606f\u90fd\u8fdb\u884c\u4e86\u89e3\u6790\uff0c\u5904\u7406\u4e3a\u7a0b\u5e8f\u6613\u5904\u7406\u7684 JSON \u683c\u5f0f\uff0cDDL MODEL \u4f1a\u4f5c\u4e3a FLINK \u4e2d\u7684\u6570\u636e\u4e0b\u53d1\u5230 SINK OPERATOR, \u7531 OPERATOR \u5bf9 DDL MODEL \u8fdb\u884c\u5904\u7406\u3002"),(0,l.kt)("h3",{id:"mysql-\u6574\u5e93\u8fc1\u79fb\u652f\u6301-gh-ost-\u611f\u77e5"},"MySQL \u6574\u5e93\u8fc1\u79fb\u652f\u6301 GH-OST \u611f\u77e5"),(0,l.kt)("p",null,"GH-OST\uff08GitHub Online Schema Migration\uff09\u662f GitHub \u53d1\u5e03\u7684\u4e00\u6b3e\u7528\u4e8e MySQL \u7684\u65e0\u89e6\u53d1\u5668\u5728\u7ebf\u6a21\u5f0f\u8fc1\u79fb\u89e3\u51b3\u65b9\u6848\u3002\u5b83\u662f\u53ef\u6d4b\u8bd5\u7684\uff0c\u5e76\u63d0\u4f9b\u6682\u505c\uff0c\u52a8\u6001\u63a7\u5236/\u91cd\u65b0\u914d\u7f6e\uff0c\u5ba1\u8ba1\u548c\u8bb8\u591a\u64cd\u4f5c\u7279\u6743\u3002\u5b83\u5728\u6574\u4e2a\u8fc1\u79fb\u8fc7\u7a0b\u4e2d\uff0c\u5bf9\u4e3b\u670d\u52a1\u5668\u4ea7\u751f\u7684\u5de5\u4f5c\u91cf\u5f88\u5c11\uff0c\u4e0e\u5df2\u8fc1\u79fb\u8868\u4e0a\u7684\u73b0\u6709\u5de5\u4f5c\u5206\u79bb\u3002\u901a\u8fc7\u652f\u6301\u611f\u77e5 GH-OST \u7684 DDL\uff0cMySQL Connector \u53ef\u4ee5\u5728\u6355\u83b7\u6570\u636e\u53d8\u66f4\u7684\u540c\u65f6\uff0c\u6b63\u786e\u5904\u7406\u7531 GH-OST \u5f15\u53d1\u7684\u8868\u7ed3\u6784\u53d8\u66f4\u3002\u611f\u8c22 @e-mhui \u7684\u5b8c\u6574\u8d21\u732e\uff0c\u8be5\u7279\u6027\u8be6\u60c5\u53ef\u89c1 INLONG-7554\u3002\u4e0b\u56fe\u4e3a\u6838\u5fc3\u6d41\u7a0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"1.7.0-mysql-ghost",src:a(89526).Z,width:"1500",height:"1099"})),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u5f00\u542f MySQL CDC \u7684 DDL \u81ea\u52a8\u54cd\u5e94\u540e\uff0c\u5bf9 GH-OST \u4ea7\u751f\u7684 ghc, gho, del \u8868\u4e5f\u8fdb\u884c\u6355\u83b7\uff1b\u5176\u6b21\uff0c\u5728\u611f\u77e5\u5230 GH-OST \u5bf9 gho \u8868\u7684\u53d8\u66f4\u65f6\uff0c\u5c06 DDL \u8bed\u53e5\u4e2d\u7684 gho \u8868\u66ff\u6362\u6210 \u6e90\u8868\uff0c\u5e76\u5b58\u50a8\u5230 state \u4e2d\uff1b\u6700\u540e\uff0c\u5728 GH-OST \u5bf9\u6e90\u8868\u6267\u884c\u5b8c\u6574\u7684\u53d8\u66f4\u6d41\u7a0b\u540e\uff0c\u5c06\u4e4b\u524d\u5b58\u50a8\u5230 state \u4e2d\u7684 DDL \u8bed\u53e5\u53d1\u9001\u5230\u4e0b\u6e38\u3002"),(0,l.kt)("h3",{id:"\u589e\u52a0-csvsqljsonexcel-4-\u79cd\u6279\u91cf\u5bfc\u5165\u6a21\u5f0f"},"\u589e\u52a0 CSV/SQL/JSON/Excel 4 \u79cd\u6279\u91cf\u5bfc\u5165\u6a21\u5f0f"),(0,l.kt)("p",null,"\u5728\u521b\u5efa\u6570\u636e\u6d41\u5f55\u5165\u5143\u6570\u636e\u5b57\u6bb5\u65f6\uff0c\u6211\u4eec\u9700\u8981\u6309\u540d\u79f0\u3001\u7c7b\u578b\u3001\u63cf\u8ff0\u7b49\u4fe1\u606f\u4f9d\u6b21\u8f93\u5165\uff0c\u5982\u679c\u9700\u8981\u5f55\u5165\u6210\u767e\u4e0a\u5343\u7684\u5b57\u6bb5\u4fe1\u606f\uff0c\u8fd9\u79cd\u5904\u7406\u65b9\u5f0f\u6548\u7387\u6781\u4f4e\u3002\u5728 1.7.0 \u7248\u672c\u4e2d\uff0cInLong \u540c\u65f6\u589e\u52a0\u4e86 CSV/SQL/JSON/Excel 4 \u79cd\u683c\u5f0f\u7684\u6279\u91cf\u5bfc\u5165\u6a21\u5f0f\uff0c\u7528\u6237\u53ea\u9700\u8981\u53c2\u8003\u6bcf\u79cd\u683c\u5f0f\u7684\u6a21\u677f\uff0c\u586b\u5199\u81ea\u9009\u4fe1\u606f\uff0c\u5c31\u53ef\u4ee5\u5b9e\u73b0\u4e00\u6b21\u6027\u5bfc\u5165\u3002\u8be5\u529f\u80fd\u975e\u5e38\u611f\u8c22 @featzhang\u3001@fuweng11 \u53c2\u4e0e\u5f00\u53d1\u5b8c\u6210\u30024 \u79cd\u6279\u91cf\u5bfc\u5165\u6a21\u5f0f\u5df2\u7ecf\u652f\u6301\u524d\u540e\u7aef\uff0c\u53ef\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u76f4\u63a5\u4f7f\u7528\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"1.7.0-batch-add",src:a(3756).Z,width:"643",height:"874"})),(0,l.kt)("h3",{id:"\u7b80\u5316\u547d\u4ee4\u884c\u5de5\u5177\u521b\u5efa\u6570\u636e\u6d41\u914d\u7f6e"},"\u7b80\u5316\u547d\u4ee4\u884c\u5de5\u5177\u521b\u5efa\u6570\u636e\u6d41\u914d\u7f6e"),(0,l.kt)("p",null,"\u65e7\u7248\u672c\u4f7f\u7528\u547d\u4ee4\u884c\u521b\u5efa\u6570\u636e\u6d41\u65f6\uff0c\u9700\u8981\u51c6\u5907\u7684 JSON \u6587\u4ef6\u5185\u5bb9\u5f88\u590d\u6742\uff0c\u5e76\u4e14\u6587\u4ef6\u7ed3\u6784\u4e0d\u591f\u6e05\u6670\uff0c\u7528\u6237\u901a\u8fc7\u547d\u4ee4\u884c\u521b\u5efa\u6570\u636e\u6d41\u7684\u95e8\u69db\u975e\u5e38\u9ad8\u3002\u53e6\u5916\uff0c\u7528\u6237\u60f3\u590d\u7528\u6587\u4ef6\u521b\u5efa\u65b0\u7684\u6570\u636e\u6d41\u65f6\uff0c\u9700\u8981\u4fee\u6539\u5f88\u591a\u91cd\u590d\u7684\u5b57\u6bb5\uff0c\u5982 inlongGroupID\u3001inlongStreamID\u3002\u5728 1.7.0 \u7248\u672c\u4e2d\uff0cInLong \u4f18\u5316\u4e86\u6570\u636e\u6d41\u914d\u7f6e JSON \u7ed3\u6784\u4ee5\u53ca\u5b57\u6bb5\u914d\u7f6e\uff0c\u7528\u6237\u53ef\u6839\u636e\u6570\u636e\u6d41\u9700\u6c42\uff0c\u7b80\u5355\u6dfb\u52a0 Source / Sink \u5185\u5bb9\u5373\u53ef\uff0c\u6574\u4e2a\u521b\u5efa\u6570\u636e\u6d41\u8fc7\u7a0b\u76f8\u8f83\u4e4b\u524d\u7b80\u5355\u4e86\u5f88\u591a\u3002\u8be6\u60c5\u53ef\u89c1 INLONG-7778\uff0c\u975e\u5e38\u611f\u8c22 @haifxu \u7684\u8d21\u732e\u3002\u4ee5\u4e0b\u793a\u4f8b\u4e3a\u65b0\u7248\u672c\u521b\u5efa File -> Pulsar -> Clickhouse \u7684\u6a21\u677f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "groupInfo": {\n        "inlongGroupId": "test_group_ctl",\n        "inlongClusterTag": "default_cluster",\n        "mqType": "PULSAR"\n    },\n    "streamInfo": {\n        "inlongStreamId": "test_stream_ctl",\n        "fieldList": [\n            {\n                "fieldName": "name",\n                "fieldType": "string"\n            }\n        ],\n        "sourceList": [\n            {\n                "sourceType": "FILE",\n                "sourceName": "test_source_ctl",\n                "agentIp": "127.0.0.1",\n                "pattern": "/data/test.txt"\n            }\n        ],\n        "sinkList": [\n            {\n                "sinkType": "CLICKHOUSE",\n                "sinkName": "test_sink_ctl",\n                "dataNodeName": "test_clickhouse",\n                "dbName": "db_test",\n                "tableName": "table_test",\n                "flushInterval": 1,\n                "flushRecord": 1000,\n                "retryTimes": 3,\n                "engine": "Log",\n                "isDistributed": 1,\n                "sinkFieldList": [\n                    {\n                        "sourceFieldName": "name",\n                        "sourceFieldType": "string",\n                        "fieldName": "name",\n                        "fieldType": "string"\n                    }\n                ]\n            }\n        ]\n    }\n}\n')),(0,l.kt)("h3",{id:"\u91cd\u6784-dashboard-\u6574\u4f53\u5e03\u5c40"},"\u91cd\u6784 Dashboard \u6574\u4f53\u5e03\u5c40"),(0,l.kt)("p",null,"\u5728 1.7.0 \u7248\u672c\u4e2d\uff0c\u793e\u533a\u91cd\u6784\u4e86 Dashboard \u7684\u6574\u4f53\u5e03\u5c40\uff0c\u5305\u62ec\u5c06\u4e0a\u4e0b\u5e03\u5c40\u8c03\u6574\u4e3a\u5de6\u53f3\u5e03\u5c40\uff08\u5bfc\u822a\u680f\u79fb\u52a8\u5230\u5de6\u4fa7\uff09\u3001\u589e\u52a0\u6697\u9ed1\u4e3b\u9898\u3001\u4e3b\u8981\u83dc\u5355\u589e\u52a0 icon\u3001\u8c03\u6574\u6570\u636e\u6e90\u9009\u62e9\u663e\u793a\u548c\u6d41\u7a0b\u7b49\uff0c\u8fd9\u6b21\u8c03\u6574\u4f7f Dashboard \u7684\u4f7f\u7528\u4f53\u9a8c\u66f4\u597d\uff0c\u7279\u522b\u611f\u8c22@leezng\u3001@bluewang \u7684\u8d21\u732e\uff0c\u8be6\u60c5\u53ef\u89c1 INLONG-7734\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"1.7.0-dashboard-refactor",src:a(22986).Z,width:"1500",height:"414"})),(0,l.kt)("h2",{id:"\u540e\u7eed\u89c4\u5212"},"\u540e\u7eed\u89c4\u5212"),(0,l.kt)("p",null,"\u5728 1.7.0 \u7248\u672c\u4e2d\uff0c\u793e\u533a\u8fd8\u63d0\u5347\u4e86 Agent \u6587\u4ef6\u91c7\u96c6\u7684\u6027\u80fd\u548c\u7a33\u5b9a\u6027\uff0c\u540c\u65f6 TubeMQ \u5b8c\u6210 Golang SDK \u751f\u4ea7\u4e00\u671f\uff0cSort \u4e5f\u80fd\u591f\u4f7f\u7528 Manager \u5206\u914d\u7684\u8ba2\u9605\u7ec4\u8fdb\u884c\u6d88\u8d39\u3002\u5728\u540e\u7eed\u7684\u7248\u672c\u4e2d\uff0cInLong \u4f1a\u652f\u6301 Apache Flink \u591a\u7248\u672c\uff0c\u9664\u4e86\u5f53\u524d\u7684 Flink 1.13\uff0c\u8fd8\u4f1a\u652f\u6301 Flink 1.15\uff1b\u53e6\u5916\uff0c\u4e5f\u4f1a\u589e\u52a0\u79df\u6237\u7ba1\u7406\uff0c\u5b8c\u6210 InLong \u9879\u76ee\u3001\u7528\u6237\u3001\u8d44\u6e90\u7684\u6a21\u578b\u7684\u7edf\u4e00\uff0c\u671f\u5f85\u66f4\u591a\u5f00\u53d1\u8005\u53c2\u4e0e\u8d21\u732e\u3002"))}g.isMDXComponent=!0},3756:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1.7.0-batch-add-136b87483c01a78bbbd7b80aa194ea9b.png"},22986:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1.7.0-dashboard-refactor-e7c82a297e6b8bbb8dace6e13436493a.png"},79810:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1.7.0-kafka-stream-160a6bb1039f6528b6fe35127f5144f5.png"},89526:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1.7.0-mysql-ghost-c636b0dc81e758f18e5b73e00701bbe8.png"},14024:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1.7.0-mysql-schema-a2fa0fd42333476bceec44d1f5f7346b.png"}}]);