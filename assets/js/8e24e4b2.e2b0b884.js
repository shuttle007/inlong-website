"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"Golang SDK",sidebar_position:3},i=void 0,s={unversionedId:"sdk/tubemq-sdk/go",id:"version-1.10.0/sdk/tubemq-sdk/go",title:"Golang SDK",description:"Similar to the C++/Python SDK, the Golang SDK is also divided into two parts: Producer and Consumer. Here is an introduction to both.",source:"@site/versioned_docs/version-1.10.0/sdk/tubemq-sdk/go.md",sourceDirName:"sdk/tubemq-sdk",slug:"/sdk/tubemq-sdk/go",permalink:"/docs/sdk/tubemq-sdk/go",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.10.0/sdk/tubemq-sdk/go.md",tags:[],version:"1.10.0",sidebarPosition:3,frontMatter:{title:"Golang SDK",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Python SDK",permalink:"/docs/sdk/tubemq-sdk/python"},next:{title:"Dashboard Guide",permalink:"/docs/user_guide/dashboard_usage"}},l={},c=[{value:"Producer",id:"producer",level:3},{value:"Consumer",id:"consumer",level:3},{value:"Example",id:"example",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Similar to the C++/Python SDK, the Golang SDK is also divided into two parts: ",(0,o.kt)("inlineCode",{parentName:"p"},"Producer")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Consumer"),". Here is an introduction to both."),(0,o.kt)("h3",{id:"producer"},"Producer"),(0,o.kt)("p",null,"First, import necessary packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/apache/inlong/inlong-tubemq/tubemq-client-twins/tubemq-client-go/client"\n    "github.com/apache/inlong/inlong-tubemq/tubemq-client-twins/tubemq-client-go/config"\n    "github.com/apache/inlong/inlong-tubemq/tubemq-client-twins/tubemq-client-go/log"\n    "github.com/apache/inlong/inlong-tubemq/tubemq-client-twins/tubemq-client-go/util"\n)\n')),(0,o.kt)("p",null,"Then, set the producer's configuration. In the following example, we access the local ",(0,o.kt)("inlineCode",{parentName:"p"},"Master")," and subscribe to the topic ",(0,o.kt)("inlineCode",{parentName:"p"},"demo_0"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'cfg, err := config.ParseAddress("127.0.0.1:8715?topic=demo_0")\n')),(0,o.kt)("p",null,"If there are multiple topics, you can directly modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"Topics")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'cfg.Producer.Topics = []string{"demo", "demo_0", "demo_1"}\n')),(0,o.kt)("p",null,"After the configuration is completed, create a new instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"Producer"),". During this process, the ",(0,o.kt)("inlineCode",{parentName:"p"},"SDK")," will register to the ",(0,o.kt)("inlineCode",{parentName:"p"},"TubeMQ Master")," and send a heartbeat to get the metadata of the topic:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"p, err := client.NewProducer(cfg)\n")),(0,o.kt)("p",null,"Then, construct and send the message:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'demoData := "hello_tubemq"\nmsg := client.Message{\n    Topic:   cfg.Producer.Topics[topicIndex], // You can choose from the subscribed topic list\n    Data:    []byte(demoData), \n    DataLen: int32(len(demoData)),\n}\n\nsuccess, errCode, errMsg := p.SendMessage(&msg) // Send a message to TubeMQ, return whether it is successful, the error code, and the error message\n')),(0,o.kt)("h3",{id:"consumer"},"Consumer"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Consumer")," is roughly the same as the ",(0,o.kt)("inlineCode",{parentName:"p"},"Producer"),", except that there is the concept of a consumer group when setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"config"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'cfg, err := config.ParseAddress("127.0.0.1:8715?topic=demo_0&group=test_group")\n')),(0,o.kt)("p",null,"Then, refer to the usage of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Producer")," to consume:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"c, err := client.NewConsumer(cfg) // Create a new Consumer instance\ncr, err := c.GetMessage() // Get message\n_, err = c.Confirm(cr.ConfirmContext, true) // Confirm to TubeMQ after getting the data\n")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"The above content is a demo and ignores some details. For a complete and runnable example, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-tubemq/tubemq-client-twins/tubemq-client-go/example"},"Golang SDK Example"),"."))}d.isMDXComponent=!0}}]);