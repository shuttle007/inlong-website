"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3032],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(t),m=a,d=g["".concat(p,".").concat(m)]||g[m]||c[m]||i;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},56094:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={title:"Manager \u63d2\u4ef6",sidebar_position:4},p="\u603b\u89c8",s={unversionedId:"design_and_concept/how_to_write_plugin_manager",id:"version-1.1.0/design_and_concept/how_to_write_plugin_manager",title:"Manager \u63d2\u4ef6",description:"\u672c\u6587\u9762\u5411 InLong-Manager \u63d2\u4ef6\u5f00\u53d1\u4eba\u5458, \u5c1d\u8bd5\u5c3d\u53ef\u80fd\u5168\u9762\u5730\u9610\u8ff0\u5f00\u53d1\u4e00\u4e2a Manager \u63d2\u4ef6\u6240\u7ecf\u8fc7\u7684\u5386\u7a0b\uff0c\u529b\u6c42\u6d88\u9664\u5f00\u53d1\u8005\u7684\u56f0\u60d1\uff0c\u8ba9\u63d2\u4ef6\u5f00\u53d1\u53d8\u5f97\u7b80\u5355\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.0/design_and_concept/how_to_write_plugin_manager.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/how_to_write_plugin_manager",permalink:"/zh-CN/docs/design_and_concept/how_to_write_plugin_manager",draft:!1,editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-1.1.0/design_and_concept/how_to_write_plugin_manager.md",tags:[],version:"1.1.0",sidebarPosition:4,frontMatter:{title:"Manager \u63d2\u4ef6",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Sort \u63d2\u4ef6",permalink:"/zh-CN/docs/design_and_concept/how_to_write_plugin_sort"},next:{title:"Dashboard \u63d2\u4ef6",permalink:"/zh-CN/docs/design_and_concept/how_to_write_plugin_dashboard"}},u={},c=[{value:"\u5f00\u53d1\u4e4b\u524d",id:"\u5f00\u53d1\u4e4b\u524d",level:2},{value:"\u6d41\u7a0b\u56fe\u793a",id:"\u6d41\u7a0b\u56fe\u793a",level:2},{value:"\u53c2\u8003 Demo",id:"\u53c2\u8003-demo",level:2},{value:"\u5199\u5728\u6700\u540e",id:"\u5199\u5728\u6700\u540e",level:2}],g={toc:c};function m(e){var n=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},g,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,i.kt)("p",null,"\u672c\u6587\u9762\u5411 InLong-Manager \u63d2\u4ef6\u5f00\u53d1\u4eba\u5458, \u5c1d\u8bd5\u5c3d\u53ef\u80fd\u5168\u9762\u5730\u9610\u8ff0\u5f00\u53d1\u4e00\u4e2a Manager \u63d2\u4ef6\u6240\u7ecf\u8fc7\u7684\u5386\u7a0b\uff0c\u529b\u6c42\u6d88\u9664\u5f00\u53d1\u8005\u7684\u56f0\u60d1\uff0c\u8ba9\u63d2\u4ef6\u5f00\u53d1\u53d8\u5f97\u7b80\u5355\u3002"),(0,i.kt)("h2",{id:"\u5f00\u53d1\u4e4b\u524d"},"\u5f00\u53d1\u4e4b\u524d"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Inlong \u4f5c\u4e3a\u4e00\u4e2a\u6d41\u5f0f\u6570\u636e\u540c\u6b65\u6846\u67b6\uff0c\u91c7\u7528 Group + Stream \u7684\u6784\u5efa\u65b9\u5f0f\u3002"),(0,i.kt)("li",{parentName:"ul"},"Inlong Group \u53ef\u5305\u542b\u591a\u4e2a Inlong Stream, \u6bcf\u4e2a Inlong Stream \u8d1f\u8d23\u4e00\u6761\u72ec\u7acb\u7684\u6570\u636e\u540c\u6b65\u94fe\u8def\u3002"),(0,i.kt)("li",{parentName:"ul"},"Inlong Group \u8d1f\u8d23\u4efb\u52a1\u6240\u9700\u7684\u7269\u7406\u8d44\u6e90\u7684\u5b9a\u4e49\u53ca\u521d\u59cb\u5316\uff0c\u8fd9\u4e9b\u7269\u7406\u8d44\u6e90\u4e3b\u8981\u5305\u62ec\u6570\u636e\u540c\u6b65\u6240\u9700\u7684\u4e2d\u95f4\u4ef6\u96c6\u7fa4\u53ca Sort \u51fd\u6570\uff1b\u8be5 Group \u4e0b\u6240\u6709\u7684 Stream \u5171\u4eab\u8fd9\u4e9b\u8d44\u6e90\u3002"),(0,i.kt)("li",{parentName:"ul"},"Inlong Manager \u901a\u8fc7 ",(0,i.kt)("strong",{parentName:"li"},"CreateGroupWorkflowDefinition")," \u8fd9\u4e2a\u5de5\u4f5c\u6d41\u521b\u5efa\u5bf9\u5e94\u7684 Inlong Group \u5e76\u521d\u59cb\u5316\u6240\u6709\u7684\u7269\u7406\u8d44\u6e90, \u6bcf\u4e2a\u5de5\u4f5c\u6d41\u5305\u62ec\u6570\u4e2a\u76f8\u4e92\u72ec\u7acb\u7684 Service Task\u3002\u5f53\u8fd9\u4e2a\u5de5\u4f5c\u6d41\u88ab\u521b\u5efa\u5e76\u6267\u884c\u65f6, \u9ebe\u4e0b\u7684 Service Task \u6309\u7167\u9884\u5148\u5b9a\u4e49\u7684\u987a\u5e8f\u4f9d\u6b21\u6267\u884c\u3002"),(0,i.kt)("li",{parentName:"ul"},"Service Task \u91c7\u7528",(0,i.kt)("strong",{parentName:"li"},"\u76d1\u542c\u8005\u6a21\u5f0f"),"\u2014\u2014\u4e5f\u88ab\u79f0\u4f5c",(0,i.kt)("strong",{parentName:"li"},"\u53d1\u5e03-\u8ba2\u9605\u6a21\u5f0f"),"\u6784\u5efa, \u6bcf\u4e00\u4e2a\u72ec\u7acb\u7684 task \u4f1a\u6ce8\u518c\u4e00\u4e2a\u6216\u591a\u4e2a Listener (\u76d1\u542c\u5668). Listener \u63a5\u53d7\u5de5\u4f5c\u6d41\u4e0a\u4e0b\u6587\u4fe1\u606f\u5e76\u6267\u884c\u76f8\u5173\u7684\u903b\u8f91\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u5f00\u53d1\u4eba\u5458, \u4f60\u9700\u8981\u5f00\u53d1\u539f\u751f Listener \u4ee5\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u64cd\u4f5c\u903b\u8f91\u3002")),(0,i.kt)("h2",{id:"\u6d41\u7a0b\u56fe\u793a"},"\u6d41\u7a0b\u56fe\u793a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Inlong Manager \u63d2\u4ef6\u673a\u5236\u5982\u4e0b\u56fe\u6240\u793a:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:t(90170).Z,width:"1471",height:"696"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u56fe\u6240\u793a\uff0c\u63d2\u4ef6\u9700\u8981\u88ab\u653e\u7f6e\u5728\u5b89\u88c5\u8def\u5f84\u4e4b\u4e0b, \u5f53 Inlong Manager \u8fdb\u7a0b\u542f\u52a8\u65f6\uff0c\u4f1a\u81ea\u52a8\u5bfb\u627e\u63d2\u4ef6\u7f16\u8bd1\u7684 jar \u5305\u5e76\u52a0\u8f7d\u5176\u4e2d\u7684\u4ee3\u7801\u3002"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(44232).Z,width:"2042",height:"210"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u5f00\u53d1\u4eba\u5458\uff0c\u5f53\u4f60\u770b\u5230\u4e0b\u56fe\u6240\u793a\u7684\u65e5\u5fd7\u65f6\uff0c\u53ef\u4ee5\u786e\u8ba4\u63d2\u4ef6\u5df2\u7ecf\u52a0\u8f7d\u6210\u529f\u4e86:")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(8475).Z,width:"3012",height:"850"})),(0,i.kt)("h2",{id:"\u53c2\u8003-demo"},"\u53c2\u8003 Demo"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e3a\u65b9\u4fbf\u5f00\u53d1\u4eba\u5458\u7406\u89e3. \u6211\u4eec\u5728 Inlong Manager \u76ee\u5f55\u4e0b\u589e\u52a0\u4e86 ",(0,i.kt)("strong",{parentName:"li"},"manager-pluin-example")," , \u5f00\u53d1\u4eba\u5458\u53ef\u53c2\u8003 ",(0,i.kt)("strong",{parentName:"li"},"EmptyProcessPlugin")," \u8fdb\u884c\u81ea\u5df1\u7684\u63d2\u4ef6\u5f00\u53d1;")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class EmptyProcessPlugin implements ProcessPlugin {\n\n    @Override\n    public Map<DataSourceOperateListener, EventSelector> createSourceOperateListeners() {\n        return new LinkedHashMap<>();\n    }\n\n    @Override\n    public Map<QueueOperateListener, EventSelector> createQueueOperateListeners() {\n        return new LinkedHashMap<>();\n    }\n\n    @Override\n    public Map<SortOperateListener, EventSelector> createSortOperateListeners() {\n        return ProcessPlugin.super.createSortOperateListeners();\n    }\n\n    @Override\n    public Map<SinkOperateListener, EventSelector> createSinkOperateListeners() {\n        return ProcessPlugin.super.createSinkOperateListeners();\n    }\n\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DataSourceOperateListener"),",",(0,i.kt)("strong",{parentName:"li"},"QueueOperateListener"),",",(0,i.kt)("strong",{parentName:"li"},"SortOperateListener"),",",(0,i.kt)("strong",{parentName:"li"},"SinkOperateListener")," \u662f ",(0,i.kt)("strong",{parentName:"li"},"TaskEventListener")," \u7684\u5b50\u7c7b, \u5206\u522b\u8d1f\u8d23\u6e90\u6570\u636e\u7aef\uff0c\u6d88\u606f\u961f\u5217\uff0csort \u51fd\u6570\uff0c\u76ee\u6807\u6570\u636e\u7aef\u7684\u521d\u59cb\u5316\u5de5\u4f5c\u3002 \u4e0e Listener \u7ed1\u5b9a\u7684",(0,i.kt)("strong",{parentName:"li"},"EventSelector"),"\u51b3\u5b9a\u8be5 Listener \u662f\u5426\u5728\u8fd0\u884c\u65f6\u88ab\u6fc0\u6d3b\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface EventSelector {\n\n    boolean accept(WorkflowContext context);\n\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5b8c\u6210\u63d2\u4ef6\u7684\u5f00\u53d1\u5de5\u4f5c\u540e, \u4f60\u9700\u8981\u7f16\u5199\u5bf9\u5e94\u7684",(0,i.kt)("strong",{parentName:"li"},"Yaml"),"\u683c\u5f0f\u7684\u63d2\u4ef6\u5b9a\u4e49\u6587\u4ef6, \u5c06\u5176\u653e\u7f6e\u5728\u5de5\u7a0b\u76ee\u5f55 resources/META-INF \u4e0b\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: example\ndescription: example for manager plugin\njavaVersion: 1.8\npluginClass: org.apache.inlong.manager.plugin.EmptyProcessPlugin\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u4e0d\u786e\u5b9a\u600e\u6837\u5f00\u53d1\u4e00\u4e2a\u53ef\u7528\u7684 Listener ,\u8bf7\u53c2\u8003",(0,i.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.service.workflow.ServiceTaskListenerFactory"),"\u4e2d\u539f\u751f Listener \u7684\u903b\u8f91\u3002")),(0,i.kt)("h2",{id:"\u5199\u5728\u6700\u540e"},"\u5199\u5728\u6700\u540e"),(0,i.kt)("p",null,"\u6211\u4eec\u5728 Inlong Manager \u4e2d\u63d0\u4f9b\u63d2\u4ef6\u5316\u673a\u5236\uff0c\u5e0c\u671b\u53ef\u4ee5\u65b9\u4fbf\u5f00\u53d1\u4eba\u5458\u5728 Inlong \u73b0\u6709\u7684\u6846\u67b6\u4e0b\u5b9a\u5236\u5316\u5f00\u53d1\u81ea\u5df1\u7684\u529f\u80fd\u3002\n\u8bda\u7136\uff0c\u5f53\u524d\u7684\u63d2\u4ef6\u673a\u5236\u8fd8\u5f88\u4e0d\u5b8c\u5584\uff0c\u6211\u4eec\u4f1a\u6301\u7eed\u81f4\u529b\u4e8e\u529f\u80fd\u7684\u6539\u8fdb\uff0c\u4e5f\u6b22\u8fce\u60a8\u7684\u52a0\u5165\u3002"))}m.isMDXComponent=!0},90170:function(e,n,t){n.Z=t.p+"assets/images/Inlong_Plugin-189f358c3cf91a3814a31d3f43d8692b.png"},44232:function(e,n,t){n.Z=t.p+"assets/images/Plugin_Location-c07bc755eb46f282a2e4dea5747a39d0.png"},8475:function(e,n,t){n.Z=t.p+"assets/images/Plugin_Log-e98df1d61e487d1b747315d1297314a3.png"}}]);