"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3737],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),k=r,m=c["".concat(s,".").concat(k)]||c[k]||d[k]||l;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const l={title:"Agent \u63d2\u4ef6",sidebar_position:1},i="\u603b\u89c8",o={unversionedId:"design_and_concept/how_to_write_plugin_agent",id:"version-1.0.0/design_and_concept/how_to_write_plugin_agent",title:"Agent \u63d2\u4ef6",description:"\u672c\u6587\u9762\u5411 InLong-Agent \u63d2\u4ef6\u5f00\u53d1\u4eba\u5458\uff0c\u5c1d\u8bd5\u5c3d\u53ef\u80fd\u5168\u9762\u5730\u9610\u8ff0\u5f00\u53d1\u4e00\u4e2a Agent \u63d2\u4ef6\u6240\u7ecf\u8fc7\u7684\u5386\u7a0b\uff0c\u529b\u6c42\u6d88\u9664\u5f00\u53d1\u8005\u7684\u56f0\u60d1\uff0c\u8ba9\u63d2\u4ef6\u5f00\u53d1\u53d8\u5f97\u7b80\u5355\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.0/design_and_concept/how_to_write_plugin_agent.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/how_to_write_plugin_agent",permalink:"/zh-CN/docs/1.0.0/design_and_concept/how_to_write_plugin_agent",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.0.0/design_and_concept/how_to_write_plugin_agent.md",tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{title:"Agent \u63d2\u4ef6",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u672c\u6982\u5ff5",permalink:"/zh-CN/docs/1.0.0/design_and_concept/basic_concept"},next:{title:"\u5982\u4f55\u7f16\u8bd1",permalink:"/zh-CN/docs/1.0.0/quick_start/how_to_build"}},s={},p=[{value:"\u5f00\u53d1\u4e4b\u524d",id:"\u5f00\u53d1\u4e4b\u524d",level:2},{value:"\u6d41\u7a0b\u56fe\u793a",id:"\u6d41\u7a0b\u56fe\u793a",level:2},{value:"\u53c2\u8003 Demo",id:"\u53c2\u8003-demo",level:2},{value:"\u5f00\u53d1\u6d41\u7a0b",id:"\u5f00\u53d1\u6d41\u7a0b",level:2},{value:"\u7f16\u7a0b\u5fc5\u77e5\u63a5\u53e3",id:"\u7f16\u7a0b\u5fc5\u77e5\u63a5\u53e3",level:2},{value:"Reader",id:"reader",level:3},{value:"Sink",id:"sink",level:3},{value:"Source",id:"source",level:3},{value:"\u4efb\u52a1\u914d\u7f6e",id:"\u4efb\u52a1\u914d\u7f6e",level:2},{value:"Message",id:"message",level:2},{value:"Last but not Least",id:"last-but-not-least",level:2}],u={toc:p};function d(e){let{components:n,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,r.kt)("p",null,"\u672c\u6587\u9762\u5411 InLong-Agent \u63d2\u4ef6\u5f00\u53d1\u4eba\u5458\uff0c\u5c1d\u8bd5\u5c3d\u53ef\u80fd\u5168\u9762\u5730\u9610\u8ff0\u5f00\u53d1\u4e00\u4e2a Agent \u63d2\u4ef6\u6240\u7ecf\u8fc7\u7684\u5386\u7a0b\uff0c\u529b\u6c42\u6d88\u9664\u5f00\u53d1\u8005\u7684\u56f0\u60d1\uff0c\u8ba9\u63d2\u4ef6\u5f00\u53d1\u53d8\u5f97\u7b80\u5355\u3002"),(0,r.kt)("h2",{id:"\u5f00\u53d1\u4e4b\u524d"},"\u5f00\u53d1\u4e4b\u524d"),(0,r.kt)("p",null,"InLong Agent \u672c\u8eab\u4f5c\u4e3a\u6570\u636e\u91c7\u96c6\u6846\u67b6\uff0c\u91c7\u7528 Job + Task \u67b6\u6784\u6784\u5efa\u3002\u5e76\u5c06\u6570\u636e\u6e90\u8bfb\u53d6\u548c\u5199\u5165\u62bd\u8c61\u6210\u4e3a Reader/Sink \u63d2\u4ef6\uff0c\u7eb3\u5165\u5230\u6574\u4e2a\u6846\u67b6\u4e2d\u3002"),(0,r.kt)("p",null,"\u5f00\u53d1\u4eba\u5458\u9700\u8981\u660e\u786e Job \u4ee5\u53ca Task \u7684\u6982\u5ff5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Job"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Job"),"\u662f Agent \u7528\u4ee5\u63cf\u8ff0\u4ece\u4e00\u4e2a\u6e90\u5934\u5230\u4e00\u4e2a\u76ee\u7684\u7aef\u7684\u540c\u6b65\u4f5c\u4e1a\uff0c\u662f Agent \u6570\u636e\u540c\u6b65\u7684\u6700\u5c0f\u4e1a\u52a1\u5355\u5143\u3002\u6bd4\u5982\uff1a\u8bfb\u53d6\u4e00\u4e2a\u6587\u4ef6\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Task"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Task"),"\u662f\u628a",(0,r.kt)("inlineCode",{parentName:"li"},"Job"),"\u62c6\u5206\u5f97\u5230\u7684\u6700\u5c0f\u6267\u884c\u5355\u5143\u3002\u6bd4\u5982\uff1a\u6587\u4ef6\u5939\u4e0b\u6709\u591a\u4e2a\u6587\u4ef6\u9700\u8981\u88ab\u8bfb\u53d6\uff0c\u90a3\u4e48\u4e00\u4e2a job \u4f1a\u88ab\u62c6\u5206\u6210\u4e3a\u591a\u4e2a task \uff0c\u6bcf\u4e2a task \u8bfb\u53d6\u5bf9\u5e94\u7684\u6587\u4ef6")),(0,r.kt)("p",null,"\u4e00\u4e2aTask\u5305\u542b\u4ee5\u4e0b\u5404\u4e2a\u7ec4\u4ef6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reader\uff1aReader \u4e3a\u6570\u636e\u91c7\u96c6\u6a21\u5757\uff0c\u8d1f\u8d23\u91c7\u96c6\u6570\u636e\u6e90\u7684\u6570\u636e\uff0c\u5c06\u6570\u636e\u53d1\u9001\u7ed9 channel\u3002"),(0,r.kt)("li",{parentName:"ul"},"Sink\uff1a Sink \u4e3a\u6570\u636e\u5199\u5165\u6a21\u5757\uff0c\u8d1f\u8d23\u4e0d\u65ad\u5411 channel \u53d6\u6570\u636e\uff0c\u5e76\u5c06\u6570\u636e\u5199\u5165\u5230\u76ee\u7684\u7aef\u3002"),(0,r.kt)("li",{parentName:"ul"},"Channel\uff1aChannel \u7528\u4e8e\u8fde\u63a5 reader \u548c sink\uff0c\u4f5c\u4e3a\u4e24\u8005\u7684\u6570\u636e\u4f20\u8f93\u901a\u9053\uff0c\u5e76\u8d77\u5230\u4e86\u6570\u636e\u7684\u5199\u5165\u8bfb\u53d6\u76d1\u63a7\u4f5c\u7528")),(0,r.kt)("p",null,"\u4f5c\u4e3a\u5f00\u53d1\u4eba\u5458\uff0c\u5b9e\u9645\u4e0a\u53ea\u9700\u8981\u5f00\u53d1\u7279\u5b9a\u7684 Source\u3001Reader \u4ee5\u53ca Sink \u5373\u53ef\uff0c\u6570\u636e\u5982\u679c\u9700\u8981\u6301\u4e45\u5316\u5230\u672c\u5730\u78c1\u76d8\uff0c\u4f7f\u7528\u6301\u4e45\u5316 Channel \uff0c\u5982\u679c\u5426\u5219\u4f7f\u7528\u5185\u5b58 Channel"),(0,r.kt)("h2",{id:"\u6d41\u7a0b\u56fe\u793a"},"\u6d41\u7a0b\u56fe\u793a"),(0,r.kt)("p",null,"\u4e0a\u8ff0\u4ecb\u7ecd\u7684 Job \\ Task \\ Reader \\ Sink \\ Channel \u6982\u5ff5\u53ef\u4ee5\u7528\u4e0b\u56fe\u8868\u793a\uff1a\n",(0,r.kt)("img",{src:t(95313).Z,width:"691",height:"607"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7528\u6237\u63d0\u4ea4 Job\uff08\u901a\u8fc7 manager \u6216\u8005\u901a\u8fc7 curl \u65b9\u5f0f\u63d0\u4ea4\uff09\uff0cJob \u4e2d\u5b9a\u4e49\u4e86\u9700\u8981\u4f7f\u7528\u7684 Source, Channel, Sink\uff08\u901a\u8fc7\u7c7b\u7684\u5168\u9650\u5b9a\u540d\u5b9a\u4e49\uff09"),(0,r.kt)("li",{parentName:"ol"},"\u6846\u67b6\u542f\u52a8 Job\uff0c\u901a\u8fc7\u53cd\u5c04\u673a\u5236\u521b\u5efa\u51fa Source"),(0,r.kt)("li",{parentName:"ol"},"\u6846\u67b6\u542f\u52a8 Source\uff0c\u5e76\u8c03\u7528 Source \u7684 Split \u63a5\u53e3\uff0c\u751f\u6210\u4e00\u4e2a\u6216\u8005\u591a\u4e2a Task"),(0,r.kt)("li",{parentName:"ol"},"\u751f\u6210\u4e00\u4e2a Task \u65f6\uff0c\u540c\u65f6\u751f\u6210 Reader\uff08\u4e00\u79cd\u7c7b\u578b\u7684 Source \u4f1a\u751f\u6210\u5bf9\u5e94\u7684 reader)\uff0c\u7528\u6237\u914d\u7f6e\u7684 Channel \u4ee5\u53ca\u7528\u6237\u914d\u7f6e\u7684 Sink"),(0,r.kt)("li",{parentName:"ol"},"Task \u5f00\u59cb\u6267\u884c\uff0cReader \u5f00\u59cb\u8bfb\u53d6\u6570\u636e\u5230 Channel\uff0cSink \u4ece Channel \u4e2d\u53d6\u6570\u8fdb\u884c\u53d1\u9001"),(0,r.kt)("li",{parentName:"ol"},"Job \u548c Task \u6267\u884c\u65f6\u6240\u9700\u8981\u7684\u6240\u6709\u4fe1\u606f\u90fd\u5c01\u88c5\u5728 JobProfile \u4e2d")),(0,r.kt)("h2",{id:"\u53c2\u8003-demo"},"\u53c2\u8003 Demo"),(0,r.kt)("p",null,"\u8bf7\u5f00\u53d1\u4eba\u5458\u901a\u8fc7\u9605\u8bfb Agent \u6e90\u7801\u4e2d\u7684 Job \u7c7b\u3001Task \u7c7b\u3001TextFileSource \u7c7b\u3001TextFileReader \u7c7b\u3001\u4ee5\u53ca ProxySink \u7c7b\u6765\u5f04\u61c2\u4e0a\u8ff0\u6d41\u7a0b"),(0,r.kt)("h2",{id:"\u5f00\u53d1\u6d41\u7a0b"},"\u5f00\u53d1\u6d41\u7a0b"),(0,r.kt)("p",null,"1\u3001\u9996\u5148\u5f00\u53d1 Source , \u5b9e\u73b0 Split \u903b\u8f91\uff0c\u8fd4\u56de Reader \u5217\u8868\n2\u3001\u5f00\u53d1\u5bf9\u5e94\u7684 Reader \uff0c\u5b9e\u73b0\u8bfb\u53d6\u6570\u636e\u5e76\u5199\u5165\u5230 Channel \u7684\u903b\u8f91\n3\u3001\u5f00\u53d1\u5bf9\u5e94\u7684 Sink , \u5b9e\u73b0\u4ece Channel \u4e2d\u53d6\u6570\u5e76\u5199\u5165\u5230\u6307\u5b9a Sink \u4e2d\u7684\u903b\u8f91"),(0,r.kt)("h2",{id:"\u7f16\u7a0b\u5fc5\u77e5\u63a5\u53e3"},"\u7f16\u7a0b\u5fc5\u77e5\u63a5\u53e3"),(0,r.kt)("p",null,"\u4e0b\u9762\u5c06\u4ecb\u7ecd\u5f00\u53d1\u4e00\u6b3e\u63d2\u4ef6\u9700\u8981\u77e5\u9053\u7684\u7c7b\u4e0e\u63a5\u53e3\uff0c\u5982\u4e0b\uff1a"),(0,r.kt)("h3",{id:"reader"},"Reader"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private class ReaderImpl implements Reader {\n\n    private int count = 0;\n\n    @Override\n    public Message read() {\n        count += 1;\n        return new DefaultMessage("".getBytes(StandardCharsets.UTF_8));\n    }\n\n    @Override\n    public boolean isFinished() {\n        return count > 99999;\n    }\n\n    @Override\n    public String getReadSource() {\n        return null;\n    }\n\n    @Override\n    public void setReadTimeout(long mill) {\n\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Reader"),"\u63a5\u53e3\u529f\u80fd\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"read"),": \u88ab\u5355\u4e2a Task \u8c03\u7528\uff0c\u8c03\u7528\u540e\u8fd4\u56de\u8bfb\u53d6\u7684\u4e00\u6761\u6d88\u606f\uff0cAgent \u5185\u90e8\u7684\u6d88\u606f\u4f7f\u7528 Message \u5c01\u88c5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isFinished"),": \u5224\u65ad\u662f\u5426\u8bfb\u53d6\u5b8c\u6210\uff0c\u4e3e\u4f8b\uff1a\u5982\u679c\u662f SQL \u4efb\u52a1\uff0c\u5219\u5224\u65ad\u662f\u5426\u8bfb\u53d6\u5b8c\u4e86 ResultSet \u4e2d\u7684\u6240\u6709\u5185\u5bb9,\u5982\u679c\u662f\u6587\u4ef6\u4efb\u52a1\uff0c\u5219\u5224\u65ad\u8d85\u8fc7\u7528\u6237\u8bbe\u7f6e\u7684\u7b49\u5f85\u65f6\u95f4\u540e\u662f\u5426\u8fd8\u6709\u6570\u636e\u5199\u5165"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getReadSource"),": \u83b7\u53d6\u91c7\u96c6\u6e90\uff0c\u4e3e\u4f8b\uff1a\u5982\u679c\u662f\u6587\u4ef6\u4efb\u52a1\uff0c\u5219\u8fd4\u56de\u5f53\u524d\u8bfb\u53d6\u7684\u6587\u4ef6\u540d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setReadTimeout"),": \u8bbe\u7f6e\u8bfb\u53d6\u8d85\u65f6\u65f6\u95f4")),(0,r.kt)("h3",{id:"sink"},"Sink"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface Sink extends Stage {\n\n    /**\n     * Write data into data center\n     *\n     * @param message - message\n     */\n    void write(Message message);\n\n    /**\n     * set source file name where the message is generated\n     * @param sourceName\n     */\n    void setSourceName(String sourceName);\n\n    /**\n     * every sink should include a message filter to filter out stream id\n     */\n    MessageFilter initMessageFilter(JobProfile jobConf);\n}\n\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Sink"),"\u63a5\u53e3\u529f\u80fd\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"write"),": \u88ab\u5355\u4e2a Task \u8c03\u7528\uff0c\u4ece Task \u4e2d\u7684 Channel \u8bfb\u53d6\u4e00\u6761\u6d88\u606f\uff0c\u5e76\u5199\u5165\u5230\u7279\u5b9a\u7684\u5b58\u50a8\u4ecb\u8d28\u4e2d\uff0c\u4ee5 PulsarSink \u4e3a\u4f8b\uff0c\u5219\u9700\u8981\u901a\u8fc7 PulsarSender \u53d1\u9001\u5230 Pulsar"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setSourceName"),": \u8bbe\u7f6e\u6570\u636e\u6e90\u540d\u79f0\uff0c\u5982\u679c\u662f\u6587\u4ef6\uff0c\u5219\u662f\u6587\u4ef6\u540d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initMessageFilter"),": \u521d\u59cb\u5316 MessageFilter , \u7528\u6237\u53ef\u4ee5\u5728Job\u914d\u7f6e\u6587\u4ef6\u4e2d\u901a\u8fc7\u8bbe\u7f6e agent.message.filter.classname \u6765\u521b\u5efa\u4e00\u4e2a\u6d88\u606f\u8fc7\u6ee4\u5668\u6765\u8fc7\u6ee4\u6bcf\u4e00\u6761\u6d88\u606f\uff0c\u8be6\u60c5\u53ef\u4ee5\u53c2\u8003 MessageFilter \u63a5\u53e3")),(0,r.kt)("h3",{id:"source"},"Source"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Source can be split into multiple reader.\n */\npublic interface Source {\n\n    /**\n     * Split source into a list of readers.\n     *\n     * @param conf job conf\n     * @return - list of reader\n     */\n    List<Reader> split(JobProfile conf);\n}\n\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Source"),"\u63a5\u53e3\u529f\u80fd\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"split"),": \u88ab\u5355\u4e2a Job \u8c03\u7528\uff0c\u4ea7\u751f\u591a\u4e2a Reader\uff0c\u4e3e\u4f8b\uff1a\u4e00\u4e2a\u8bfb\u53d6\u6587\u4ef6\u4efb\u52a1\uff0c\u5339\u914d\u6587\u4ef6\u5939\u5185\u7684\u591a\u4e2a\u6587\u4ef6\uff0c\u5728 job \u542f\u52a8\u65f6\uff0c\u4f1a\u6307\u5b9a TextFileSource \u4f5c\u4e3a Source \u5165\u53e3\uff0c\n\u8c03\u7528 split \u51fd\u6570\u540e\uff0cTextFileSource \u4f1a\u68c0\u6d4b\u7528\u6237\u8bbe\u7f6e\u7684\u6587\u4ef6\u5939\u5185\u6709\u591a\u5c11\u7b26\u5408\u8def\u5f84\u5339\u914d\u8868\u8fbe\u5f0f\u7684\u8def\u5f84\uff0c\u5e76\u751f\u6210 TextFileReader \u8bfb\u53d6")),(0,r.kt)("h2",{id:"\u4efb\u52a1\u914d\u7f6e"},"\u4efb\u52a1\u914d\u7f6e"),(0,r.kt)("p",null,"\u4ee3\u7801\u5199\u597d\u4e86\uff0c\u6709\u6ca1\u6709\u60f3\u8fc7\u6846\u67b6\u662f\u600e\u4e48\u627e\u5230\u63d2\u4ef6\u7684\u5165\u53e3\u7c7b\u7684\uff1f\u6846\u67b6\u662f\u5982\u4f55\u52a0\u8f7d\u63d2\u4ef6\u7684\u5462\uff1f"),(0,r.kt)("p",null,"\u5728\u63d0\u4ea4\u4efb\u52a1\u65f6\uff0c\u4f1a\u53d1\u73b0\u4efb\u52a1\u4e2d\u5b9a\u4e49\u4e86\u63d2\u4ef6\u7684\u76f8\u5173\u4fe1\u606f\uff0c\u5305\u62ec\u5165\u53e3\u7c7b\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n"job": {\n"name": "fileAgentTest",\n"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",\n"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n}\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"source"),": Source \u7c7b\u7684\u5168\u9650\u5b9a\u540d\u79f0\uff0c\u6846\u67b6\u901a\u8fc7\u53cd\u5c04\u63d2\u4ef6\u5165\u53e3\u7c7b\u7684\u5b9e\u4f8b\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sink"),": Sink \u7c7b\u7684\u5168\u9650\u5b9a\u540d\u79f0\uff0c\u6846\u67b6\u901a\u8fc7\u53cd\u5c04\u63d2\u4ef6\u5165\u53e3\u7c7b\u7684\u5b9e\u4f8b\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"channel"),": \u4f7f\u7528\u7684 Channel \u7c7b\u540d\uff0c\u6846\u67b6\u901a\u8fc7\u53cd\u5c04\u63d2\u4ef6\u5165\u53e3\u7c7b\u7684\u5b9e\u4f8b\u3002")),(0,r.kt)("h2",{id:"message"},"Message"),(0,r.kt)("p",null,"\u8ddf\u4e00\u822c\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"\u751f\u4ea7\u8005-\u6d88\u8d39\u8005"),"\u6a21\u5f0f\u4e00\u6837\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Reader"),"\u63d2\u4ef6\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Sink"),"\u63d2\u4ef6\u4e4b\u95f4\u4e5f\u662f\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"channel"),"\u6765\u5b9e\u73b0\u6570\u636e\u7684\u4f20\u8f93\u7684\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"channel"),"\u53ef\u4ee5\u662f\u5185\u5b58\u7684\uff0c\u4e5f\u53ef\u80fd\u662f\u6301\u4e45\u5316\u7684\uff0c\u63d2\u4ef6\u4e0d\u5fc5\u5173\u5fc3\u3002\u63d2\u4ef6\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"RecordSender"),"\u5f80",(0,r.kt)("inlineCode",{parentName:"p"},"channel"),"\u5199\u5165\u6570\u636e\uff0c\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"RecordReceiver"),"\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"channel"),"\u8bfb\u53d6\u6570\u636e\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"channel"),"\u4e2d\u7684\u4e00\u6761\u6570\u636e\u4e3a\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"Message"),"\u7684\u5bf9\u8c61\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Message"),"\u4e2d\u5305\u542b\u4e00\u4e2a\u5b57\u8282\u6570\u7ec4\u4ee5\u53ca\u4e00\u4e2aMap\u8868\u793a\u7684\u5c5e\u6027\u6570\u636e"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Message"),"\u6709\u5982\u4e0b\u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface Message {\n\n    /**\n     * Data content of message.\n     *\n     * @return bytes body\n     */\n    byte[] getBody();\n\n    /**\n     * Data attribute of message\n     *\n     * @return map header\n     */\n    Map<String, String> getHeader();\n}\n")),(0,r.kt)("p",null,"\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u6839\u636e\u8be5\u63a5\u53e3\u62d3\u5c55\u5b9a\u5236\u5316\u7684 Message \uff0c\u6bd4\u5982 ProxyMessage \u4e2d\uff0c\u5c31\u5305\u542b\u4e86 InLongGroupId, InLongStreamId \u7b49\u5c5e\u6027"),(0,r.kt)("h2",{id:"last-but-not-least"},"Last but not Least"),(0,r.kt)("p",null,"\u65b0\u589e\u63d2\u4ef6\u90fd\u5fc5\u987b\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"InLong"),"\u5b98\u65b9wiki\u4e2d\u6709\u4e00\u7bc7\u6587\u6863\uff0c\u6587\u6863\u9700\u8981\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u5feb\u901f\u4ecb\u7ecd"),"\uff1a\u4ecb\u7ecd\u63d2\u4ef6\u7684\u4f7f\u7528\u573a\u666f\uff0c\u7279\u70b9\u7b49\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u5b9e\u73b0\u539f\u7406"),"\uff1a\u4ecb\u7ecd\u63d2\u4ef6\u5b9e\u73b0\u7684\u5e95\u5c42\u539f\u7406\uff0c\u6bd4\u5982",(0,r.kt)("inlineCode",{parentName:"li"},"sqlReader"),"\u901a\u8fc7\u6267\u884cSql\u67e5\u8be2\u6765\u8bfb\u53d6\u6570\u636e\u5e93\u4e2d\u7684\u6570\u636e"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u914d\u7f6e\u8bf4\u660e"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7ed9\u51fa\u5178\u578b\u573a\u666f\u4e0b\u7684\u540c\u6b65\u4efb\u52a1\u7684json\u914d\u7f6e\u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4ecb\u7ecd\u6bcf\u4e2a\u53c2\u6570\u7684\u542b\u4e49\u3001\u662f\u5426\u5fc5\u9009\u3001\u9ed8\u8ba4\u503c\u3001\u53d6\u503c\u8303\u56f4\u548c\u5176\u4ed6\u7ea6\u675f\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u7ea6\u675f\u9650\u5236"),"\uff1a\u662f\u5426\u5b58\u5728\u5176\u4ed6\u7684\u4f7f\u7528\u9650\u5236\u6761\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"FAQ"),"\uff1a\u7528\u6237\u7ecf\u5e38\u4f1a\u9047\u5230\u7684\u95ee\u9898\u3002")))}d.isMDXComponent=!0},95313:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Agent_Flow-797076957b60986733aae8479cff6c69.png"}}]);