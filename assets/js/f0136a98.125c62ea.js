"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1575],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,v=m["".concat(u,".").concat(c)]||m[c]||d[c]||i;return n?r.createElement(v,l(l({ref:t},p),{},{components:n})):r.createElement(v,l({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7462),a=n(7294),i=n(2389),l=n(9548),o=n(6010),u="tabItem_LplD";function s(e){var t,n,i,s=e.lazy,p=e.block,d=e.defaultValue,m=e.values,c=e.groupId,v=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.lx)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=f[0])?void 0:i.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),k=g.tabGroupChoices,w=g.setTabGroupChoices,N=(0,a.useState)(b),P=N[0],C=N[1],T=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var I=k[c];null!=I&&I!==P&&h.some((function(e){return e.value===I}))&&C(I)}var E=function(e){var t=e.currentTarget,n=T.indexOf(t),r=h[n].value;r!==P&&(O(t),C(r),null!=c&&w(c,r))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},v)},h.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return T.push(e)},onKeyDown:x,onFocus:E,onClick:E},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":P===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(f.filter((function(e){return e.props.value===P}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function p(e){var t=(0,i.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},1144:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return v}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=n(9877),o=n(8215),u=["components"],s={title:"http-event-normalizer"},p=void 0,d={unversionedId:"middlewares/http-event-normalizer",id:"middlewares/http-event-normalizer",title:"http-event-normalizer",description:"If you need to access the query string or path parameters in an API Gateway event you",source:"@site/docs/middlewares/http-event-normalizer.md",sourceDirName:"middlewares",slug:"/middlewares/http-event-normalizer",permalink:"/docs/middlewares/http-event-normalizer",editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/http-event-normalizer.md",tags:[],version:"current",lastUpdatedAt:1652530817,formattedLastUpdatedAt:"5/14/2022",frontMatter:{title:"http-event-normalizer"},sidebar:"tutorialSidebar",previous:{title:"http-error-handler",permalink:"/docs/middlewares/http-error-handler"},next:{title:"http-header-normalizer",permalink:"/docs/middlewares/http-header-normalizer"}},m=[{value:"Install",id:"install",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Sample usage",id:"sample-usage",children:[],level:2}],c={toc:m};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you need to access the query string or path parameters in an API Gateway event you\ncan do so by reading the attributes in ",(0,i.kt)("inlineCode",{parentName:"p"},"event.queryStringParameters"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"event.multiValueQueryStringParameters")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"event.pathParameters"),", for example: ",(0,i.kt)("inlineCode",{parentName:"p"},"event.pathParameters.userId"),". Unfortunately\nif there are no parameters for these parameter holders, the relevant key ",(0,i.kt)("inlineCode",{parentName:"p"},"queryStringParameters"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"multiValueQueryStringParameters")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"pathParameters")," won't be available in the object, causing an expression like ",(0,i.kt)("inlineCode",{parentName:"p"},"event.pathParameters.userId"),"\nto fail with the error: ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeError: Cannot read property 'userId' of undefined"),"."),(0,i.kt)("p",null,"A simple solution would be to add an ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statement to verify if the ",(0,i.kt)("inlineCode",{parentName:"p"},"pathParameters")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"queryStringParameters"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"multiValueQueryStringParameters"),")\nexists before accessing one of its parameters, but this approach is very verbose and error prone."),(0,i.kt)("p",null,"This middleware normalizes the API Gateway event, making sure that an object for\n",(0,i.kt)("inlineCode",{parentName:"p"},"queryStringParameters"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"multiValueQueryStringParameters")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pathParameters")," is always available (resulting in empty objects\nwhen no parameter is available), this way you don't have to worry about adding extra ",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\nstatements before trying to read a property and calling ",(0,i.kt)("inlineCode",{parentName:"p"},"event.pathParameters.userId")," will\nresult in ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," when no path parameter is available, but not in an error."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Important note : API Gateway HTTP API format 2.0 doesn't have ",(0,i.kt)("inlineCode",{parentName:"p"},"multiValueQueryStringParameters")," fields. Duplicate query strings are combined with commas and included in the ",(0,i.kt)("inlineCode",{parentName:"p"},"queryStringParameters")," field.")),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"To install this middleware you can use NPM:"),(0,i.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/http-event-normalizer\n"))),(0,i.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/http-event-normalizer\n")))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"payloadFormatVersion")," (",(0,i.kt)("inlineCode",{parentName:"li"},"number"),") (optional): Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"1 "),". Set it to ",(0,i.kt)("inlineCode",{parentName:"li"},"2")," to use API Gateway HTTP API v2.0 event payload (",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html"},"https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html"),").")),(0,i.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport httpEventNormalizer from '@middy/http-event-normalizer'\n\nconst handler = middy((event, context) => {\n  console.log(`Hello user ${event.pathParameters.userId}`) \n  // might produce `Hello user undefined`, but not an error\n  \n  return {}\n})\n\nhandler.use(httpEventNormalizer())\n")))}v.isMDXComponent=!0}}]);