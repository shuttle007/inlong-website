"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[31073],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),k=n,m=u["".concat(o,".").concat(k)]||u[k]||p[k]||i;return a?r.createElement(m,l(l({ref:t},d),{},{components:a})):r.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},25763:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={title:"Pulsar Example",sidebar_position:2},l=void 0,s={unversionedId:"quick_start/data_ingestion/file_pulsar_clickhouse_example",id:"version-1.10.0/quick_start/data_ingestion/file_pulsar_clickhouse_example",title:"Pulsar Example",description:"Here we use an example to introduce how to create File -> Pulsar -> ClickHouse data ingestion.",source:"@site/versioned_docs/version-1.10.0/quick_start/data_ingestion/file_pulsar_clickhouse_example.md",sourceDirName:"quick_start/data_ingestion",slug:"/quick_start/data_ingestion/file_pulsar_clickhouse_example",permalink:"/docs/quick_start/data_ingestion/file_pulsar_clickhouse_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.10.0/quick_start/data_ingestion/file_pulsar_clickhouse_example.md",tags:[],version:"1.10.0",sidebarPosition:2,frontMatter:{title:"Pulsar Example",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to Build",permalink:"/docs/quick_start/how_to_build"},next:{title:"Kafka Example",permalink:"/docs/quick_start/data_ingestion/mysql_kafka_clickhouse_example"}},o={},c=[{value:"Deployment",id:"deployment",level:2},{value:"Install InLong",id:"install-inlong",level:3},{value:"Install ClickHouse",id:"install-clickhouse",level:3},{value:"Cluster Initialize",id:"cluster-initialize",level:2},{value:"Create Cluster Tag",id:"create-cluster-tag",level:3},{value:"Register Pulsar Cluster",id:"register-pulsar-cluster",level:3},{value:"Register Clickhouse DataNodes",id:"register-clickhouse-datanodes",level:3},{value:"Create Task",id:"create-task",level:2},{value:"Create Data Streams Group",id:"create-data-streams-group",level:3},{value:"Create Data Stream",id:"create-data-stream",level:3},{value:"Create Data Source",id:"create-data-source",level:3},{value:"Create Data Sink",id:"create-data-sink",level:3},{value:"Approve Data Stream",id:"approve-data-stream",level:3},{value:"Test Data",id:"test-data",level:2},{value:"Enter Agent Container",id:"enter-agent-container",level:3},{value:"Send Data",id:"send-data",level:3},{value:"Verify Data",id:"verify-data",level:3},{value:"Questions",id:"questions",level:2},{value:"&quot;specify container image platform&quot; when start Docker Compose",id:"specify-container-image-platform-when-start-docker-compose",level:3},{value:"Task Configuration Failed",id:"task-configuration-failed",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Here we use an example to introduce how to create ",(0,n.kt)("inlineCode",{parentName:"p"},"File -> Pulsar -> ClickHouse")," data ingestion."),(0,n.kt)("h2",{id:"deployment"},"Deployment"),(0,n.kt)("h3",{id:"install-inlong"},"Install InLong"),(0,n.kt)("p",null,"Before we begin, we need to install InLong. Here we provide two ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/deployment/docker"},"Docker Deployment")," (Recommended)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/deployment/bare_metal"},"Bare Metal Deployment"))),(0,n.kt)("h3",{id:"install-clickhouse"},"Install ClickHouse"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d --rm --net=host --name clickhouse -e CLICKHOUSE_USER=admin -e CLICKHOUSE_PASSWORD=inlong -e CLICKHOUSE_DEFAULT_ACCESS_MANAGEMENT=1 clickhouse/clickhouse-server:22.8\n")),(0,n.kt)("h2",{id:"cluster-initialize"},"Cluster Initialize"),(0,n.kt)("p",null,"When all containers are successfully started, you can access the InLong dashboard address http://localhost, and use the following default account to log in."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"User: admin\nPassword: inlong\n")),(0,n.kt)("h3",{id:"create-cluster-tag"},"Create Cluster Tag"),(0,n.kt)("p",null,"Click ","[Clusters]"," -> ","[ClusterTags]"," -> ","[Create]"," on the page to specify the cluster label name and person in charge.\n",(0,n.kt)("img",{alt:"Create Cluster label",src:a(31043).Z,width:"515",height:"328"})),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Since each component reports the ClusterTags as ",(0,n.kt)("inlineCode",{parentName:"p"},"default_cluster")," by default, do not use other names.")),(0,n.kt)("h3",{id:"register-pulsar-cluster"},"Register Pulsar Cluster"),(0,n.kt)("p",null,"Click ","[Clusters]"," -> ","[ClusterTags]"," -> ","[Create]"," on the page to register Pulsar Cluster.\n",(0,n.kt)("img",{alt:"pulsar cluster",src:a(82996).Z,width:"646",height:"800"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The ClusterTags selects the newly created ",(0,n.kt)("inlineCode",{parentName:"p"},"default_cluster"),", the Pulsar cluster deployed by docker:"),(0,n.kt)("p",{parentName:"admonition"},"Service URL is ",(0,n.kt)("inlineCode",{parentName:"p"},"pulsar://pulsar:6650"),", Admin URL is ",(0,n.kt)("inlineCode",{parentName:"p"},"http://pulsar:8080"),".")),(0,n.kt)("h3",{id:"register-clickhouse-datanodes"},"Register Clickhouse DataNodes"),(0,n.kt)("p",null,"Click ","[DataNodes]"," -> ","[Create]"," on the page to register ClickHouse DataNodes.\n",(0,n.kt)("img",{alt:"Create kafka cluster",src:a(68890).Z,width:"891",height:"655"})),(0,n.kt)("h2",{id:"create-task"},"Create Task"),(0,n.kt)("h3",{id:"create-data-streams-group"},"Create Data Streams Group"),(0,n.kt)("p",null,"Click ","[Ingestion]"," -> ","[Create]",", inpit ID and select Pulsar Type.\n",(0,n.kt)("img",{alt:"Create datastream",src:a(479).Z,width:"3354",height:"1794"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you want to use Kafka, you need to modify the MQ_TYPE in docker-compose.yml")),(0,n.kt)("h3",{id:"create-data-stream"},"Create Data Stream"),(0,n.kt)("p",null,"Click ","[Next]"," -> ","[Create]",", config data stream.\n",(0,n.kt)("img",{alt:"Create datastream",src:a(56916).Z,width:"1236",height:"909"})),(0,n.kt)("h3",{id:"create-data-source"},"Create Data Source"),(0,n.kt)("p",null,"Click ","[Sources create]"," -> ","[File]",", config data source informations.\n",(0,n.kt)("img",{alt:"Create datastream",src:a(58542).Z,width:"961",height:"565"})),(0,n.kt)("h3",{id:"create-data-sink"},"Create Data Sink"),(0,n.kt)("p",null,"Click ","[Sinks create]"," -> ","[ClickHouse]",", input Name, DbName, TableName and select created ck DataNode and so on, then click ","[save]",".\n",(0,n.kt)("img",{alt:"Create data object",src:a(81186).Z,width:"1492",height:"1121"})),(0,n.kt)("h3",{id:"approve-data-stream"},"Approve Data Stream"),(0,n.kt)("p",null,"Click ","[Approval]"," -> ","[MyApproval]"," -> ","[Detail]"," -> ","[Select Cluster tag]"," -> ","[Ok]",".\n",(0,n.kt)("img",{alt:"clickhouse",src:a(34137).Z,width:"3322",height:"714"})),(0,n.kt)("p",null,"Back to ","[Ingestion]"," page, wait for ","[configuration success]",".\n",(0,n.kt)("img",{alt:"clickhouse",src:a(95770).Z,width:"3296",height:"782"})),(0,n.kt)("h2",{id:"test-data"},"Test Data"),(0,n.kt)("h3",{id:"enter-agent-container"},"Enter Agent Container"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker exec -it agent /bin/bash\n")),(0,n.kt)("h3",{id:"send-data"},"Send Data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'# collect file /data/collect-data/test.log data source configuration path and total of 10000 data packets are sent.\nfor i in {1..10000};do echo "name_$i | $i" >> /data/collect-data/test.log;done\n')),(0,n.kt)("h3",{id:"verify-data"},"Verify Data"),(0,n.kt)("p",null,"Check data in ","[Audit]"," page.\n",(0,n.kt)("img",{alt:"clickhouse",src:a(4848).Z,width:"1925",height:"874"})),(0,n.kt)("p",null,"Then enter ClickHouse container, check data in table.\n",(0,n.kt)("img",{alt:"clickhouse",src:a(61721).Z,width:"723",height:"765"})),(0,n.kt)("h2",{id:"questions"},"Questions"),(0,n.kt)("h3",{id:"specify-container-image-platform-when-start-docker-compose"},'"specify container image platform" when start Docker Compose'),(0,n.kt)("p",null,'The API is incompatible, you can delete platform: "linux/x86_64" in docker-compose.'),(0,n.kt)("h3",{id:"task-configuration-failed"},"Task Configuration Failed"),(0,n.kt)("p",null,"Generally, the MQ or Flink group configuration is incorrect. You can view the error information on the page, or enter the Manager container to view detailed logs."))}p.isMDXComponent=!0},31043:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create_cluster_label-6a90b8b65f0e4d3259bbed710a5d50ef.png"},82996:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create_pulsar_cluster-57792270c123117d0c57f3bc008bcd40.png"},68890:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/datanode-4c23f8f8c270eda09263d01b6e824614.png"},34137:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/pulsar_approval-225aaff76e68b4d041c60364f44cae16.png"},95770:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/pulsar_approve_result-39eb149769cb427225e7ed0c16896c3c.png"},4848:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/pulsar_audit-e879a11e07708842eaf5da6edf1622da.png"},479:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/pulsar_group-064402e790ec639c7dbe339251e706e7.png"},81186:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/pulsar_sink-3502c5e188adee0d87b74160b4d71d8f.png"},58542:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/pulsar_source-c09231119dc345a1694aa3def63375f0.png"},56916:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/pulsar_stream-a30cfbecab0c5c78d35d47393085ec21.png"},61721:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/pulsar_table-859be55dbabcda83e11f652ad5e954ba.png"}}]);