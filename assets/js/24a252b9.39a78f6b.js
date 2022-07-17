"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[1098],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(6010),o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),a=n(7294),o=n(6010),l=n(2389),u=n(7392),i=n(7094),s=n(2466),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,f=e.values,g=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,u.l)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),O=w.tabGroupChoices,N=w.setTabGroupChoices,T=(0,a.useState)(k),j=T[0],x=T[1],E=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var P=O[g];null!=P&&P!==j&&h.some((function(e){return e.value===P}))&&x(P)}var I=function(e){var t=e.currentTarget,n=E.indexOf(t),r=h[n].value;r!==j&&(C(t),x(r),null!=g&&N(g,String(r)))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=E.indexOf(e.currentTarget)+1;n=null!=(r=E[a])?r:E[0];break;case"ArrowLeft":var o,l=E.indexOf(e.currentTarget)-1;n=null!=(o=E[l])?o:E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},h.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return E.push(e)},onKeyDown:Z,onFocus:I,onClick:I},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(b.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function m(e){var t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},5796:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(5488),u=n(5162),i=["components"],s={title:"input-output-logger"},p=void 0,c={unversionedId:"middlewares/input-output-logger",id:"middlewares/input-output-logger",title:"input-output-logger",description:"Logs the incoming request (input) and the response (output).",source:"@site/docs/middlewares/input-output-logger.md",sourceDirName:"middlewares",slug:"/middlewares/input-output-logger",permalink:"/docs/middlewares/input-output-logger",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/input-output-logger.md",tags:[],version:"current",lastUpdatedAt:1658029008,formattedLastUpdatedAt:"7/17/2022",frontMatter:{title:"input-output-logger"},sidebar:"tutorialSidebar",previous:{title:"http-urlencode-path-parser",permalink:"/docs/middlewares/http-urlencode-path-parser"},next:{title:"rds-signer",permalink:"/docs/middlewares/rds-signer"}},d={},m=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2}],f={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Logs the incoming request (input) and the response (output)."),(0,o.kt)("p",null,"By default, the logging operate by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log")," function. You can pass as a parameter a custom logger with additional logic if you need. It can be useful if you want to process the log by doing a http call or anything else."),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"To install this middleware you can use NPM:"),(0,o.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/input-output-logger\n"))),(0,o.kt)(u.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/input-output-logger\n")))),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"logger")," function (default ",(0,o.kt)("inlineCode",{parentName:"li"},"console.log"),"): logging function that accepts an object"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"awsContext")," boolean (default ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"): Include ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/lambda/latest/dg/nodejs-context.html"},"AWS Lambda context object")," to the logger"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"omitPaths")," string[] (default ",(0,o.kt)("inlineCode",{parentName:"li"},"[]"),"): property accepts an array of paths that will be used to remove particular fields import the logged objects. This could serve as a simple way to redact sensitive data from logs (default []).")),(0,o.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport inputOutputLogger from '@middy/input-output-logger'\n\nconst handler = middy((event, context) => {\n  const response = {\n    statusCode: 200,\n    headers: {},\n    body: JSON.stringify({ message: 'hello world' })\n  };\n  return response\n})\n\nhandler\n  .use(inputOutputLogger())\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport inputOutputLogger from '@middy/input-output-logger'\nimport pino from 'pino'\n\nconst logger = pino()\n\nconst handler = middy((event, context) => {\n  // ...\n  return response\n})\n\nhandler\n  .use(inputOutputLogger({\n    logger: (request) => {\n      const child = logger.child(request.context)\n      child.info(request.event ?? request.response)\n    },\n    awsContext: true\n  }))\n")))}g.isMDXComponent=!0}}]);