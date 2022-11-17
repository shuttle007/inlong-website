"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[82638],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),g=p(a),m=r,c=g["".concat(d,".").concat(m)]||g[m]||u[m]||l;return a?n.createElement(c,o(o({ref:e},s),{},{components:a})):n.createElement(c,o({ref:e},s))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=g;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},51009:(t,e,a)=>{a.d(e,{Y:()=>n});const n={inLongVersion:"1.3.0-SNAPSHOT"}},64952:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var n=a(87462),r=(a(67294),a(3905)),l=a(51009);const o={title:"PostgreSQL-CDC",sidebar_position:8},i=void 0,d={unversionedId:"data_node/extract_node/postgresql-cdc",id:"version-1.3.0/data_node/extract_node/postgresql-cdc",title:"PostgreSQL-CDC",description:"Overview",source:"@site/versioned_docs/version-1.3.0/data_node/extract_node/postgresql-cdc.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/postgresql-cdc",permalink:"/docs/1.3.0/data_node/extract_node/postgresql-cdc",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.3.0/data_node/extract_node/postgresql-cdc.md",tags:[],version:"1.3.0",sidebarPosition:8,frontMatter:{title:"PostgreSQL-CDC",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Oracle-CDC",permalink:"/docs/1.3.0/data_node/extract_node/oracle-cdc"},next:{title:"Pulsar",permalink:"/docs/1.3.0/data_node/extract_node/pulsar"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Supported Version",id:"supported-version",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Maven dependency",id:"maven-dependency",level:3},{value:"Setup PostgreSQL server",id:"setup-postgresql-server",level:2},{value:"pgoutput",id:"pgoutput",level:3},{value:"decoderbufs",id:"decoderbufs",level:3},{value:"How to create a PostgreSQL Extract Node",id:"how-to-create-a-postgresql-extract-node",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"Usage for InLong Dashboard",id:"usage-for-inlong-dashboard",level:3},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"PostgreSQL Extract Node Options",id:"postgresql-extract-node-options",level:2},{value:"Available Metadata",id:"available-metadata",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2}],u={toc:s};function g(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"PostgreSQL Extract Node")," allows for reading snapshot data and incremental data from PostgreSQL database. This document describes how to set up the ",(0,r.kt)("inlineCode",{parentName:"p"},"PostgreSQL Extract Node")," to run SQL queries against PostgreSQL databases."),(0,r.kt)("h2",{id:"supported-version"},"Supported Version"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Extract Node"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Driver"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/1.3.0/data_node/extract_node/postgresql-cdc"},"PostgreSQL-CDC")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.postgresql.org"},"PostgreSQL"),": 9.6, 10, 11, 12"),(0,r.kt)("td",{parentName:"tr",align:null},"JDBC Driver: 42.2.12")))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"In order to set up the ",(0,r.kt)("inlineCode",{parentName:"p"},"PostgreSQL Extract Node"),", the following provides dependency information for both projects using a\nbuild automation tool (such as Maven or SBT) and SQL Client with Sort Connectors JAR bundles."),(0,r.kt)("h3",{id:"maven-dependency"},"Maven dependency"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-postgres-cdc</artifactId>\n    <version>${l.Y.inLongVersion}</version>\n</dependency>\n`)),(0,r.kt)("h2",{id:"setup-postgresql-server"},"Setup PostgreSQL server"),(0,r.kt)("p",null,"Change Data Capture (CDC) allows you to track and propagate changes in a PostgreSQL database to downstream consumers based on its Write-Ahead Log (WAL).\nYou need to ensure that the upstream database is configured to support logical replication. Before using the PostgreSQL connector to monitor the changes committed on a PostgreSQL server,\ndecide which logical decoding plug-in you intend to use. If you plan not to use the native ",(0,r.kt)("inlineCode",{parentName:"p"},"pgoutput")," logical replication stream support, then you must install the logical decoding\nplug-in into the PostgreSQL server."),(0,r.kt)("h3",{id:"pgoutput"},"pgoutput"),(0,r.kt)("p",null,"pgoutput is the standard logical decoding output plug-in in PostgreSQL 10+. It is maintained by the PostgreSQL community, and used by PostgreSQL itself for logical replication.\nThis plug-in is always present so no additional libraries need to be installed."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Check the ",(0,r.kt)("inlineCode",{parentName:"li"},"wal_level")," configuration setting:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW wal_level;\n")),(0,r.kt)("p",null,"The default value is replica. For CDC, you\u2019ll need to set it to ",(0,r.kt)("inlineCode",{parentName:"p"},"logical")," in the database configuration file (postgresql.conf). Keep in mind that changing the wal_level requires a restart of the Postgres instance and can affect database performance."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"To configure the replication slot regardless of the decoder being used, specify the following in the postgresql.conf file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"wal_level = logical \n")),(0,r.kt)("h3",{id:"decoderbufs"},"decoderbufs"),(0,r.kt)("p",null,"decoderbufs is based on Protobuf and maintained by the Debezium community. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/debezium/postgres-decoderbufs"},"installing")," it."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"To load the plug-in at startup, add the following to the postgresql.conf file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"shared_preload_libraries = 'decoderbufs'\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"To configure the replication slot regardless of the decoder being used, specify the following in the postgresql.conf file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"wal_level = logical \n")),(0,r.kt)("h2",{id:"how-to-create-a-postgresql-extract-node"},"How to create a PostgreSQL Extract Node"),(0,r.kt)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `postgresTable`(\n  `name` STRING,\n  `age` INT\n) WITH (\n  'connector' = 'postgres-cdc-inlong',\n  'hostname' = 'localhost',\n  'username' = 'postgres',\n  'password' = 'inlong',\n  'database-name' = 'postgres',\n  'schema-name' = 'public',\n  'port' = '5432',\n  'table-name' = 'user',\n  'decoding.plugin.name' = 'pgoutput',\n  'slot.name' = 'feaafacbaddadc'\n)\n")),(0,r.kt)("h3",{id:"usage-for-inlong-dashboard"},"Usage for InLong Dashboard"),(0,r.kt)("p",null,"TODO: It will be supported in the future."),(0,r.kt)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,r.kt)("p",null,"TODO: It will be supported in the future."),(0,r.kt)("h2",{id:"postgresql-extract-node-options"},"PostgreSQL Extract Node Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connector"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify what connector to use, here should be ",(0,r.kt)("inlineCode",{parentName:"td"},"postgres-cdc-inlong"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hostname"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"IP address or hostname of the PostgreSQL database server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the PostgreSQL database to use when connecting to the PostgreSQL database server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Password to use when connecting to the PostgreSQL database server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database-name"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Database name of the PostgreSQL server to monitor.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"schema-name"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Schema name of the PostgreSQL database to monitor.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table-name"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Table name of the PostgreSQL database to monitor.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"port"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"5432"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer port number of the PostgreSQL database server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"decoding.plugin.name"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"decoderbufs"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the Postgres logical decoding plug-in installed on the server. Supported values are decoderbufs, wal2json, wal2json_rds, wal2json_streaming, wal2json_rds_streaming and pgoutput.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slot.name"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"flink"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'The name of the PostgreSQL logical decoding slot that was created for streaming changes from a particular plug-in for a particular database/schema. The server uses this slot to stream events to the connector that you are configuring. Slot names must conform to PostgreSQL replication slot naming rules, which state: "Each replication slot has a name, which can contain lower-case letters, numbers, and the underscore character."')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"debezium.*"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Pass-through Debezium's properties to Debezium Embedded Engine which is used to capture data changes from Postgres server. For example: 'debezium.snapshot.mode' = 'never'. See more about the ",(0,r.kt)("a",{parentName:"td",href:"https://debezium.io/documentation/reference/1.5/connectors/postgresql.html#postgresql-connector-properties"},"Debezium's Postgres Connector properties"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlong.metric"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Inlong metric label, format of value is groupId&streamId&nodeId.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"slot.name"),' is recommended to set for different tables to avoid the potential PSQLException: ERROR: replication slot "flink" is active for PID 974 error.',(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Note"),": PSQLException: ERROR: all replication slots are in use Hint: Free one or increase max_replication_slots. We can delete slot by the following statement."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT*FROM pg_replication_slots;\n-- get slot name is flink. delete it\nSELECT pg_drop_replication_slot('flink');\n")),(0,r.kt)("h2",{id:"available-metadata"},"Available Metadata"),(0,r.kt)("p",null,"The following format metadata can be exposed as read-only (VIRTUAL) columns in a table definition."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table_name"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the table that contain the row.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"schema_name"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the schema that contain the row.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database_name"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the database that contain the row.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"op_ts"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP_LTZ(3) NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"It indicates the time that the change was made in the database. If the record is read from snapshot of the table instead of the change stream, the value is always 0.")))),(0,r.kt)("p",null,"The extended CREATE TABLE example demonstrates the syntax for exposing these metadata fields:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE postgresTable (\n    db_name STRING METADATA FROM 'database_name' VIRTUAL,\n    table_name STRING METADATA  FROM 'table_name' VIRTUAL,\n    operation_ts TIMESTAMP_LTZ(3) METADATA FROM 'op_ts' VIRTUAL,\n    `name` STRING,\n    `age` INT\n) WITH (\n     'connector' = 'postgres-cdc-inlong',\n     'hostname' = 'localhost',\n     'username' = 'postgres',\n     'password' = 'inlong',\n     'database-name' = 'postgres',\n     'schema-name' = 'public',\n     'port' = '5432',\n     'table-name' = 'user',\n     'decoding.plugin.name' = 'pgoutput',\n     'slot.name' = 'feaafacbaddadc'\n);\n")),(0,r.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PostgreSQL type"),(0,r.kt)("th",{parentName:"tr",align:null},"Flink SQL type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMALLINT ",(0,r.kt)("br",null)," INT2 ",(0,r.kt)("br",null)," SMALLSERIAL ",(0,r.kt)("br",null)," SERIAL2"),(0,r.kt)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTEGER ",(0,r.kt)("br",null)," SERIAL"),(0,r.kt)("td",{parentName:"tr",align:null},"INT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT ",(0,r.kt)("br",null)," BIGSERIAL"),(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL(20, 0)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"REAL ",(0,r.kt)("br",null)," FLOAT4"),(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT8 ",(0,r.kt)("br",null)," DOUBLE PRECISION"),(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NUMERIC(p, s) ",(0,r.kt)("br",null)," DECIMAL(p, s)"),(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL(p, s)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"DATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIME ","[(p)][WITHOUT TIMEZONE]"),(0,r.kt)("td",{parentName:"tr",align:null},"TIME ","[(p)][WITHOUT TIMEZONE]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP ","[(p)]","WITHOUT TIMEZONE"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP ","[(p)][WITHOUT TIMEZONE]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CHAR(n) ",(0,r.kt)("br",null)," CHARACTER(n) ",(0,r.kt)("br",null)," VARCHAR(n) ",(0,r.kt)("br",null)," CHARACTER VARYING(n) ",(0,r.kt)("br",null)," TEXT"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BYTEA"),(0,r.kt)("td",{parentName:"tr",align:null},"BYTES")))))}g.isMDXComponent=!0}}]);