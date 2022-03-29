"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[257],{3905:function(t,n,e){e.d(n,{Zo:function(){return u},kt:function(){return k}});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function o(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=a.createContext({}),m=function(t){var n=a.useContext(p),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},u=function(t){var n=m(t.components);return a.createElement(p.Provider,{value:n},t.children)},d={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=m(e),k=r,N=s["".concat(p,".").concat(k)]||s[k]||d[k]||l;return e?a.createElement(N,i(i({ref:n},u),{},{components:e})):a.createElement(N,i({ref:n},u))}));function k(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=e[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}s.displayName="MDXCreateElement"},71351:function(t,n,e){e.r(n),e.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return d}});var a=e(87462),r=e(63366),l=(e(67294),e(3905)),i=["components"],o={title:"Elasticsearch \u793a\u4f8b",sidebar_position:4},p=void 0,m={unversionedId:"modules/sort-standalone/elasticsearch_example",id:"modules/sort-standalone/elasticsearch_example",title:"Elasticsearch \u793a\u4f8b",description:"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/modules/sort-standalone/elasticsearch_example.md",sourceDirName:"modules/sort-standalone",slug:"/modules/sort-standalone/elasticsearch_example",permalink:"/zh-CN/docs/next/modules/sort-standalone/elasticsearch_example",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/modules/sort-standalone/elasticsearch_example.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Elasticsearch \u793a\u4f8b",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Hive \u793a\u4f8b",permalink:"/zh-CN/docs/next/modules/sort-standalone/hive_example"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/next/modules/audit/overview"}},u={},d=[{value:"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6",id:"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6",level:2},{value:"\u51c6\u5907\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",id:"\u51c6\u5907\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",level:2},{value:"conf/common.properties\u914d\u7f6e\u6837\u4f8b",id:"confcommonproperties\u914d\u7f6e\u6837\u4f8b",level:3},{value:"conf/SortClusterConfig.conf\u914d\u7f6e\u6837\u4f8b",id:"confsortclusterconfigconf\u914d\u7f6e\u6837\u4f8b",level:3},{value:"conf/sid_es_v3.conf\u914d\u7f6e\u6837\u4f8b",id:"confsid_es_v3conf\u914d\u7f6e\u6837\u4f8b",level:3},{value:"conf/common.properties\u914d\u7f6e\u53c2\u6570",id:"confcommonproperties\u914d\u7f6e\u53c2\u6570",level:2},{value:"SortClusterConfig.conf\u914d\u7f6e\u53c2\u6570",id:"sortclusterconfigconf\u914d\u7f6e\u53c2\u6570",level:2},{value:"SortTaskConfig\u914d\u7f6e\u53c2\u6570",id:"sorttaskconfig\u914d\u7f6e\u53c2\u6570",level:3},{value:"Sort-Elasticsearch\u4efb\u52a1\u7684idParams\u914d\u7f6e\u53c2\u6570",id:"sort-elasticsearch\u4efb\u52a1\u7684idparams\u914d\u7f6e\u53c2\u6570",level:3},{value:"Sort-Elasticsearch\u4efb\u52a1\u7684sinkParams\u914d\u7f6e\u53c2\u6570",id:"sort-elasticsearch\u4efb\u52a1\u7684sinkparams\u914d\u7f6e\u53c2\u6570",level:3},{value:"Sort-Elasticsearch\u4efb\u52a1\u7684sid_es_v3.conf\u914d\u7f6e\u53c2\u6570",id:"sort-elasticsearch\u4efb\u52a1\u7684sid_es_v3conf\u914d\u7f6e\u53c2\u6570",level:2},{value:"sid_es_v3.conf\u914d\u7f6e\u53c2\u6570",id:"sid_es_v3conf\u914d\u7f6e\u53c2\u6570",level:3},{value:"CacheCluster\u914d\u7f6e\u53c2\u6570",id:"cachecluster\u914d\u7f6e\u53c2\u6570",level:3},{value:"Topic\u914d\u7f6e\u53c2\u6570",id:"topic\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u542f\u52a8inlong-sort-standalone\u5e94\u7528",id:"\u542f\u52a8inlong-sort-standalone\u5e94\u7528",level:2}],s={toc:d};function k(t){var n=t.components,e=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6"},"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6"),(0,l.kt)("p",null,"\u5b89\u88c5\u6587\u4ef6\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"inlong-sort-standalone/sort-standalone-dist/target/"),"\u76ee\u5f55\u4e0b\uff0c\u6587\u4ef6\u540d\u662fapache-inlong-sort-standalone-${project.version}-bin.tar.gz\u3002"),(0,l.kt)("h2",{id:"\u51c6\u5907\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"},"\u51c6\u5907\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("p",null,'\u9996\u5148\uff0c\u89e3\u538b\u538b\u7f29\u5305apache-inlong-sort-standalone-${project.version}-bin.tar.gz\uff0c\u7136\u540e\u4ece\u76ee\u5f55"conf/es/"\u4e0b\u62f7\u8d1d3\u4e2a\u6587\u4ef6\u5230\u76ee\u5f55"conf/"\u3002'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"conf/common.properties\uff0c\u6240\u6709\u7ec4\u4ef6\u7684\u57fa\u672c\u914d\u7f6e\u53c2\u6570"),(0,l.kt)("li",{parentName:"ul"},"conf/SortClusterConfig.conf\uff0c\u6240\u6709Sort\u4efb\u52a1\u7684sink\u914d\u7f6e\u3002, sink configuration of all sort tasks."),(0,l.kt)("li",{parentName:"ul"},"conf/sid_es_v3.conf\uff0c\u4e00\u4e2aSort\u4efb\u52a1\u7684\u6570\u636e\u6e90\u914d\u7f6e\uff0c\u6587\u4ef6\u540d\u548c\u914d\u7f6e\u6587\u4ef6SortClusterConfig.conf\u4e2d\u7684Sort\u4efb\u52a1\u540d\u4e00\u81f4\uff0c\u5982\u679cSortClusterConfig.conf\u4e2d\u914d\u7f6e\u4e86\u591a\u4e2aSort\u4efb\u52a1\uff0c\u90a3\u4e48\u4f1a\u6709\u591a\u4e2aSort\u4efb\u52a1\u7684\u6570\u636e\u6e90\u914d\u7f6e\u3002")),(0,l.kt)("h3",{id:"confcommonproperties\u914d\u7f6e\u6837\u4f8b"},"conf/common.properties\u914d\u7f6e\u6837\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"clusterId=esv3-sz-sz1\nnodeId=nodeId\nmetricDomains=Sort\nmetricDomains.Sort.domainListeners=org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener\nmetricDomains.Sort.snapshotInterval=60000\nsortChannel.type=org.apache.inlong.sort.standalone.channel.BufferQueueChannel\nsortSink.type=org.apache.inlong.sort.standalone.sink.elasticsearch.EsSink\nsortSource.type=org.apache.inlong.sort.standalone.source.sortsdk.SortSdkSource\n\nsortClusterConfig.type=file\nsortClusterConfig.file=SortClusterConfig.conf\nsortSourceConfig.QueryConsumeConfigType=file\n#sortTaskId.conf\n\n#sortClusterConfig.type=manager\n#sortSourceConfig.QueryConsumeConfigType=manager\n#managerUrlLoaderType=org.apache.inlong.sort.standalone.config.loader.CommonPropertiesManagerUrlLoader\n#sortClusterConfig.managerUrl=http://${manager_ip:port}/api/inlong/manager/openapi/sort/getClusterConfig\n#sortSourceConfig.managerUrl=http://${manager_ip:port}/api/inlong/manager/openapi/sort/getSortSource\n")),(0,l.kt)("h3",{id:"confsortclusterconfigconf\u914d\u7f6e\u6837\u4f8b"},"conf/SortClusterConfig.conf\u914d\u7f6e\u6837\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "clusterName": "esv3-gz-gz1",\n    "sortTasks": [{\n        "name": "sid_es_v3",\n        "type": "ES",\n        "idParams": [{\n            "indexNamePattern": "inlong0fc00000046_{yyyyMMdd}",\n            "contentOffset": "0",\n            "inlongGroupId": "atta",\n            "fieldOffset": "2",\n            "fieldNames": "ftime extinfo t1 t2 t3 t4",\n            "inlongStreamId": "0fc00000046",\n            "separator": "|"\n        }],\n        "sinkParams": {\n            "httpHosts": "11.187.135.221:9200",\n            "password": "yingyan@ES",\n            "auditSetName": "es-rmrv7g7a",\n            "bulkSizeMb": "10",\n            "flushInterval": "60",\n            "keywordMaxLength": "32767",\n            "bulkAction": "4000",\n            "concurrentRequests": "5",\n            "maxConnect": "10",\n            "isUseIndexId": "false",\n            "username": "elastic"\n        }\n    }]\n}\n')),(0,l.kt)("h3",{id:"confsid_es_v3conf\u914d\u7f6e\u6837\u4f8b"},"conf/sid_es_v3.conf\u914d\u7f6e\u6837\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "sortClusterName": "esv3-gz-gz1",\n    "sortTaskId": "sid_es_v3",\n    "cacheZones": {\n        "pc_atta6th_sz1": {\n            "zoneName": "pc_atta6th_sz1",\n            "serviceUrl": "http://9.139.53.86:8080",\n            "authentication": "eyJrZXlJZCI6InB1bHNhci04MnhhN24zZWs1ZHciLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwdWxzYXItODJ4YTduM2VrNWR3X2FkbWluIn0.D5H_j8UQk8KYWHw_mzq2HmR393SnbL5Gz7JYCANBPnI",\n            "topics": [{\n                "topic": "pulsar-82xa7n3ek5dw/atta/atta_topic_1",\n                "partitionCnt": 10,\n                "topicProperties": {}\n            }],\n            "cacheZoneProperties": {},\n            "zoneType": "pulsar"\n        }\n    }\n}\n')),(0,l.kt)("h2",{id:"confcommonproperties\u914d\u7f6e\u53c2\u6570"},"conf/common.properties\u914d\u7f6e\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clusterId"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6765\u552f\u4e00\u6807\u8bc6\u4e00\u4e2ainlong-sort-standalone\u96c6\u7fa4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nodeId"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672c\u673aIP"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u8282\u70b9ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metricDomains"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"Sort"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u6807\u6c47\u603b\u57df\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metricDomains.Sort.domainListeners"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u6807\u6c47\u603b\u76d1\u542c\u5668\u7c7b\u540d\u5217\u8868\uff0c\u7a7a\u683c\u5206\u9694")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metricDomains.Sort.snapshotInterval"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"60000"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba2\u9605tube\u7684\u91cd\u8bd5\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3ams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prometheusHttpPort"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"8080"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener\u7684\u53c2\u6570\uff0cPrometheus\u7684HttpServer\u7aef\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sortChannel.type"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.inlong.sort.standalone.channel.BufferQueueChannel"),(0,l.kt)("td",{parentName:"tr",align:null},"Channel\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sortSink.type"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Sink\u7c7b\u540d\uff0c\u4e0d\u540c\u7684\u5206\u53d1\u7c7b\u578b\u4f7f\u7528\u4e0d\u540c\u7684Sink\u7c7b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sortSource.type"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.inlong.sort.standalone.source.sortsdk.SortSdkSource"),(0,l.kt)("td",{parentName:"tr",align:null},"Source\u7c7b\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sortClusterConfig.type"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"manager"),(0,l.kt)("td",{parentName:"tr",align:null},"\u96c6\u7fa4\u914d\u7f6e\u6570\u636e\u7684\u52a0\u8f7d\u6765\u6e90\uff0c\u6709\u4e09\u79cd\u65b9\u5f0f\uff1a","[\u6587\u4ef6\uff0cManager\uff0c\u81ea\u5b9a\u4e49\u7c7b]","\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sortClusterConfig.file"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"SortClusterConfig.conf"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u96c6\u7fa4\u914d\u7f6e\u6570\u636e\u52a0\u8f7d\u6765\u6e90\u662ffile\u65f6\uff0c\u5728\u7c7b\u8def\u5f84\u4e0b\u7684\u914d\u7f6e\u6587\u4ef6\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sortClusterConfig.managerUrl"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"\u96c6\u7fa4\u914d\u7f6e\u6570\u636e\u52a0\u8f7d\u6765\u6e90\u662fmanager\u65f6\uff0c\u8fd9\u91cc\u5b9a\u4e49InlongManager\u7684URL",(0,l.kt)("br",null),"\u6bd4\u5982:http://${manager ip:port}/api/inlong/manager/openapi/sort/standalone/getClusterConfig")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sortSourceConfig.QueryConsumeConfigType"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"manager"),(0,l.kt)("td",{parentName:"tr",align:null},"Sort\u4efb\u52a1\u914d\u7f6e\u6570\u636e\u7684\u52a0\u8f7d\u6765\u6e90\uff0c\u6709\u4e09\u79cd\u65b9\u5f0f\uff1a","[\u6587\u4ef6\uff0cManager\uff0c\u81ea\u5b9a\u4e49\u7c7b]","\u3002 ",(0,l.kt)("br",null),"\u5982\u679c\u52a0\u8f7d\u8def\u5f84\u662ffile\u7684\u8bdd\uff0cSort\u4efb\u52a1\u914d\u7f6e\u6587\u4ef6\u662f\u5728\u7c7b\u8def\u5f84\u91cc\uff0c\u6587\u4ef6\u540d\u7684\u683c\u5f0f\uff1a${sortTaskId}.conf\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sortSourceConfig.managerUrl"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Sort\u4efb\u52a1\u914d\u7f6e\u6570\u636e\u52a0\u8f7d\u6765\u6e90\u662fmanager\u65f6\uff0c\u8fd9\u91cc\u5b9a\u4e49InlongManager\u7684URL",(0,l.kt)("br",null),"\u6bd4\u5982::http://${manager ip:port}/api/inlong/manager/openapi/sort/standalone/getSortSource")))),(0,l.kt)("h2",{id:"sortclusterconfigconf\u914d\u7f6e\u53c2\u6570"},"SortClusterConfig.conf\u914d\u7f6e\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4eceClassPath\u7684SortClusterConfig.conf\u6e90\u6587\u4ef6\u8bfb\u53d6\uff0c\u4f46\u4e0d\u652f\u6301\u5b9e\u65f6\u66f4\u65b0"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4eceInlong Manager\u7684HTTP\u63a5\u53e3\u83b7\u53d6\u914d\u7f6e\uff0c\u652f\u6301\u5b9e\u65f6\u66f4\u65b0")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clusterName"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6765\u552f\u4e00\u6807\u8bc6\u4e00\u4e2ainlong-sort-standalone\u96c6\u7fa4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sortTasks"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"JsonArray","<","SortTaskConfig",">"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Sort\u4efb\u52a1\u5217\u8868")))),(0,l.kt)("h3",{id:"sorttaskconfig\u914d\u7f6e\u53c2\u6570"},"SortTaskConfig\u914d\u7f6e\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Sort\u4efb\u52a1\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},'Sort\u4efb\u52a1\u7c7b\u578b\uff0c\u5982:HIVE("hive"), TUBE("tube"), KAFKA("kafka"), PULSAR("pulsar"), ELASTICSEARCH("elasticsearch"), UNKNOWN("n")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"idParams"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Inlong\u6570\u636e\u6d41\u53c2\u6570\u5217\u8868")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sinkParams"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Sort\u4efb\u52a1\u53c2\u6570")))),(0,l.kt)("h3",{id:"sort-elasticsearch\u4efb\u52a1\u7684idparams\u914d\u7f6e\u53c2\u6570"},"Sort-Elasticsearch\u4efb\u52a1\u7684idParams\u914d\u7f6e\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inlongGroupId"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"inlongGroupId")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inlongStreamId"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"inlongStreamId")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"separator"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u9694\u7b26")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fieldNames"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Elasticsearch\u7684Index\u5b57\u6bb5\u5217\u8868\uff0c\u7528\u7a7a\u683c\u5206\u9694")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"indexNamePattern"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Index\u7684\u540d\u5b57\u6a21\u677f\uff0c\u652f\u6301\u4e09\u79cd\u65e5\u671f\u65f6\u95f4\u683c\u5f0f\u53d8\u91cf\uff1a{yyyyMMdd},{yyyyMMddHH},{yyyyMMddHHmm}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contentOffset"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6e90\u6570\u636e\u7684\u6709\u6548\u5b57\u6bb5\u5f00\u59cb\u504f\u79fb\uff0c\u4ece0\u5f00\u59cb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fieldOffset"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Elasticsearch\u7684Index\u5b57\u6bb5\u5217\u8868\u7684\u5f00\u59cb\u504f\u79fb")))),(0,l.kt)("h3",{id:"sort-elasticsearch\u4efb\u52a1\u7684sinkparams\u914d\u7f6e\u53c2\u6570"},"Sort-Elasticsearch\u4efb\u52a1\u7684sinkParams\u914d\u7f6e\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"httpHosts"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Elasticsearch\u7684Host\u7684IP\u7aef\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Elasticsearch\u7528\u6237\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Elasticsearch\u5bc6\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isUseIndexId"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u521b\u5efaIndexId\uff0c\u5f71\u54cdIndex\u5206\u7247\u5206\u5e03")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bulkSizeMb"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5355Bulk\u7684\u6700\u5927\u5927\u5c0f\uff0c\u5355\u4f4dMB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flushInterval"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5237\u76d8\u95f4\u9694\uff0c\u5355\u4f4d\u662f\u79d2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keywordMaxLength"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"32767"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5355\u4e2akeyword\u6700\u5927\u957f\u5ea6\uff0c\u5355\u4f4d\u662f\u5b57\u8282")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bulkAction"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"4000"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5355\u4e2aBulk\u7684\u6700\u5927IndexRequest\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxConnect"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u5927HTTP\u8fde\u63a5\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"concurrentRequests"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5355\u4e2aHTTP\u8fde\u63a5\u7684\u6700\u5927\u7b49\u5f85\u8bf7\u6c42\u6570")))),(0,l.kt)("h2",{id:"sort-elasticsearch\u4efb\u52a1\u7684sid_es_v3conf\u914d\u7f6e\u53c2\u6570"},"Sort-Elasticsearch\u4efb\u52a1\u7684sid_es_v3.conf\u914d\u7f6e\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'\u6587\u4ef6\u540d\u683c\u5f0f\uff1aSort\u4efb\u52a1\u540d+".conf"\u3002'),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4eceClassPath\u7684SortClusterConfig.conf\u6e90\u6587\u4ef6\u8bfb\u53d6\uff0c\u4f46\u4e0d\u652f\u6301\u5b9e\u65f6\u66f4\u65b0\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4eceInlong Manager\u7684HTTP\u63a5\u53e3\u83b7\u53d6\u914d\u7f6e\uff0c\u652f\u6301\u5b9e\u65f6\u66f4\u65b0\u3002")),(0,l.kt)("h3",{id:"sid_es_v3conf\u914d\u7f6e\u53c2\u6570"},"sid_es_v3.conf\u914d\u7f6e\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sortClusterName"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6765\u552f\u4e00\u6807\u8bc6\u4e00\u4e2ainlong-sort-standalone\u96c6\u7fa4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sortTaskId"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Sort\u4efb\u52a1\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheZones"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"JsonObject","<","String, JsonObject",">"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u5c42\u96c6\u7fa4\u5217\u8868\uff0c\u683c\u5f0f\uff1aMap","<","cacheClusterName, CacheCluster",">")))),(0,l.kt)("h3",{id:"cachecluster\u914d\u7f6e\u53c2\u6570"},"CacheCluster\u914d\u7f6e\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zoneName"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u5c42\u96c6\u7fa4\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zoneType"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u7c7b\u578b\uff1a","[pulsar,tube,kafka]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"serviceUrl"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Pulsar\u7684serviceUrl\u53c2\u6570\uff0c\u6216\u8005Kafka\u7684Broker\u5217\u8868")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"authentication"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Pulsar\u9274\u6743")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheZoneProperties"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"Map","<","String,String",">"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u5c42Consumer\u53c2\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topics"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"List","<","Topic",">"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u5c42\u6d88\u8d39\u7684Topic\u5217\u8868")))),(0,l.kt)("h3",{id:"topic\u914d\u7f6e\u53c2\u6570"},"Topic\u914d\u7f6e\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topic"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Topic\u5b8c\u6574\u540d\uff0cPulsar\uff1atenant/namespace/topic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partitionCnt"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Topic\u5206\u533a\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topicProperties"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"Map","<","String,String",">"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u5c42Topic\u7684Consumer\u53c2\u6570")))),(0,l.kt)("h2",{id:"\u542f\u52a8inlong-sort-standalone\u5e94\u7528"},"\u542f\u52a8inlong-sort-standalone\u5e94\u7528"),(0,l.kt)("p",null,'\u6700\u540e\uff0c\u6267\u884c\u811a\u672c"./bin/sort-start.sh"\uff0c\u542f\u52a8sort-standalone\u5e94\u7528\uff0c\u4e4b\u540e\u53ef\u4ee5\u68c0\u67e5\u65e5\u5fd7\u6587\u4ef6sort.log\uff0c\u786e\u8ba4\u542f\u52a8\u60c5\u51b5\u3002'))}k.isMDXComponent=!0}}]);