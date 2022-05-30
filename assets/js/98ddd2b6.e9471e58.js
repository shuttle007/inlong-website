"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8411],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),k=r,u=c["".concat(d,".").concat(k)]||c[k]||m[k]||i;return n?a.createElement(u,l(l({ref:t},s),{},{components:n})):a.createElement(u,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},81333:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"Kubernetes",sidebar_position:3},d=void 0,p={unversionedId:"deployment/k8s",id:"deployment/k8s",title:"Kubernetes",description:"Prerequisites",source:"@site/docs/deployment/k8s.md",sourceDirName:"deployment",slug:"/deployment/k8s",permalink:"/docs/next/deployment/k8s",draft:!1,editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/deployment/k8s.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Kubernetes",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/docs/next/deployment/docker"},next:{title:"Bare Metal",permalink:"/docs/next/deployment/bare_metal"}},s={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Install",id:"install",level:3},{value:"Access InLong Dashboard",id:"access-inlong-dashboard",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Uninstall",id:"uninstall",level:3},{value:"Development",id:"development",level:2},{value:"Quick start with kind",id:"quick-start-with-kind",level:3},{value:"Install Helm",id:"install-helm",level:3},{value:"Install the chart",id:"install-the-chart",level:3},{value:"Develop and debug",id:"develop-and-debug",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],c={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Kubernetes 1.10+"),(0,i.kt)("li",{parentName:"ul"},"Helm 3.0+"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-inlong/tree/master/docker/kubernetes"},"InLong Helm Chart")),(0,i.kt)("li",{parentName:"ul"},"A dynamic provisioner for the PersistentVolumes(",(0,i.kt)("inlineCode",{parentName:"li"},"production environment"),")")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"install"},"Install"),(0,i.kt)("p",null,"If the namespace named ",(0,i.kt)("inlineCode",{parentName:"p"},"inlong")," does not exist, create it first by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace inlong\n")),(0,i.kt)("p",null,"To install the chart with a namespace named ",(0,i.kt)("inlineCode",{parentName:"p"},"inlong"),", try:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helm upgrade inlong --install -n inlong ./\n")),(0,i.kt)("h3",{id:"access-inlong-dashboard"},"Access InLong Dashboard"),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"ingress.enabled")," in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/blob/master/docker/kubernetes/values.yaml"},"values.yaml")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", you just access ",(0,i.kt)("inlineCode",{parentName:"p"},"http://${ingress.host}/dashboard")," in browser."),(0,i.kt)("p",null,"Otherwise, when ",(0,i.kt)("inlineCode",{parentName:"p"},"dashboard.service.type")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterIP"),", you need to execute the port-forward command like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'export DASHBOARD_POD_NAME=$(kubectl get pods -l "app.kubernetes.io/name=inlong-dashboard,app.kubernetes.io/instance=inlong" -o jsonpath="{.items[0].metadata.name}" -n inlong)\nexport DASHBOARD_CONTAINER_PORT=$(kubectl get pod $DASHBOARD_POD_NAME -o jsonpath="{.spec.containers[0].ports[0].containerPort}" -n inlong)\nkubectl port-forward $DASHBOARD_POD_NAME 8181:$DASHBOARD_CONTAINER_PORT -n inlong\n')),(0,i.kt)("p",null,"And then access ",(0,i.kt)("a",{parentName:"p",href:"http://127.0.0.1:8181"},"http://127.0.0.1:8181")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Tip: If the error of ",(0,i.kt)("inlineCode",{parentName:"p"},"unable to do port forwarding: socat not found")," appears, you need to install ",(0,i.kt)("inlineCode",{parentName:"p"},"socat")," at first.")),(0,i.kt)("p",null,"Or when ",(0,i.kt)("inlineCode",{parentName:"p"},"dashboard.service.type")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"NodePort"),", you need to execute the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'export DASHBOARD_NODE_IP=$(kubectl get nodes -o jsonpath="{.items[0].status.addresses[0].address}" -n inlong)\nexport DASHBOARD_NODE_PORT=$(kubectl get svc inlong-dashboard -o jsonpath="{.spec.ports[0].nodePort}" -n inlong)\n')),(0,i.kt)("p",null,"And then access ",(0,i.kt)("inlineCode",{parentName:"p"},"http://$DASHBOARD_NODE_IP:$DASHBOARD_NODE_PORT")),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"dashboard.service.type")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),", you need to execute the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'export DASHBOARD_SERVICE_IP=$(kubectl get svc inlong-dashboard --template "{{"{{ range (index .status.loadBalancer.ingress 0) }}{{.}}{{ end }}"}}"  -n inlong)\n')),(0,i.kt)("p",null,"And then access ",(0,i.kt)("inlineCode",{parentName:"p"},"http://$DASHBOARD_SERVICE_IP:30080")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: It may take a few minutes for the ",(0,i.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," IP to be available. You can check the status by running ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get svc inlong-dashboard -n inlong -w"))),(0,i.kt)("p",null,"The default username is ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," and the default password is ",(0,i.kt)("inlineCode",{parentName:"p"},"inlong"),". You can access the InLong Dashboard through them."),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The configuration file is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/blob/master/docker/kubernetes/values.yaml"},"values.yaml"),", and the following tables lists the configurable parameters of InLong and their default values."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"timezone")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Asia/Shanghai")),(0,i.kt)("td",{parentName:"tr",align:"center"},"World time and date for cities in all time zones")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"images.pullPolicy")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"IfNotPresent")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Image pull policy. One of ",(0,i.kt)("inlineCode",{parentName:"td"},"Always"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Never"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"IfNotPresent"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"images.<component>.repository")),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Docker image repository for the component")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"images.<component>.tag")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"latest")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Docker image tag for the component")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<component>.component")),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Component name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<component>.replicas")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"1")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Replicas is the desired number of replicas of a given Template")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<component>.podManagementPolicy")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"OrderedReady")),(0,i.kt)("td",{parentName:"tr",align:"center"},"PodManagementPolicy controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<component>.annotations")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"{}")),(0,i.kt)("td",{parentName:"tr",align:"center"},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"annotations")," field can be used to attach arbitrary non-identifying metadata to objects")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<component>.tolerations")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"[]")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Tolerations are applied to pods, and allow (but do not require) the pods to schedule onto nodes with matching taints")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<component>.nodeSelector")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"{}")),(0,i.kt)("td",{parentName:"tr",align:"center"},"You can add the ",(0,i.kt)("inlineCode",{parentName:"td"},"nodeSelector")," field to your Pod specification and specify the node labels you want the target node to have")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<component>.affinity")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"{}")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Node affinity is conceptually similar to nodeSelector, allowing you to constrain which nodes your Pod can be scheduled on based on node labels")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<component>.terminationGracePeriodSeconds")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"30")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Optional duration in seconds the pod needs to terminate gracefully")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<component>.resources")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"{}")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Optionally specify how much of each resource a container needs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<component>.port(s)")),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"The port(s) for each component service")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<component>.env")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"{}")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Environment variables for each component container")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("code",null,"\\<component",">",".probe.\\<liveness","|","readiness",">",".enabled")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Turn on and off liveness or readiness probe")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("code",null,"\\<component",">",".probe.\\<liveness","|","readiness",">",".failureThreshold")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"10")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Minimum consecutive successes for the probe")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("code",null,"\\<component",">",".probe.\\<liveness","|","readiness",">",".initialDelaySeconds")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"10")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Delay before the probe is initiated")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("code",null,"\\<component",">",".probe.\\<liveness","|","readiness",">",".periodSeconds")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"30")),(0,i.kt)("td",{parentName:"tr",align:"center"},"How often to perform the probe")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<component>.volumes.name")),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Volume name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<component>.volumes.size")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"10Gi")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Volume size")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<component>.service.annotations")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"{}")),(0,i.kt)("td",{parentName:"tr",align:"center"},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"annotations")," field may need to be set when service.type is ",(0,i.kt)("inlineCode",{parentName:"td"},"LoadBalancer"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<component>.service.type")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"ClusterIP")),(0,i.kt)("td",{parentName:"tr",align:"center"},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"type")," field determines how the service is exposed. Valid options are ",(0,i.kt)("inlineCode",{parentName:"td"},"ClusterIP"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"NodePort"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"LoadBalancer")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"ExternalName"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<component>.service.clusterIP")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"nil")),(0,i.kt)("td",{parentName:"tr",align:"center"},"ClusterIP is the IP address of the service and is usually assigned randomly by the master")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<component>.service.nodePort")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"nil")),(0,i.kt)("td",{parentName:"tr",align:"center"},"NodePort is the port on each node on which this service is exposed when service type is ",(0,i.kt)("inlineCode",{parentName:"td"},"NodePort"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<component>.service.loadBalancerIP")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"nil")),(0,i.kt)("td",{parentName:"tr",align:"center"},"LoadBalancer will get created with the IP specified in this field when service type is ",(0,i.kt)("inlineCode",{parentName:"td"},"LoadBalancer"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<component>.service.externalName")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"nil")),(0,i.kt)("td",{parentName:"tr",align:"center"},"ExternalName is the external reference that kubedns or equivalent will return as a CNAME record for this service, requires service type to be ",(0,i.kt)("inlineCode",{parentName:"td"},"ExternalName"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<component>.service.externalIPs")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"[]")),(0,i.kt)("td",{parentName:"tr",align:"center"},"ExternalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"external.mysql.enabled")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},"If not exists external MySQL, InLong will use the internal MySQL by default")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"external.mysql.hostname")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"localhost")),(0,i.kt)("td",{parentName:"tr",align:"center"},"External MySQL hostname")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"external.mysql.port")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"3306")),(0,i.kt)("td",{parentName:"tr",align:"center"},"External MySQL port")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"external.mysql.username")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"root")),(0,i.kt)("td",{parentName:"tr",align:"center"},"External MySQL username")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"external.mysql.password")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"password")),(0,i.kt)("td",{parentName:"tr",align:"center"},"External MySQL password")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"external.pulsar.enabled")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},"If not exists external Pulsar, InLong will use the internal TubeMQ by default")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"external.pulsar.serviceUrl")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"localhost:6650")),(0,i.kt)("td",{parentName:"tr",align:"center"},"External Pulsar service URL")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"external.pulsar.adminUrl")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"localhost:8080")),(0,i.kt)("td",{parentName:"tr",align:"center"},"External Pulsar admin URL")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The optional components include ",(0,i.kt)("inlineCode",{parentName:"p"},"agent"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"audit"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dashboard"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dataproxy"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"manager"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tubemq-manager"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tubemq-master"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tubemq-broker"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"zookeeper")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"mysql"),".")),(0,i.kt)("h3",{id:"uninstall"},"Uninstall"),(0,i.kt)("p",null,"To uninstall the release, try:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helm uninstall inlong -n inlong\n")),(0,i.kt)("p",null,"The above command removes all the Kubernetes components except the ",(0,i.kt)("inlineCode",{parentName:"p"},"PVC")," associated with the chart, and deletes the release.\nYou can delete all ",(0,i.kt)("inlineCode",{parentName:"p"},"PVC")," if any persistent volume claims used, it will lose all data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete pvc -n inlong --all\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Deleting the PVC also delete all data. Please be cautious before doing it.")),(0,i.kt)("h2",{id:"development"},"Development"),(0,i.kt)("p",null,"A Kubernetes cluster with ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh"},"helm")," is required before development.\nBut it doesn't matter if you don't have one, the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kind"},"kind")," is recommended.\nIt runs a local Kubernetes cluster in Docker container. Therefore, it requires very little time to up and stop the Kubernetes node."),(0,i.kt)("h3",{id:"quick-start-with-kind"},"Quick start with kind"),(0,i.kt)("p",null,"You can install kind by following the ",(0,i.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start"},"Quick Start")," section of their official documentation."),(0,i.kt)("p",null,"After installing kind, you can create a Kubernetes cluster with the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/tree/master/.github/kind.yml"},"kind.yml"),", try:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kind create cluster --config kind.yml\n")),(0,i.kt)("p",null,"To specify another image use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--image")," flag \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"kind create cluster --image=...."),".\nUsing a different image allows you to change the Kubernetes version of the created cluster.\nTo find images suitable for a given release currently you should check the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kind/releases"},"release notes")," for your given kind version (check with ",(0,i.kt)("inlineCode",{parentName:"p"},"kind version"),") where you'll find a complete listing of images created for a kind release."),(0,i.kt)("p",null,"After installing kind, you can interact with the created cluster, try:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl cluster-info --context kind-inlong-cluster\n")),(0,i.kt)("p",null,"Now, you have a running Kubernetes cluster for local development."),(0,i.kt)("h3",{id:"install-helm"},"Install Helm"),(0,i.kt)("p",null,"Please follow the ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install"},"installation guide")," in the official documentation to install Helm."),(0,i.kt)("h3",{id:"install-the-chart"},"Install the chart"),(0,i.kt)("p",null,"To create the namespace and Install the chart, try:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace inlong\nhelm upgrade inlong --install -n inlong ./\n")),(0,i.kt)("p",null,"It may take a few minutes. Confirm the pods are up:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"watch kubectl get pods -n inlong -o wide\n")),(0,i.kt)("h3",{id:"develop-and-debug"},"Develop and debug"),(0,i.kt)("p",null,"Follow the ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/docs/chart_template_guide/debugging"},"template debugging guide")," in the official documentation to debug your chart."),(0,i.kt)("p",null,"Besides, you can save the rendered templates by:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helm template ./ --output-dir ./result\n")),(0,i.kt)("p",null,"Then, you can check the rendered templates in the ",(0,i.kt)("inlineCode",{parentName:"p"},"result")," directory."),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"We've done our best to make these charts as seamless as possible, but occasionally there are circumstances beyond our control.\nWe've collected tips and tricks for troubleshooting common issues.\nPlease examine these first before raising an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/new/choose"},"issue"),", and feel free to make a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/compare"},"Pull Request"),"!"))}k.isMDXComponent=!0}}]);