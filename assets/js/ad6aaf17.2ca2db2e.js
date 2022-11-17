"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[33403],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(a),k=l,m=c["".concat(i,".").concat(k)]||c[k]||p[k]||r;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},75892:(e,t,a)=>{a.d(t,{Y:()=>n});const n={inLongVersion:"1.4.0-SNAPSHOT"}},95782:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(87462),l=(a(67294),a(3905)),r=a(75892);const o={title:"Oracle-CDC",sidebar_position:7},s=void 0,i={unversionedId:"data_node/extract_node/oracle-cdc",id:"version-1.4.0/data_node/extract_node/oracle-cdc",title:"Oracle-CDC",description:"Overview",source:"@site/versioned_docs/version-1.4.0/data_node/extract_node/oracle-cdc.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/oracle-cdc",permalink:"/docs/data_node/extract_node/oracle-cdc",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.4.0/data_node/extract_node/oracle-cdc.md",tags:[],version:"1.4.0",sidebarPosition:7,frontMatter:{title:"Oracle-CDC",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"MySQL-CDC",permalink:"/docs/data_node/extract_node/mysql-cdc"},next:{title:"PostgreSQL-CDC",permalink:"/docs/data_node/extract_node/postgresql-cdc"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Supported Version",id:"supported-version",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Maven dependency",id:"maven-dependency",level:3},{value:"Setup Oracle",id:"setup-oracle",level:2},{value:"For Non-CDB database",id:"for-non-cdb-database",level:3},{value:"For CDB database",id:"for-cdb-database",level:3},{value:"How to create an Oracle Extract Node",id:"how-to-create-an-oracle-extract-node",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"Usage for InLong Dashboard",id:"usage-for-inlong-dashboard",level:3},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"Oracle Extact Node Options",id:"oracle-extact-node-options",level:2},{value:"Limitation",id:"limitation",level:2},{value:"Can&#39;t perform checkpoint during scanning snapshot of tables",id:"cant-perform-checkpoint-during-scanning-snapshot-of-tables",level:3},{value:"Available Metadata",id:"available-metadata",level:2},{value:"Features",id:"features",level:2},{value:"Exactly-Once Processing",id:"exactly-once-processing",level:3},{value:"Startup Reading Position",id:"startup-reading-position",level:3},{value:"Single Thread Reading",id:"single-thread-reading",level:3},{value:"Whole Database, Multiple Schemas, Multiple Tables Migration",id:"whole-database-multiple-schemas-multiple-tables-migration",level:3},{value:"Data Type Mapping",id:"data-type-mapping",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The Oracle Extract Node allows for reading snapshot data and incremental data from Oracle database.\nThis document describes how to setup the Oracle Extract Node to run SQL queries against Oracle databases."),(0,l.kt)("h2",{id:"supported-version"},"Supported Version"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Extract Node"),(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Driver"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/data_node/extract_node/oracle-cdc"},"Oracle-CDC")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.oracle.com/index.html"},"Oracle"),": 11, 12, 19"),(0,l.kt)("td",{parentName:"tr",align:null},"Oracle Driver: 19.3.0.0")))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("p",null,"In order to setup the Oracle Extract Node, the following table provides dependency information for both projects using a build automation tool (such as Maven or SBT) and SQL Client with Sort Connectors JAR bundles."),(0,l.kt)("h3",{id:"maven-dependency"},"Maven dependency"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-oracle-cdc</artifactId>\n    <version>${r.Y.inLongVersion}</version>\n</dependency>\n`)),(0,l.kt)("p",null,"The Oracle driver dependency is also required to connect to Oracle database. Please download ",(0,l.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/com/oracle/database/jdbc/ojdbc8/19.3.0.0/ojdbc8-19.3.0.0.jar"},"ojdbc8-19.3.0.0.jar")," and put it into ",(0,l.kt)("inlineCode",{parentName:"p"},"FLINK_HOME/lib/"),"."),(0,l.kt)("h2",{id:"setup-oracle"},"Setup Oracle"),(0,l.kt)("p",null,"You have to enable log archiving for Oracle database and define an Oracle user with appropriate permissions on all databases that the Debezium Oracle connector monitors."),(0,l.kt)("h3",{id:"for-non-cdb-database"},"For Non-CDB database"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Enable log archiving"),(0,l.kt)("p",{parentName:"li"}," (1.1). Connect to the database as DBA"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ORACLE_SID=SID\nexport ORACLE_SID\nsqlplus /nolog\n  CONNECT sys/password AS SYSDBA\n")),(0,l.kt)("p",{parentName:"li"}," (1.2). Enable log archiving"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"alter system set db_recovery_file_dest_size = 10G;\nalter system set db_recovery_file_dest = '/opt/oracle/oradata/recovery_area' scope=spfile;\nshutdown immediate;\nstartup mount;\nalter database archivelog;\nalter database open;\n")),(0,l.kt)("p",{parentName:"li"}," ",(0,l.kt)("strong",{parentName:"p"},"Note:")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Enable log archiving requires database restart, pay attention when try to do it")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The archived logs will occupy a large amount of disk space, so consider clean the expired logs the periodically"),(0,l.kt)("p",{parentName:"li"},"(1.3). Check whether log archiving is enabled"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'-- Should now "Database log mode: Archive Mode"\narchive log list;\n')),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Note:")),(0,l.kt)("p",{parentName:"li"},"Supplemental logging must be enabled for captured tables or the database in order for data changes to capture the ",(0,l.kt)("em",null,"before")," state of changed database rows.\nThe following illustrates how to configure this on the table/database level."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Enable supplemental logging for a specific table:\nALTER TABLE inventory.customers ADD SUPPLEMENTAL LOG DATA (ALL) COLUMNS;\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Enable supplemental logging for database\nALTER DATABASE ADD SUPPLEMENTAL LOG DATA;\n"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Create an Oracle user with permissions"),(0,l.kt)("p",{parentName:"li"}," (2.1). Create Tablespace"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"sqlplus sys/password@host:port/SID AS SYSDBA;\n  CREATE TABLESPACE logminer_tbs DATAFILE '/opt/oracle/oradata/SID/logminer_tbs.dbf' SIZE 25M REUSE AUTOEXTEND ON MAXSIZE UNLIMITED;\n  exit;\n")),(0,l.kt)("p",{parentName:"li"}," (2.2). Create a user and grant permissions"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"sqlplus sys/password@host:port/SID AS SYSDBA;\n  CREATE USER flinkuser IDENTIFIED BY flinkpw DEFAULT TABLESPACE LOGMINER_TBS QUOTA UNLIMITED ON LOGMINER_TBS;\n  GRANT CREATE SESSION TO flinkuser;\n  GRANT SET CONTAINER TO flinkuser;\n  GRANT SELECT ON V_$DATABASE to flinkuser;\n  GRANT FLASHBACK ANY TABLE TO flinkuser;\n  GRANT SELECT ANY TABLE TO flinkuser;\n  GRANT SELECT_CATALOG_ROLE TO flinkuser;\n  GRANT EXECUTE_CATALOG_ROLE TO flinkuser;\n  GRANT SELECT ANY TRANSACTION TO flinkuser;\n  GRANT LOGMINING TO flinkuser;\n\n  GRANT CREATE TABLE TO flinkuser;\n  GRANT LOCK ANY TABLE TO flinkuser;\n  GRANT ALTER ANY TABLE TO flinkuser;\n  GRANT CREATE SEQUENCE TO flinkuser;\n\n  GRANT EXECUTE ON DBMS_LOGMNR TO flinkuser;\n  GRANT EXECUTE ON DBMS_LOGMNR_D TO flinkuser;\n\n  GRANT SELECT ON V_$LOG TO flinkuser;\n  GRANT SELECT ON V_$LOG_HISTORY TO flinkuser;\n  GRANT SELECT ON V_$LOGMNR_LOGS TO flinkuser;\n  GRANT SELECT ON V_$LOGMNR_CONTENTS TO flinkuser;\n  GRANT SELECT ON V_$LOGMNR_PARAMETERS TO flinkuser;\n  GRANT SELECT ON V_$LOGFILE TO flinkuser;\n  GRANT SELECT ON V_$ARCHIVED_LOG TO flinkuser;\n  GRANT SELECT ON V_$ARCHIVE_DEST_STATUS TO flinkuser;\n  exit;\n")))),(0,l.kt)("h3",{id:"for-cdb-database"},"For CDB database"),(0,l.kt)("p",null,"Overall, the steps for configuring CDB database is quite similar to non-CDB database, but the commands may be different. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Enable log archiving"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ORACLE_SID=ORCLCDB\nexport ORACLE_SID\nsqlplus /nolog\n  CONNECT sys/password AS SYSDBA\n  alter system set db_recovery_file_dest_size = 10G;\n  -- should exist\n  alter system set db_recovery_file_dest = '/opt/oracle/oradata/recovery_area' scope=spfile;\n  shutdown immediate\n  startup mount\n  alter database archivelog;\n  alter database open;\n  -- Should show \"Database log mode: Archive Mode\"\n  archive log list\n  exit;\n")),(0,l.kt)("p",{parentName:"li"}," ",(0,l.kt)("strong",{parentName:"p"},"Note:"),"\nYou can also use the following commands to enable supplemental logging:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Enable supplemental logging for a specific table:\nALTER TABLE inventory.customers ADD SUPPLEMENTAL LOG DATA (ALL) COLUMNS;\n-- Enable supplemental logging for database\nALTER DATABASE ADD SUPPLEMENTAL LOG DATA;\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Create an Oracle user with permissions"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"sqlplus sys/password@//localhost:1521/ORCLCDB as sysdba\n  CREATE TABLESPACE logminer_tbs DATAFILE '/opt/oracle/oradata/ORCLCDB/logminer_tbs.dbf' SIZE 25M REUSE AUTOEXTEND ON MAXSIZE UNLIMITED;\n  exit\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"sqlplus sys/password@//localhost:1521/ORCLPDB1 as sysdba\n  CREATE TABLESPACE logminer_tbs DATAFILE '/opt/oracle/oradata/ORCLCDB/ORCLPDB1/logminer_tbs.dbf' SIZE 25M REUSE AUTOEXTEND ON MAXSIZE UNLIMITED;\n  exit\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"sqlplus sys/password@//localhost:1521/ORCLCDB as sysdba\n  CREATE USER flinkuser IDENTIFIED BY flinkpw DEFAULT TABLESPACE logminer_tbs QUOTA UNLIMITED ON logminer_tbs CONTAINER=ALL;\n  GRANT CREATE SESSION TO flinkuser CONTAINER=ALL;\n  GRANT SET CONTAINER TO flinkuser CONTAINER=ALL;\n  GRANT SELECT ON V_$DATABASE to flinkuser CONTAINER=ALL;\n  GRANT FLASHBACK ANY TABLE TO flinkuser CONTAINER=ALL;\n  GRANT SELECT ANY TABLE TO flinkuser CONTAINER=ALL;\n  GRANT SELECT_CATALOG_ROLE TO flinkuser CONTAINER=ALL;\n  GRANT EXECUTE_CATALOG_ROLE TO flinkuser CONTAINER=ALL;\n  GRANT SELECT ANY TRANSACTION TO flinkuser CONTAINER=ALL;\n  GRANT LOGMINING TO flinkuser CONTAINER=ALL;\n  GRANT CREATE TABLE TO flinkuser CONTAINER=ALL;\n  GRANT LOCK ANY TABLE TO flinkuser CONTAINER=ALL;\n  GRANT CREATE SEQUENCE TO flinkuser CONTAINER=ALL;\n\n  GRANT EXECUTE ON DBMS_LOGMNR TO flinkuser CONTAINER=ALL;\n  GRANT EXECUTE ON DBMS_LOGMNR_D TO flinkuser CONTAINER=ALL;\n\n  GRANT SELECT ON V_$LOG TO flinkuser CONTAINER=ALL;\n  GRANT SELECT ON V_$LOG_HISTORY TO flinkuser CONTAINER=ALL;\n  GRANT SELECT ON V_$LOGMNR_LOGS TO flinkuser CONTAINER=ALL;\n  GRANT SELECT ON V_$LOGMNR_CONTENTS TO flinkuser CONTAINER=ALL;\n  GRANT SELECT ON V_$LOGMNR_PARAMETERS TO flinkuser CONTAINER=ALL;\n  GRANT SELECT ON V_$LOGFILE TO flinkuser CONTAINER=ALL;\n  GRANT SELECT ON V_$ARCHIVED_LOG TO flinkuser CONTAINER=ALL;\n  GRANT SELECT ON V_$ARCHIVE_DEST_STATUS TO flinkuser CONTAINER=ALL;\n  exit\n")))),(0,l.kt)("p",null,"See more about the ",(0,l.kt)("a",{parentName:"p",href:"https://debezium.io/documentation/reference/1.5/connectors/oracle.html#setting-up-oracle"},"Setting up Oracle")),(0,l.kt)("h2",{id:"how-to-create-an-oracle-extract-node"},"How to create an Oracle Extract Node"),(0,l.kt)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,l.kt)("p",null,"The Oracle Extract Node can be defined as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Create an Oracle Extract Node 'user' in Flink SQL\nFlink SQL> CREATE TABLE oracle_extract_node (\n     ID INT NOT NULL,\n     NAME STRING,\n     DESCRIPTION STRING,\n     WEIGHT DECIMAL(10, 3),\n     PRIMARY KEY(id) NOT ENFORCED\n     ) WITH (\n     'connector' = 'oracle-cdc-inlong',\n     'hostname' = 'localhost',\n     'port' = '1521',\n     'username' = 'flinkuser',\n     'password' = 'flinkpw',\n     'database-name' = 'XE',\n     'schema-name' = 'inlong',\n     'table-name' = 'user');\n  \n-- Read snapshot and binlogs from products table\nFlink SQL> SELECT * FROM oracle_extract_node;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:"),"\nWhen working with the CDB + PDB model, you are expected to add an extra option ",(0,l.kt)("inlineCode",{parentName:"p"},"'debezium.database.pdb.name' = 'xxx'")," in Flink DDL to specific the name of the PDB to connect to."),(0,l.kt)("h3",{id:"usage-for-inlong-dashboard"},"Usage for InLong Dashboard"),(0,l.kt)("p",null,"TODO: It will be supported in the future."),(0,l.kt)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,l.kt)("p",null,"TODO: It will be supported in the future."),(0,l.kt)("h2",{id:"oracle-extact-node-options"},"Oracle Extact Node Options"),(0,l.kt)("div",{class:"highlight"},(0,l.kt)("table",{class:"colwidths-auto docutils"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{class:"text-left",style:{width:"25%"}},"Option"),(0,l.kt)("th",{class:"text-left",style:{width:"8%"}},"Required"),(0,l.kt)("th",{class:"text-left",style:{width:"7%"}},"Default"),(0,l.kt)("th",{class:"text-left",style:{width:"10%"}},"Type"),(0,l.kt)("th",{class:"text-left",style:{width:"50%"}},"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"connector"),(0,l.kt)("td",null,"required"),(0,l.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"Specify what connector to use, here should be ",(0,l.kt)("code",null,"'oracle-cdc-inlong'"),".")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"hostname"),(0,l.kt)("td",null,"required"),(0,l.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"IP address or hostname of the Oracle database server.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"username"),(0,l.kt)("td",null,"required"),(0,l.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"Name of the Oracle database to use when connecting to the Oracle database server.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"password"),(0,l.kt)("td",null,"required"),(0,l.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"Password to use when connecting to the Oracle database server.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"database-name"),(0,l.kt)("td",null,"required"),(0,l.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"Database name of the Oracle server to monitor.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"schema-name"),(0,l.kt)("td",null,"required"),(0,l.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"Schema name of the Oracle database to monitor.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"table-name"),(0,l.kt)("td",null,"required"),(0,l.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"Table name of the Oracle database to monitor. The value is of the form ",(0,l.kt)("i",null,"<schema_name>.<table_name>"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"port"),(0,l.kt)("td",null,"optional"),(0,l.kt)("td",{style:{wordWrap:"break-word"}},"1521"),(0,l.kt)("td",null,"Integer"),(0,l.kt)("td",null,"Integer port number of the Oracle database server.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"scan.startup.mode"),(0,l.kt)("td",null,"optional"),(0,l.kt)("td",{style:{wordWrap:"break-word"}},"initial"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,'Optional startup mode for Oracle CDC consumer, valid enumerations are "initial" and "latest-offset". Please see ',(0,l.kt)("a",{href:"#startup-reading-position"},"Startup Reading Position"),"section for more detailed information.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"debezium.*"),(0,l.kt)("td",null,"optional"),(0,l.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"Pass-through Debezium's properties to Debezium Embedded Engine which is used to capture data changes from Oracle server. For example: ",(0,l.kt)("code",null,"'debezium.snapshot.mode' = 'never'"),". See more about the ",(0,l.kt)("a",{href:"https://debezium.io/documentation/reference/1.5/connectors/oracle.html#oracle-connector-properties"},"Debezium's Oracle Connector properties"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"inlong.metric.labels"),(0,l.kt)("td",null,"optional"),(0,l.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"Inlong metric label, format of value is groupId=xxgroup&streamId=xxstream&nodeId=xxnode.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"source.multiple.enable"),(0,l.kt)("td",null,"optional"),(0,l.kt)("td",{style:{wordWrap:"break-word"}},"false"),(0,l.kt)("td",null,"Boolean"),(0,l.kt)("td",null,"Whether to enable multiple schema and table migration. If it is' true ', Oracle Extract Node will compress the physical field of the table into a special meta field 'data_canal' in the format of 'canal json'."))))),(0,l.kt)("h2",{id:"limitation"},"Limitation"),(0,l.kt)("h3",{id:"cant-perform-checkpoint-during-scanning-snapshot-of-tables"},"Can't perform checkpoint during scanning snapshot of tables"),(0,l.kt)("p",null,"During scanning snapshot of database tables, since there is no recoverable position, we can't perform checkpoints. In order to not perform checkpoints, Oracle CDC source will keep the checkpoint waiting to timeout. The timeout checkpoint will be recognized as failed checkpoint, by default, this will trigger a failover for the Flink job. So if the database table is large, it is recommended to add following Flink configurations to avoid failover because of the timeout checkpoints:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"execution.checkpointing.interval: 10min\nexecution.checkpointing.tolerable-failed-checkpoints: 100\nrestart-strategy: fixed-delay\nrestart-strategy.fixed-delay.attempts: 2147483647\n")),(0,l.kt)("h2",{id:"available-metadata"},"Available Metadata"),(0,l.kt)("p",null,"The following format metadata can be exposed as read-only (VIRTUAL) columns in a table definition."),(0,l.kt)("table",{class:"colwidths-auto docutils"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{class:"text-left",style:{width:"15%"}},"Key"),(0,l.kt)("th",{class:"text-left",style:{width:"30%"}},"DataType"),(0,l.kt)("th",{class:"text-left",style:{width:"55%"}},"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"table_name"),(0,l.kt)("td",null,"STRING NOT NULL"),(0,l.kt)("td",null,"Name of the table that contain the row.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"schema_name"),(0,l.kt)("td",null,"STRING NOT NULL"),(0,l.kt)("td",null,"Name of the schema that contain the row.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"database_name"),(0,l.kt)("td",null,"STRING NOT NULL"),(0,l.kt)("td",null,"Name of the database that contain the row.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"op_ts"),(0,l.kt)("td",null,"TIMESTAMP_LTZ(3) NOT NULL"),(0,l.kt)("td",null,"It indicates the time that the change was made in the database. ",(0,l.kt)("br",null),"If the record is read from snapshot of the table instead of the change stream, the value is always 0.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"meta.table_name"),(0,l.kt)("td",null,"STRING NOT NULL"),(0,l.kt)("td",null,"Name of the table that contain the row.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"meta.schema_name"),(0,l.kt)("td",null,"STRING NOT NULL"),(0,l.kt)("td",null,"Name of the schema that contain the row.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"meta.database_name"),(0,l.kt)("td",null,"STRING NOT NULL"),(0,l.kt)("td",null,"Name of the database that contain the row.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"meta.op_ts"),(0,l.kt)("td",null,"TIMESTAMP_LTZ(3) NOT NULL"),(0,l.kt)("td",null,"It indicates the time that the change was made in the database. ",(0,l.kt)("br",null),"If the record is read from snapshot of the table instead of the change stream, the value is always 0.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"meta.op_type"),(0,l.kt)("td",null,"STRING"),(0,l.kt)("td",null,"Type of database operation, such as INSERT/DELETE, etc.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"meta.data_canal"),(0,l.kt)("td",null,"STRING/BYTES"),(0,l.kt)("td",null,"Data for rows in `canal-json` format only exists when the `source.multiple.enable` option is 'true'.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"meta.is_ddl"),(0,l.kt)("td",null,"BOOLEAN"),(0,l.kt)("td",null,"Whether the DDL statement.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"meta.ts"),(0,l.kt)("td",null,"TIMESTAMP_LTZ(3) NOT NULL"),(0,l.kt)("td",null,"The current time when the row was received and processed.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"meta.sql_type"),(0,l.kt)("td",null,"MAP"),(0,l.kt)("td",null,"Mapping of sql_type table fields to java data type IDs.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"meta.oracle_type"),(0,l.kt)("td",null,"MAP"),(0,l.kt)("td",null,"Structure of the table.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"meta.pk_names"),(0,l.kt)("td",null,"ARRAY"),(0,l.kt)("td",null,"Primay key name of the table.")))),(0,l.kt)("p",null,"The extended CREATE TABLE example demonstrates the syntax for exposing these metadata fields:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE products (\n    db_name STRING METADATA FROM 'database_name' VIRTUAL,\n    schema_name STRING METADATA FROM 'schema_name' VIRTUAL, \n    table_name STRING METADATA  FROM 'table_name' VIRTUAL,\n    op_ts TIMESTAMP_LTZ(3) METADATA FROM 'op_ts' VIRTUAL,\n    meta_db_name STRING METADATA FROM 'meta.database_name' VIRTUAL,\n    meta_schema_name STRING METADATA FROM 'meta.schema_name' VIRTUAL, \n    meta_table_name STRING METADATA  FROM 'meta.table_name' VIRTUAL,\n    meat_op_ts TIMESTAMP_LTZ(3) METADATA FROM 'meta.op_ts' VIRTUAL,\n    meta_op_type STRING METADATA  FROM 'meta.op_type' VIRTUAL,\n    meta_data_canal STRING METADATA  FROM 'meta.data_canal' VIRTUAL,\n    meta_is_ddl BOOLEAN METADATA FROM 'meta.is_ddl' VIRTUAL,\n    meta_ts TIMESTAMP_LTZ(3) METADATA FROM 'meta.ts' VIRTUAL,\n    meta_sql_type MAP<STRING, INT> METADATA FROM 'meta.sql_type' VIRTUAL,\n    meat_oracle_type MAP<STRING, STRING> METADATA FROM 'meta.oracle_type' VIRTUAL,\n    meta_pk_names ARRAY<STRING> METADATA FROM 'meta.pk_names' VIRTUAL\n    ID INT NOT NULL,\n    NAME STRING,\n    DESCRIPTION STRING,\n    WEIGHT DECIMAL(10, 3),\n    PRIMARY KEY(id) NOT ENFORCED\n) WITH (\n    'connector' = 'oracle-cdc-inlong',\n    'hostname' = 'localhost',\n    'port' = '1521',\n    'username' = 'flinkuser',\n    'password' = 'flinkpw',\n    'database-name' = 'XE',\n    'schema-name' = 'inventory',\n    'table-name' = 'inventory.products'\n);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note")," : The Oracle dialect is case-sensitive, it converts field name to uppercase if the field name is not quoted, Flink SQL doesn't convert the field name. Thus for physical columns from oracle database, we should use its converted field name in Oracle when define an ",(0,l.kt)("inlineCode",{parentName:"p"},"oracle-cdc")," table in Flink SQL."),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("h3",{id:"exactly-once-processing"},"Exactly-Once Processing"),(0,l.kt)("p",null,"The Oracle Extract Node is a Flink Source connector which will read database snapshot first and then continues to read change events with ",(0,l.kt)("strong",{parentName:"p"},"exactly-once processing")," even failures happen. Please read ",(0,l.kt)("a",{parentName:"p",href:"https://debezium.io/documentation/reference/1.5/connectors/oracle.html#how-the-oracle-connector-works"},"How the connector works"),"."),(0,l.kt)("h3",{id:"startup-reading-position"},"Startup Reading Position"),(0,l.kt)("p",null,"The config option ",(0,l.kt)("inlineCode",{parentName:"p"},"scan.startup.mode")," specifies the startup mode for Oracle CDC consumer. The valid enumerations are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"initial")," (default): Performs an initial snapshot on the monitored database tables upon first startup, and continue to read the latest binlog."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"latest-offset"),": Never to perform a snapshot on the monitored database tables upon first startup, just read from\nthe change since the connector was started.")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note: the mechanism of ",(0,l.kt)("inlineCode",{parentName:"em"},"scan.startup.mode")," option relying on Debezium's ",(0,l.kt)("inlineCode",{parentName:"em"},"snapshot.mode")," configuration. So please do not use them together. If you specific both ",(0,l.kt)("inlineCode",{parentName:"em"},"scan.startup.mode")," and ",(0,l.kt)("inlineCode",{parentName:"em"},"debezium.snapshot.mode")," options in the table DDL, it may make ",(0,l.kt)("inlineCode",{parentName:"em"},"scan.startup.mode")," doesn't work.")),(0,l.kt)("h3",{id:"single-thread-reading"},"Single Thread Reading"),(0,l.kt)("p",null,"The Oracle Extract Node can't work in parallel reading, because there is only one task can receive change events."),(0,l.kt)("h3",{id:"whole-database-multiple-schemas-multiple-tables-migration"},"Whole Database, Multiple Schemas, Multiple Tables Migration"),(0,l.kt)("p",null,"Oracle Extract Node supports the whole database, multiple schemas, multiple tables migration function. When you enable this function, Oracle Extract Node will compress the physical field of the table into a special meta field 'data_canal' in the format of 'canal json'."),(0,l.kt)("p",null,"config options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source.multiple.enable"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify ",(0,l.kt)("inlineCode",{parentName:"td"},"'source.multiple.enable' = 'true'")," to enable the whole database, multiple schemas, multiple tables migration function")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schema-name"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Schema name of the Oracle database to monitor. If you want to capture multiple schemas, you can use commas to separate them. For example: ",(0,l.kt)("inlineCode",{parentName:"td"},"'schema-name' = 'SCHEMA1,SCHEMA2'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table-name"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Table name of the Oracle database to monitor. If you want to capture multiple tables, you can use commas to separate them. For example: ",(0,l.kt)("inlineCode",{parentName:"td"},"'table-name' = 'SCHEMA1.TB.*, SCHEMA2.TB1'"))))),(0,l.kt)("p",null,"The CREATE TABLE example demonstrates the syntax of this function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE node(\n    data STRING METADATA FROM 'meta.data_canal' VIRTUAL)\n    WITH (\n    'connector' = 'oracle-cdc-inlong',\n    'hostname' = 'localhost',\n    'port' = '1521',\n    'username' = 'flinkuser',\n    'password' = 'flinkpw',\n    'database-name' = 'XE',\n    'schema-name' = 'inventory',\n    'table-name' = 'inventory..*',\n    'source.multiple.enable' = 'true'\n)\n")),(0,l.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,l.kt)("div",{class:"wy-table-responsive"},(0,l.kt)("table",{class:"colwidths-auto docutils"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{class:"text-left"},"Oracle type",(0,l.kt)("a",{href:"https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Data-Types.html"})),(0,l.kt)("th",{class:"text-left"},"Flink SQL type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"NUMBER(p, s <= 0), p - s < 3"),(0,l.kt)("td",null,"TINYINT")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"NUMBER(p, s <= 0), p - s < 5"),(0,l.kt)("td",null,"SMALLINT")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"NUMBER(p, s <= 0), p - s < 10"),(0,l.kt)("td",null,"INT")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"NUMBER(p, s <= 0), p - s < 19"),(0,l.kt)("td",null,"BIGINT")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"NUMBER(p, s <= 0), 19 <= p - s <= 38 ",(0,l.kt)("br",null)),(0,l.kt)("td",null,"DECIMAL(p - s, 0)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"NUMBER(p, s > 0)"),(0,l.kt)("td",null,"DECIMAL(p, s)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"NUMBER(p, s <= 0), p - s > 38"),(0,l.kt)("td",null,"STRING")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"FLOAT",(0,l.kt)("br",null),"BINARY_FLOAT"),(0,l.kt)("td",null,"FLOAT")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"DOUBLE PRECISION",(0,l.kt)("br",null),"BINARY_DOUBLE"),(0,l.kt)("td",null,"DOUBLE")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"NUMBER(1)"),(0,l.kt)("td",null,"BOOLEAN")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"DATE",(0,l.kt)("br",null),"TIMESTAMP [(p)]"),(0,l.kt)("td",null,"TIMESTAMP [(p)] [WITHOUT TIMEZONE]")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"TIMESTAMP [(p)] WITH TIME ZONE"),(0,l.kt)("td",null,"TIMESTAMP [(p)] WITH TIME ZONE")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"TIMESTAMP [(p)] WITH LOCAL TIME ZONE"),(0,l.kt)("td",null,"TIMESTAMP_LTZ [(p)]")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"CHAR(n)",(0,l.kt)("br",null),"NCHAR(n)",(0,l.kt)("br",null),"NVARCHAR2(n)",(0,l.kt)("br",null),"VARCHAR(n)",(0,l.kt)("br",null),"VARCHAR2(n)",(0,l.kt)("br",null),"CLOB",(0,l.kt)("br",null),"NCLOB",(0,l.kt)("br",null),"XMLType"),(0,l.kt)("td",null,"STRING")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"BLOB",(0,l.kt)("br",null),"ROWID"),(0,l.kt)("td",null,"BYTES")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"INTERVAL DAY TO SECOND",(0,l.kt)("br",null),"INTERVAL YEAR TO MONTH"),(0,l.kt)("td",null,"BIGINT"))))))}c.isMDXComponent=!0}}]);