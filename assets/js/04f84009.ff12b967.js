"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3172],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51891:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],u={title:"Overview"},s=void 0,l={unversionedId:"modules/tubemq/tubemq-manager/overview",id:"version-1.0.0/modules/tubemq/tubemq-manager/overview",title:"Overview",description:"Operation interface",source:"@site/versioned_docs/version-1.0.0/modules/tubemq/tubemq-manager/overview.md",sourceDirName:"modules/tubemq/tubemq-manager",slug:"/modules/tubemq/tubemq-manager/overview",permalink:"/docs/1.0.0/modules/tubemq/tubemq-manager/overview",draft:!1,editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-1.0.0/modules/tubemq/tubemq-manager/overview.md",tags:[],version:"1.0.0",frontMatter:{title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Consumer Example",permalink:"/docs/1.0.0/modules/tubemq/consumer_example"},next:{title:"Deployment",permalink:"/docs/1.0.0/modules/tubemq/tubemq-manager/quick_start"}},c={},p=[{value:"cluster",id:"cluster",level:4},{value:"topic",id:"topic",level:4},{value:"add topicTask",id:"add-topictask",level:5},{value:"Query whether a topic is successfully created (business can be written)",id:"query-whether-a-topic-is-successfully-created-business-can-be-written",level:5}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Operation interface"),(0,i.kt)("h4",{id:"cluster"},"cluster"),(0,i.kt)("p",null,"Query full data of clusterId and clusterName (get)"),(0,i.kt)("p",null,"Example"),(0,i.kt)("p",null,"\u3010GET\u3011 /v1/cluster"),(0,i.kt)("p",null,"return value"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n"errMsg": "",\n"errCode": 0,\n"result": true,\n"data": "[{\\"clusterId\\":1,\\"clusterName\\":\\"1124\\", \\"masterIp\\":\\"127.0.0.1\\"}]"\n}\n')),(0,i.kt)("h4",{id:"topic"},"topic"),(0,i.kt)("h5",{id:"add-topictask"},"add topicTask"),(0,i.kt)("p",null,"parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"type     (required) request type, fill in the field: op_query\nclusterId   (required) Request cluster id\naddTopicTasks (required) topicTasks, create task task json\nuser    (required) After the access authorization verification needs to verify the user, it is reserved here\n")),(0,i.kt)("p",null,"addTopicTasks currently only includes one field as topicName\nAfter accessing the region design, a new region field will be added to represent brokers in different regions\nCurrently an addTopicTask will create topics in all brokers in the cluster"),(0,i.kt)("p",null,"AddTopicTasks is a list of the following objects, which can carry multiple create topic requests"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"topicName (required) topic name\n")),(0,i.kt)("p",null,"Example"),(0,i.kt)("p",null,"\u3010POST\u3011 /v1/task?method=addTopicTask"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n"clusterId": "1",\n"addTopicTasks": [{"topicName": "1"}],\n"user": "test"\n}\n')),(0,i.kt)("p",null,"return json"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n"errMsg": "There are topic tasks [a12322] already in adding status",\n"errCode": 200,\n"result": false,\n"data": ""\n}\n')),(0,i.kt)("p",null,"If result is false, the writing task failed"),(0,i.kt)("h5",{id:"query-whether-a-topic-is-successfully-created-business-can-be-written"},"Query whether a topic is successfully created (business can be written)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"clusterId   (Required) Request cluster id\ntopicName   (Required) Query topic name\nuser    (Required) After the access authorization verification needs to verify the user, it is reserved here\n")),(0,i.kt)("p",null,"example"),(0,i.kt)("p",null,"\u3010POST\u3011 /v1/topic?method=queryCanWrite"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n"clusterId": "1",\n"topicName": "1",\n"user": "test"\n}\n')),(0,i.kt)("p",null,"return json"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{ "result":true, "errCode":0, "errMsg":"OK", }\n{ "result":false, "errCode": 100, "errMsg":"topic test is not writable"}\n{ "result":false, "errCode": 101, "errMsg":"no such topic in master"}\n')),(0,i.kt)("p",null,"result is false as not writable"))}m.isMDXComponent=!0}}]);