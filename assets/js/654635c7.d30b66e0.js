"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1338],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7462),a=n(7294),l=n(2389),o=n(9548),i=n(6010),u="tabItem_LplD";function d(e){var t,n,l,d=e.lazy,s=e.block,c=e.defaultValue,p=e.values,m=e.groupId,f=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=h[0])?void 0:l.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,o.UB)(),g=k.tabGroupChoices,N=k.setTabGroupChoices,w=(0,a.useState)(y),T=w[0],O=w[1],E=[],C=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=g[m];null!=x&&x!==T&&v.some((function(e){return e.value===x}))&&O(x)}var P=function(e){var t=e.currentTarget,n=E.indexOf(t),r=v[n].value;r!==T&&(C(t),O(r),null!=m&&N(m,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},f)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return E.push(e)},onKeyDown:j,onFocus:P,onClick:P},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),d?(0,a.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function s(e){var t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},3423:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=n(9877),i=n(8215),u=["components"],d={title:"http-router"},s=void 0,c={unversionedId:"routers/http-router",id:"routers/http-router",title:"http-router",description:"This handler can route to requests to one of a nested handler based on method and path of an http event from API Gateway (REST or HTTP) or Elastic Load Balancer.",source:"@site/docs/routers/http-router.md",sourceDirName:"routers",slug:"/routers/http-router",permalink:"/docs/routers/http-router",editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/routers/http-router.md",tags:[],version:"current",lastUpdatedAt:1654382941,formattedLastUpdatedAt:"6/4/2022",frontMatter:{title:"http-router"},sidebar:"tutorialSidebar",previous:{title:"Routers",permalink:"/docs/category/routers"},next:{title:"ws-router",permalink:"/docs/routers/ws-router"}},p=[{value:"Install",id:"install",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Sample usage",id:"sample-usage",children:[],level:2}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This handler can route to requests to one of a nested handler based on ",(0,l.kt)("inlineCode",{parentName:"p"},"method")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"path")," of an http event from API Gateway (REST or HTTP) or Elastic Load Balancer."),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("p",null,"To install this middleware you can use NPM:"),(0,l.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/http-router\n"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/http-router\n")))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"routes")," (array","[{method, path, handler}]",") (required): Array of route objects.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"method")," (string) (required): One of ",(0,l.kt)("inlineCode",{parentName:"li"},"GET"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"POST"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"PUT"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"PATCH"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"DELETE"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"OPTIONS")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"ANY")," that will match to any method passed in"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path")," (string) (required): AWS formatted path starting with ",(0,l.kt)("inlineCode",{parentName:"li"},"/"),". Variable: ",(0,l.kt)("inlineCode",{parentName:"li"},"/{id}/"),", Wildcard: ",(0,l.kt)("inlineCode",{parentName:"li"},"/{proxy+}")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"handler")," (function) (required): Any ",(0,l.kt)("inlineCode",{parentName:"li"},"handler(event, context)")," function")))),(0,l.kt)("p",null,"NOTES:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Errors should be handled as part of the router middleware stack ",(0,l.kt)("strong",{parentName:"li"},"or")," the lambdaHandler middleware stack. Handled errors in the later will trigger the ",(0,l.kt)("inlineCode",{parentName:"li"},"after")," middleware stack of the former."),(0,l.kt)("li",{parentName:"ul"},"Shared middlewares, connected to the router middleware stack, can only be run before the lambdaHandler middleware stack.")),(0,l.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport httpRouterHandler from '@middy/http-router'\nimport validatorMiddleware from '@middy/validator'\n\nconst getHandler = middy()\n  .use(validatorMiddleware({inputSchema: {...} }))\n  .handler((event, context) => {\n    return {\n      statusCode: 200,\n      body: '{...}'\n    }\n  })\n\nconst postHandler = middy()\n  .use(validatorMiddleware({inputSchema: {...} }))\n  .handler((event, context) => {\n    return {\n      statusCode: 200,\n      body: '{...}'\n    }\n  })\n\nconst routes = [\n  {\n    method: 'GET',\n    path: '/user/{id}',\n    handler: getHandler\n  },\n  {\n    method: 'POST',\n    path: '/user',\n    handler: postHandler\n  }\n]\n\nexport const handler = middy()\n  .use(httpHeaderNormalizer())\n  .handler(httpRouterHandler(routes))\n\n")))}f.isMDXComponent=!0}}]);