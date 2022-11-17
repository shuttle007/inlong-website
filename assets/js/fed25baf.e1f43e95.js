"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[33174],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7940:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={title:"Deployment",sidebar_position:2},i=void 0,l={unversionedId:"modules/sort/quick_start",id:"version-1.3.0/modules/sort/quick_start",title:"Deployment",description:"Set up Flink Environment",source:"@site/versioned_docs/version-1.3.0/modules/sort/quick_start.md",sourceDirName:"modules/sort",slug:"/modules/sort/quick_start",permalink:"/docs/1.3.0/modules/sort/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.3.0/modules/sort/quick_start.md",tags:[],version:"1.3.0",sidebarPosition:2,frontMatter:{title:"Deployment",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/1.3.0/modules/sort/overview"},next:{title:"Example",permalink:"/docs/1.3.0/modules/sort/example"}},s={},p=[{value:"Set up Flink Environment",id:"set-up-flink-environment",level:2},{value:"Prepare installation files",id:"prepare-installation-files",level:2},{value:"Start an inlong-sort application",id:"start-an-inlong-sort-application",level:2},{value:"Configuration",id:"configuration",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"set-up-flink-environment"},"Set up Flink Environment"),(0,o.kt)("p",null,"Currently, InLong Sort is based on Flink, before you run an InLong Sort Application,"),(0,o.kt)("p",null,"you need to set up ",(0,o.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/deployment/overview/"},"Flink Environment"),"."),(0,o.kt)("p",null,"Currently, InLong Sort relies on Flink-1.13.5. Chose ",(0,o.kt)("inlineCode",{parentName:"p"},"flink-1.13.5-bin-scala_2.11.tgz")," when downloading package."),(0,o.kt)("h2",{id:"prepare-installation-files"},"Prepare installation files"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"InLong Sort file, ",(0,o.kt)("a",{parentName:"li",href:"https://inlong.apache.org/download/"},"Download")," ",(0,o.kt)("inlineCode",{parentName:"li"},"apache-inlong-[version]-bin.tar.gz")),(0,o.kt)("li",{parentName:"ul"},"Data Nodes Connectors, ",(0,o.kt)("a",{parentName:"li",href:"https://inlong.apache.org/download/"},"Download")," ",(0,o.kt)("inlineCode",{parentName:"li"},"apache-inlong-[version]-sort-connectors.tar.gz"))),(0,o.kt)("p",null,"Notice: Please put required Connectors jars into under ",(0,o.kt)("inlineCode",{parentName:"p"},"FLINK_HOME/lib/")," after download.",(0,o.kt)("br",{parentName:"p"}),"\n","Put ",(0,o.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.21/mysql-connector-java-8.0.21.jar"},"mysql-connector-java:8.0.21.jar")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"FLINK_HOME/lib/")," when you use ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql-cdc-inlong")," connector. "),(0,o.kt)("h2",{id:"start-an-inlong-sort-application"},"Start an inlong-sort application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./bin/flink run -c org.apache.inlong.sort.Entrance apache-inlong-[version]-bin/inlong-sort/sort-dist-[version].jar \\\n--sql.script.file mysql-to-postgresql.sql\n")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/YOUR_SQL_SCRIPT_DIR/mysql-to-postgresql.sql")," is a sql script file includes multi Flink SQL statements that can be separated by semicolon.",(0,o.kt)("br",{parentName:"p"}),"\n","Statement can support ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE TABLE"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CRETAE VIEW"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"INSERT INTO"),". We can write sql to do data integration.  "),(0,o.kt)("p",null,"We can write following SQL script if we want to read data from MySQL and write into PostgreSQL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"}," CREATE TABLE `table_1`(\n    `age` INT,\n    `name` STRING)\n    WITH (\n    'connector' = 'mysql-cdc-inlong',\n    'hostname' = 'localhost',\n    'port' = '3306',\n    'username' = 'root',\n    'password' = 'inlong',\n    'database-name' = 'test',\n    'scan.incremental.snapshot.enabled' = 'false',\n    'server-time-zone' = 'GMT+8',\n    'table-name' = 'user'\n);\nCREATE TABLE `table_2`(\n    PRIMARY KEY (`name`) NOT ENFORCED,\n    `name` STRING,\n    `age` INT)\n    WITH (\n    'connector' = 'jdbc',\n    'url' = 'jdbc:postgresql://localhost:5432/postgres',\n    'username' = 'postgres',\n    'password' = 'inlong',\n    'table-name' = 'public.user'\n);\nINSERT INTO `table_2` \n    SELECT \n    `name` AS `name`,\n    `age` AS `age`\n    FROM `table_1`;\n")))}u.isMDXComponent=!0}}]);