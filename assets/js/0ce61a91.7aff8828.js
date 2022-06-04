"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6540],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return b}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(t),b=a,m=p["".concat(c,".").concat(b)]||p[b]||u[b]||l;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9398:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),i=["components"],o={title:"Bundling Lambda packages",sidebar_position:5},c=void 0,s={unversionedId:"best-practices/bundling",id:"best-practices/bundling",title:"Bundling Lambda packages",description:"Bundlers",source:"@site/docs/best-practices/05-bundling.md",sourceDirName:"best-practices",slug:"/best-practices/bundling",permalink:"/docs/best-practices/bundling",editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/best-practices/05-bundling.md",tags:[],version:"current",lastUpdatedAt:1654382941,formattedLastUpdatedAt:"6/4/2022",sidebarPosition:5,frontMatter:{title:"Bundling Lambda packages",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Internal Context",permalink:"/docs/best-practices/internal-context"},next:{title:"Small node_modules",permalink:"/docs/best-practices/small-node-modules"}},d=[{value:"Bundlers",id:"bundlers",children:[{value:"babel",id:"babel",children:[{value:"babel.config.json",id:"babelconfigjson",children:[],level:4}],level:3},{value:"esbuild",id:"esbuild",children:[],level:3},{value:"swc",id:"swc",children:[{value:"swc.config.json",id:"swcconfigjson",children:[],level:4}],level:3},{value:"webpack",id:"webpack",children:[{value:"webpack.config.js",id:"webpackconfigjs",children:[],level:4}],level:3}],level:2},{value:"Exclude <code>aws-sdk</code>",id:"exclude-aws-sdk",children:[],level:2}],u={toc:d};function p(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"bundlers"},"Bundlers"),(0,l.kt)("h3",{id:"babel"},"babel"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm i -D @babel/cli @babel/core @babel/preset-env\nnode_modules/.bin/babel index.js --out-file index.babel.cjs\n")),(0,l.kt)("h4",{id:"babelconfigjson"},"babel.config.json"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "presets": [\n    [\n      "@babel/preset-env",\n      {\n        "targets": {\n          "node": "14"\n        }\n      }\n    ]\n  ]\n}\n')),(0,l.kt)("h3",{id:"esbuild"},"esbuild"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm i -D esbuild\nnode_modules/.bin/esbuild --platform=node --target=es2020 index.js --bundle --outfile=index.esbuild.cjs\n")),(0,l.kt)("h3",{id:"swc"},"swc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm i -D @swc/cli @swc/core\nnode_modules/.bin/swc --config-file swc.config.json index.js --out-file index.swc.cjs\n")),(0,l.kt)("h4",{id:"swcconfigjson"},"swc.config.json"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsc": {\n    "parser": {\n      "syntax": "ecmascript"\n    },\n    "target": "es2020"\n  },\n  "module": {\n    "type": "commonjs"\n  }\n}\n')),(0,l.kt)("h3",{id:"webpack"},"webpack"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm i -D webpack-cli webpack\nnode_modules/.bin/webpack --config webpack.config.js && node index.webpack.cjs\n")),(0,l.kt)("h4",{id:"webpackconfigjs"},"webpack.config.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  "mode": "production",\n  "entry": "./index.js",\n  "output": {\n    "filename": "index.webpack.cjs",\n    "path": __dirname\n  }\n}\n')),(0,l.kt)("h2",{id:"exclude-aws-sdk"},"Exclude ",(0,l.kt)("inlineCode",{parentName:"h2"},"aws-sdk")),(0,l.kt)("p",null,"Lambda runtime already includes ",(0,l.kt)("inlineCode",{parentName:"p"},"aws-sdk")," by default and as such you normally don't need to package it in your function.\nIf you are using Webpack and Serverless Framework to package your code you'd want to add ",(0,l.kt)("inlineCode",{parentName:"p"},"aws-sdk")," to Webpack ",(0,l.kt)("inlineCode",{parentName:"p"},"externals")," and to ",(0,l.kt)("inlineCode",{parentName:"p"},"forceExclude")," of Serverless Framework Webpack configuration."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Tell Webpack not to bundle ",(0,l.kt)("inlineCode",{parentName:"li"},"aws-sdk")," into the output (e.g. handler.js):")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'# webpack.config.js\nvar nodeExternals = require("webpack-node-externals");\nmodule.exports = {\n  externals: ["aws-sdk/clients/***.js"],\n};\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Tell Serverless Framework not to include ",(0,l.kt)("inlineCode",{parentName:"li"},"aws-sdk")," located in ",(0,l.kt)("inlineCode",{parentName:"li"},"node_modules")," (because it was not bundled by Webpack):")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'# serverless.yml\ncustom:\n  webpack: # for webpack\n    includeModules:\n      forceExclude:\n        - aws-sdk/clients/*.js\n  esbuild: # for esbuild\n    exclude: ["aws-sdk/clients/__client_name__.js"]\n')))}p.isMDXComponent=!0}}]);