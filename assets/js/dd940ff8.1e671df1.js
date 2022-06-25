"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7206],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=l.createContext({}),s=function(t){var e=l.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=s(t.components);return l.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=s(n),k=r,h=c["".concat(d,".").concat(k)]||c[k]||p[k]||o;return n?l.createElement(h,a(a({ref:e},u),{},{components:n})):l.createElement(h,a({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=c;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},49353:(t,e,n)=>{n.d(e,{Y:()=>l});const l={inLongVersion:"1.3.0-SNAPSHOT"}},64012:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var l=n(87462),r=(n(67294),n(3905)),o=n(49353);const a={title:"Hive",sidebar_position:8},i=void 0,d={unversionedId:"data_node/load_node/hive",id:"data_node/load_node/hive",title:"Hive",description:"Overview",source:"@site/docs/data_node/load_node/hive.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/hive",permalink:"/docs/next/data_node/load_node/hive",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/data_node/load_node/hive.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Hive",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"HDFS",permalink:"/docs/next/data_node/load_node/hdfs"},next:{title:"Iceberg",permalink:"/docs/next/data_node/load_node/iceberg"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Supported Version",id:"supported-version",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Maven dependency",id:"maven-dependency",level:3},{value:"How to create a Hive Load Node",id:"how-to-create-a-hive-load-node",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"Usage for InLong Dashboard",id:"usage-for-inlong-dashboard",level:3},{value:"Configuration",id:"configuration",level:4},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"Hive Load Node Options",id:"hive-load-node-options",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2}],p={toc:u};function c(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,l.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Hive Load Node can write data to hive. Using the flink dialect, the insert operation is currently supported, and the data in the upsert mode will be converted into insert.\nManipulating hive tables using the hive dialect is currently not supported."),(0,r.kt)("h2",{id:"supported-version"},"Supported Version"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Load Node"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/data_node/load_node/hive"},"Hive")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://nightlies.apache.org/flink/flink-docs-master/docs/connectors/table/hive/overview/#supported-hive-versions"},"Hive"),": 1.x, 2.x, 3.x")))),(0,r.kt)("h3",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"Using Hive load requires the introduction of dependencies.\nOf course, you can also use INLONG to provide jar packages.(",(0,r.kt)("a",{parentName:"p",href:"https://inlong.apache.org/download/main/"},"sort-connector-hive"),")"),(0,r.kt)("h3",{id:"maven-dependency"},"Maven dependency"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-hive</artifactId>\n    <version>"+o.Y.inLongVersion+"</version>\n</dependency>\n")),(0,r.kt)("h2",{id:"how-to-create-a-hive-load-node"},"How to create a Hive Load Node"),(0,r.kt)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,r.kt)("p",null,"The example below shows how to create a Hive Load Node with ",(0,r.kt)("inlineCode",{parentName:"p"},"Flink SQL Cli")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hiveTableName (\n  id STRING,\n  name STRING,\n  uv BIGINT,\n  pv BIGINT\n) WITH (\n  'connector' = 'hive',\n  'default-database' = 'default',\n  'hive-version' = '3.1.2',\n  'hive-conf-dir' = 'hdfs://localhost:9000/user/hive/hive-site.xml'\n);\n")),(0,r.kt)("h3",{id:"usage-for-inlong-dashboard"},"Usage for InLong Dashboard"),(0,r.kt)("h4",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"When creating a data stream, select ",(0,r.kt)("inlineCode",{parentName:"p"},"Hive"),' for the data stream direction, and click "Add" to configure it.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hive Configuration",src:n(28855).Z,width:"1480",height:"1155"})),(0,r.kt)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,r.kt)("p",null,"TODO: It will be supported in the future."),(0,r.kt)("h2",{id:"hive-load-node-options"},"Hive Load Node Options"),(0,r.kt)("table",{class:"table table-bordered"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{class:"text-left",style:{width:"25%"}},"Option"),(0,r.kt)("th",{class:"text-center",style:{width:"8%"}},"Required"),(0,r.kt)("th",{class:"text-center",style:{width:"7%"}},"Default"),(0,r.kt)("th",{class:"text-center",style:{width:"10%"}},"Type"),(0,r.kt)("th",{class:"text-center",style:{width:"50%"}},"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"connector")),(0,r.kt)("td",null,"required"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Specify what connector to use, here should be 'hive'.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"default-database")),(0,r.kt)("td",null,"required"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"hive-conf-dir")),(0,r.kt)("td",null,"required"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"If you don't want to upload hive-site.xml to HDFS, you can put this configuration into the classpath of the project, and then this place only needs to be not empty, otherwise you must fill in the complete HDFS URL.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.partition-commit.trigger")),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"If hive exists partition you can set trigger mode.(process-time)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"partition.time-extractor.timestamp-pattern")),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"If hive exists partition you can set timestamp-pattern mode.(yyyy-MM-dd...)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.partition-commit.delay")),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"If hive exists partition you can set delay  mode.(10s,20s,1m...)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.partition-commit.policy.kind")),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Policy to commit a partition is to notify the downstream application that the partition has finished writing, the partition is ready to be read. metastore: add partition to metastore. Only hive table supports metastore policy, file system manages partitions through directory structure. success-file: add '_success' file to directory. Both can be configured at the same time: 'metastore,success-file'. custom: use policy class to create a commit policy. Support to configure multiple policies: 'metastore,success-file'.")))),(0,r.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.kt)("div",{class:"wy-table-responsive"},(0,r.kt)("table",{class:"colwidths-auto docutils"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{class:"text-left"},"Hive type"),(0,r.kt)("th",{class:"text-left"},"Flink SQL type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"char(p)"),(0,r.kt)("td",null,"CHAR(p)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"varchar(p)"),(0,r.kt)("td",null,"VARCHAR(p)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"STRING")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"BOOLEAN")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"tinyint"),(0,r.kt)("td",null,"TINYINT")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"smallint"),(0,r.kt)("td",null,"SMALLINT")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"int"),(0,r.kt)("td",null,"INT")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"bigint"),(0,r.kt)("td",null,"BIGINT")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"float"),(0,r.kt)("td",null,"FLOAT")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"double"),(0,r.kt)("td",null,"DOUBLE")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"decimal(p, s)"),(0,r.kt)("td",null,"DECIMAL(p, s)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"date"),(0,r.kt)("td",null,"DATE")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"timestamp(9)"),(0,r.kt)("td",null,"TIMESTAMP")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"bytes"),(0,r.kt)("td",null,"BINARY")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"LIST")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"map"),(0,r.kt)("td",null,"MAP")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"row"),(0,r.kt)("td",null,"STRUCT"))))))}c.isMDXComponent=!0},28855:(t,e,n)=>{n.d(e,{Z:()=>l});const l=n.p+"assets/images/hive-36990009c592f8f732b0752c777621bf.png"}}]);