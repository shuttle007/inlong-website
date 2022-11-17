"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[13050],{3905:(t,e,i)=>{i.d(e,{Zo:()=>c,kt:()=>m});var l=i(67294);function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,l)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function a(t,e){if(null==t)return{};var i,l,n=function(t,e){if(null==t)return{};var i,l,n={},o=Object.keys(t);for(l=0;l<o.length;l++)i=o[l],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)i=o[l],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var s=l.createContext({}),d=function(t){var e=l.useContext(s),i=e;return t&&(i="function"==typeof t?t(e):r(r({},e),t)),i},c=function(t){var e=d(t.components);return l.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var i=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),p=d(i),m=n,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return i?l.createElement(h,r(r({ref:e},c),{},{components:i})):l.createElement(h,r({ref:e},c))}));function m(t,e){var i=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=i.length,r=new Array(o);r[0]=p;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a.mdxType="string"==typeof t?t:n,r[1]=a;for(var d=2;d<o;d++)r[d]=i[d];return l.createElement.apply(null,r)}return l.createElement.apply(null,i)}p.displayName="MDXCreateElement"},49685:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var l=i(87462),n=(i(67294),i(3905));const o={title:"HDFS",sidebar_position:7},r=void 0,a={unversionedId:"data_node/load_node/hdfs",id:"version-1.3.0/data_node/load_node/hdfs",title:"HDFS",description:"Overview",source:"@site/versioned_docs/version-1.3.0/data_node/load_node/hdfs.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/hdfs",permalink:"/docs/1.3.0/data_node/load_node/hdfs",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.3.0/data_node/load_node/hdfs.md",tags:[],version:"1.3.0",sidebarPosition:7,frontMatter:{title:"HDFS",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"HBase",permalink:"/docs/1.3.0/data_node/load_node/hbase"},next:{title:"Hive",permalink:"/docs/1.3.0/data_node/load_node/hive"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"How to create a HDFS Load Node",id:"how-to-create-a-hdfs-load-node",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"File Formats",id:"file-formats",level:4},{value:"Rolling Policy",id:"rolling-policy",level:4},{value:"File Compaction",id:"file-compaction",level:4},{value:"Partition Commit",id:"partition-commit",level:4},{value:"Partition Commit Policy",id:"partition-commit-policy",level:4}],c={toc:d};function u(t){let{components:e,...i}=t;return(0,n.kt)("wrapper",(0,l.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"HDFS uses the general capabilities of flink's fileSystem to support single files and partitioned files.\nThe file system connector itself is included in Flink and does not require an additional dependency.\nThe corresponding jar can be found in the Flink distribution inside the /lib directory.\nA corresponding format needs to be specified for reading and writing rows from and to a file system."),(0,n.kt)("h2",{id:"how-to-create-a-hdfs-load-node"},"How to create a HDFS Load Node"),(0,n.kt)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,n.kt)("p",null,"The example below shows how to create a HDFS Load Node with ",(0,n.kt)("inlineCode",{parentName:"p"},"Flink SQL Cli")," :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hdfs_load_node (\n  id STRING,\n  name STRING,\n  uv BIGINT,\n  pv BIGINT,\n  dt STRING,\n `hour` STRING\n  ) PARTITIONED BY (dt, `hour`) WITH (\n    'connector'='filesystem-inlong',\n    'path'='...',\n    'format'='orc',\n    'sink.partition-commit.delay'='1 h',\n    'sink.partition-commit.policy.kind'='success-file'\n  );\n")),(0,n.kt)("h4",{id:"file-formats"},"File Formats"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"CSV(Uncompressed)"),(0,n.kt)("li",null,"JSON(JSON format for file system connector is not a typical JSON file but uncompressed newline delimited JSON.)"),(0,n.kt)("li",null,"Avro(Support compression by configuring avro.codec.)"),(0,n.kt)("li",null,"Parquet(Compatible with Hive.)"),(0,n.kt)("li",null,"Orc(Compatible with Hive.)"),(0,n.kt)("li",null,"Debezium-JSON"),(0,n.kt)("li",null,"Canal-JSON"),(0,n.kt)("li",null,"Raw")),(0,n.kt)("h4",{id:"rolling-policy"},"Rolling Policy"),(0,n.kt)("p",null,"Data within the partition directories are split into part files.\nEach partition will contain at least one part file for each subtask of the sink that has received data for that partition.\nThe in-progress part file will be closed and additional part file will be created according to the configurable rolling policy.\nThe policy rolls part files based on size, a timeout that specifies the maximum duration for which a file can be open."),(0,n.kt)("table",{class:"table table-bordered"},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{class:"text-left",style:{width:"25%"}},"Option"),(0,n.kt)("th",{class:"text-center",style:{width:"7%"}},"Default"),(0,n.kt)("th",{class:"text-center",style:{width:"10%"}},"Type"),(0,n.kt)("th",{class:"text-center",style:{width:"50%"}},"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("h5",null,"sink.rolling-policy.file-size")),(0,n.kt)("td",{style:{wordWrap:"break-word"}},"128MB"),(0,n.kt)("td",null,"MemorySize"),(0,n.kt)("td",null,"The maximum part file size before rolling.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("h5",null,"sink.rolling-policy.rollover-interval")),(0,n.kt)("td",{style:{wordWrap:"break-word"}},"30 min"),(0,n.kt)("td",null,"String"),(0,n.kt)("td",null,"The maximum time duration a part file can stay open before rolling (by default 30 min to avoid to many small files). The frequency at which this is checked is controlled by the 'sink.rolling-policy.check-interval' option.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("h5",null,"sink.rolling-policy.check-interval")),(0,n.kt)("td",{style:{wordWrap:"break-word"}},"1 min"),(0,n.kt)("td",null,"String"),(0,n.kt)("td",null,"The interval for checking time based rolling policies. This controls the frequency to check whether a part file should rollover based on 'sink.rolling-policy.rollover-interval'.")))),(0,n.kt)("h4",{id:"file-compaction"},"File Compaction"),(0,n.kt)("p",null,"The file sink supports file compactions, which allows applications to have smaller checkpoint intervals without generating a large number of files."),(0,n.kt)("table",{class:"table table-bordered"},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{class:"text-left",style:{width:"25%"}},"Option"),(0,n.kt)("th",{class:"text-center",style:{width:"7%"}},"Default"),(0,n.kt)("th",{class:"text-center",style:{width:"10%"}},"Type"),(0,n.kt)("th",{class:"text-center",style:{width:"50%"}},"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("h5",null,"auto-compaction")),(0,n.kt)("td",{style:{wordWrap:"break-word"}},"false"),(0,n.kt)("td",null,"Boolean"),(0,n.kt)("td",null,"Whether to enable automatic compaction in streaming sink or not. The data will be written to temporary files. After the checkpoint is completed, the temporary files generated by a checkpoint will be compacted. The temporary files are invisible before compaction.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("h5",null,"compaction.file-size")),(0,n.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,n.kt)("td",null,"String"),(0,n.kt)("td",null,"The compaction target file size, the default value is the rolling file size.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"inlong.metric"),(0,n.kt)("td",null,"optional"),(0,n.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,n.kt)("td",null,"String"),(0,n.kt)("td",null,"Inlong metric label, format of value is groupId&streamId&nodeId.")))),(0,n.kt)("h4",{id:"partition-commit"},"Partition Commit"),(0,n.kt)("p",null,"After writing a partition, it is often necessary to notify downstream applications.\nFor example, add the partition to a Hive metastore or writing a _SUCCESS file in the directory.\nThe file system sink contains a partition commit feature that allows configuring custom policies.\nCommit actions are based on a combination of triggers and policies."),(0,n.kt)("table",{class:"table table-bordered"},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{class:"text-left",style:{width:"25%"}},"Option"),(0,n.kt)("th",{class:"text-center",style:{width:"7%"}},"Default"),(0,n.kt)("th",{class:"text-center",style:{width:"10%"}},"Type"),(0,n.kt)("th",{class:"text-center",style:{width:"50%"}},"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("h5",null,"sink.partition-commit.trigger")),(0,n.kt)("td",{style:{wordWrap:"break-word"}},"process-time"),(0,n.kt)("td",null,"String"),(0,n.kt)("td",null,"Trigger type for partition commit: 'process-time': based on the time of the machine, it neither requires partition time extraction nor watermark generation. Commit partition once the 'current system time' passes 'partition creation system time' plus 'delay'. 'partition-time': based on the time that extracted from partition values, it requires watermark generation. Commit partition once the 'watermark' passes 'time extracted from partition values' plus 'delay'.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("h5",null,"sink.partition-commit.delay")),(0,n.kt)("td",{style:{wordWrap:"break-word"}},"0 s"),(0,n.kt)("td",null,"Duration"),(0,n.kt)("td",null,"The partition will not commit until the delay time. If it is a daily partition, should be '1 d', if it is a hourly partition, should be '1 h'.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("h5",null,"sink.partition-commit.watermark-time-zone")),(0,n.kt)("td",{style:{wordWrap:"break-word"}},"UTC"),(0,n.kt)("td",null,"String"),(0,n.kt)("td",null,"The time zone to parse the long watermark value to TIMESTAMP value, the parsed watermark timestamp is used to compare with partition time to decide the partition should commit or not. This option is only take effect when `sink.partition-commit.trigger` is set to 'partition-time'. If this option is not configured correctly, e.g. source rowtime is defined on TIMESTAMP_LTZ column, but this config is not configured, then users may see the partition committed after a few hours. The default value is 'UTC', which means the watermark is defined on TIMESTAMP column or not defined. If the watermark is defined on TIMESTAMP_LTZ column, the time zone of watermark is the session time zone. The option value is either a full name such as 'America/Los_Angeles', or a custom timezone id such as 'GMT-08:00'.")))),(0,n.kt)("h4",{id:"partition-commit-policy"},"Partition Commit Policy"),(0,n.kt)("p",null,"The partition strategy defines the specific operation of partition submission."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"metastore\uff1aThis strategy is only supported when hive."),(0,n.kt)("li",{parentName:"ul"},"success: The '_SUCCESS' file will be generated after the part file is generated.")),(0,n.kt)("table",{class:"table table-bordered"},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{class:"text-left",style:{width:"25%"}},"Option"),(0,n.kt)("th",{class:"text-left",style:{width:"8%"}},"Required"),(0,n.kt)("th",{class:"text-center",style:{width:"7%"}},"Default"),(0,n.kt)("th",{class:"text-center",style:{width:"10%"}},"Type"),(0,n.kt)("th",{class:"text-center",style:{width:"50%"}},"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("h5",null,"sink.partition-commit.policy.kind")),(0,n.kt)("td",null,"optional"),(0,n.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,n.kt)("td",null,"String"),(0,n.kt)("td",null,"Policy to commit a partition is to notify the downstream application that the partition has finished writing, the partition is ready to be read. metastore: add partition to metastore. Only hive table supports metastore policy, file system manages partitions through directory structure. success-file: add '_success' file to directory. Both can be configured at the same time: 'metastore,success-file'. custom: use policy class to create a commit policy. Support to configure multiple policies: 'metastore,success-file'.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("h5",null,"sink.partition-commit.policy.class")),(0,n.kt)("td",null,"optional"),(0,n.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,n.kt)("td",null,"String"),(0,n.kt)("td",null,"The partition commit policy class for implement PartitionCommitPolicy interface. Only work in custom commit policy.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("h5",null,"sink.partition-commit.success-file.name")),(0,n.kt)("td",null,"optional"),(0,n.kt)("td",{style:{wordWrap:"break-word"}},"_SUCCESS"),(0,n.kt)("td",null,"String"),(0,n.kt)("td",null,"The file name for success-file partition commit policy, default is '_SUCCESS'.")))))}u.isMDXComponent=!0}}]);