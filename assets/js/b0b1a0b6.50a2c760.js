"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[28342],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=s(n),c=r,g=u["".concat(p,".").concat(c)]||u[c]||d[c]||l;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33409:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"Elasticsearch Example",sidebar_position:4},i=void 0,o={unversionedId:"modules/sort-standalone/elasticsearch_example",id:"version-1.4.0/modules/sort-standalone/elasticsearch_example",title:"Elasticsearch Example",description:"Prepare to get module archive",source:"@site/versioned_docs/version-1.4.0/modules/sort-standalone/elasticsearch_example.md",sourceDirName:"modules/sort-standalone",slug:"/modules/sort-standalone/elasticsearch_example",permalink:"/docs/modules/sort-standalone/elasticsearch_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.4.0/modules/sort-standalone/elasticsearch_example.md",tags:[],version:"1.4.0",sidebarPosition:4,frontMatter:{title:"Elasticsearch Example",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Hive Example",permalink:"/docs/modules/sort-standalone/hive_example"},next:{title:"Overview",permalink:"/docs/modules/audit/overview"}},p={},s=[{value:"Prepare to get module archive",id:"prepare-to-get-module-archive",level:2},{value:"Prepare to modify configuration file",id:"prepare-to-modify-configuration-file",level:2},{value:"Example: conf/common.properties",id:"example-confcommonproperties",level:3},{value:"Example: conf/SortClusterConfig.conf",id:"example-confsortclusterconfigconf",level:3},{value:"Example: conf/sid_es_v3.conf",id:"example-confsid_es_v3conf",level:3},{value:"Modify configuration: idParams of Elasticsearch sort task",id:"modify-configuration-idparams-of-elasticsearch-sort-task",level:3},{value:"Modify configuration: sinkParams of Elasticsearch sort task",id:"modify-configuration-sinkparams-of-elasticsearch-sort-task",level:3},{value:"Modify configuration: sid_es_v3.conf",id:"modify-configuration-sid_es_v3conf",level:3},{value:"Modify configuration: CacheCluster",id:"modify-configuration-cachecluster",level:3},{value:"Modify configuration: Topic",id:"modify-configuration-topic",level:3}],m={toc:s};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prepare-to-get-module-archive"},"Prepare to get module archive"),(0,r.kt)("p",null,"Module archive is in the directory:inlong-sort-standalone/sort-standalone-dist/target/, the archive file is apache-inlong-sort-standalone-${project.version}-bin.tar.gz."),(0,r.kt)("h2",{id:"prepare-to-modify-configuration-file"},"Prepare to modify configuration file"),(0,r.kt)("p",null,'At first, decompress the archive file, copy three files in the directory "conf/es/" to the directory "conf/".'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"conf/common.properties, common configuration of all components."),(0,r.kt)("li",{parentName:"ul"},"conf/SortClusterConfig.conf, sink configuration of all sort tasks."),(0,r.kt)("li",{parentName:"ul"},"conf/sid_es_v3.conf, data source configuration example of a sort task, the file name is same with sort task name in SortClusterConfig.conf.")),(0,r.kt)("h3",{id:"example-confcommonproperties"},"Example: conf/common.properties"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"clusterId=esv3-sz-sz1\nnodeId=nodeId\nmetricDomains=Sort\nmetricDomains.Sort.domainListeners=org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener\nmetricDomains.Sort.snapshotInterval=60000\nsortChannel.type=org.apache.inlong.sort.standalone.channel.BufferQueueChannel\nsortSink.type=org.apache.inlong.sort.standalone.sink.elasticsearch.EsSink\nsortSource.type=org.apache.inlong.sort.standalone.source.sortsdk.SortSdkSource\n\nsortClusterConfig.type=file\nsortClusterConfig.file=SortClusterConfig.conf\nsortSourceConfig.QueryConsumeConfigType=file\n\n# manager config example\n#sortClusterConfig.type=manager\n#sortSourceConfig.QueryConsumeConfigType=manager\n#managerUrlLoaderType=org.apache.inlong.sort.standalone.config.loader.CommonPropertiesManagerUrlLoader\n#sortClusterConfig.managerUrl=http://${manager_ip:port}/api/inlong/manager/openapi/sort/getClusterConfig\n#sortSourceConfig.managerUrl=http://${manager_ip:port}/api/inlong/manager/openapi/sort/getSortSource\n")),(0,r.kt)("h3",{id:"example-confsortclusterconfigconf"},"Example: conf/SortClusterConfig.conf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "clusterName": "esv3-gz-gz1",\n    "sortTasks": [{\n        "name": "sid_es_v3",\n        "type": "ES",\n        "idParams": [{\n            "indexNamePattern": "inlong0fc00000046_{yyyyMMdd}",\n            "contentOffset": "0",\n            "inlongGroupId": "testgroup",\n            "fieldOffset": "0",\n            "fieldNames": "ftime extinfo t1 t2 t3 t4",\n            "inlongStreamId": "0fc00000046",\n            "separator": "|"\n        }],\n        "sinkParams": {\n            "httpHosts": "ip:port",\n            "password": "password",\n            "bulkSizeMb": "10",\n            "flushInterval": "60",\n            "keywordMaxLength": "32767",\n            "bulkAction": "4000",\n            "concurrentRequests": "5",\n            "maxConnect": "10",\n            "isUseIndexId": "false",\n            "username": "elastic"\n        }\n    }]\n}\n')),(0,r.kt)("h3",{id:"example-confsid_es_v3conf"},"Example: conf/sid_es_v3.conf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "sortClusterName": "esv3-gz-gz1",\n    "sortTaskId": "sid_es_v3",\n    "cacheZones": {\n        "pc_atta6th_sz1": {\n            "zoneName": "${PULSAR_CLUSTER_NAME}",\n            "serviceUrl": "http://${PULSAR_IP}:${PULSAR_PORT}",\n            "authentication": "${PULSAR_AUTH}",\n            "topics": [{\n                "topic": "${TENANT/NAMESPACE/TOPIC}",\n                "partitionCnt": 10,\n                "topicProperties": {}\n            }],\n            "cacheZoneProperties": {},\n            "zoneType": "pulsar"\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"modify-configuration-idparams-of-elasticsearch-sort-task"},"Modify configuration: idParams of Elasticsearch sort task"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlongGroupId"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"inlongGroupId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlongStreamId"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"inlongStreamId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"separator"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"separator of Inlong datastream in data source")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fieldNames"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"field name list of Elasticsearch index, separated by space.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"indexNamePattern"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"index name pattern of Elasticsearch,date time variable include {yyyyMMdd},{yyyyMMddHH},{yyyyMMddHHmm}.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contentOffset"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"field index offset of source content")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fieldOffset"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"offset of Elasticsearch index field name list")))),(0,r.kt)("h3",{id:"modify-configuration-sinkparams-of-elasticsearch-sort-task"},"Modify configuration: sinkParams of Elasticsearch sort task"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"httpHosts"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Hosts of Elasticsearch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Username of Elasticsearch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Password of Elasticsearch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isUseIndexId"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Create index id or not")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bulkSizeMb"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"Max content size per bulk(MB)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"flushInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"60"),(0,r.kt)("td",{parentName:"tr",align:null},"Max interval between flushing operation(Second)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keywordMaxLength"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"32767"),(0,r.kt)("td",{parentName:"tr",align:null},"Max keyword length(Byte)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bulkAction"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"4000"),(0,r.kt)("td",{parentName:"tr",align:null},"Max index request per bulk")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxConnect"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"Max opening HTTP connect")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"concurrentRequests"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Max concurrent requests per HTTP connect")))),(0,r.kt)("h3",{id:"modify-configuration-sid_es_v3conf"},"Modify configuration: sid_es_v3.conf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The file name include sort task name plus the postfix ".conf".')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortClusterName"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong-sort-standalone cluster id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortTaskId"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Sort task name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheZones"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"JsonObject","<","String, JsonObject",">"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Cache cluster list, Map","<","cacheClusterName, CacheCluster",">")))),(0,r.kt)("h3",{id:"modify-configuration-cachecluster"},"Modify configuration: CacheCluster"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zoneName"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"cache cluster name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zoneType"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"[pulsar,tube,kafka]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"serviceUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar serviceUrl or Kafka broker list")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authentication"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar authentication")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheZoneProperties"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Map","<","String,String",">"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Cache consumer configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topics"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"List","<","Topic",">"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Topic list of Cache consumer")))),(0,r.kt)("h3",{id:"modify-configuration-topic"},"Modify configuration: Topic"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topic"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"cache topic name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"partitionCnt"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"cache topic partition count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topicProperties"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Map","<","String,String",">"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Cache topic configuration")))))}d.isMDXComponent=!0}}]);