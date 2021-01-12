(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(94)),o="title v0.2.x to v0.3.x",c={unversionedId:"migration-guides/v2.x-to-v3.x",id:"migration-guides/v2.x-to-v3.x",isDocsHomePage:!1,title:"v2.x-to-v3.x",description:"Parsing Changed",source:"@site/docs/migration-guides/v2.x-to-v3.x.md",slug:"/migration-guides/v2.x-to-v3.x",permalink:"/fast-csv/docs/migration-guides/v2.x-to-v3.x",editUrl:"https://github.com/C2FO/fast-csv/edit/master/documentation/docs/migration-guides/v2.x-to-v3.x.md",version:"current",sidebar:"docs",previous:{title:"Examples",permalink:"/fast-csv/docs/formatting/examples"}},l=[{value:"Parsing Changed",id:"parsing-changed",children:[]},{value:"Formatting Changes",id:"formatting-changes",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"parsing-changed"},"Parsing Changed"),Object(i.b)("h4",{id:"signature-changes"},"Signature changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Calling the library as a function has been removed in favor of ",Object(i.b)("inlineCode",{parentName:"li"},"csv.parse"),".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"csv()")," change to ",Object(i.b)("inlineCode",{parentName:"li"},"csv.parse()")))),Object(i.b)("li",{parentName:"ul"},"Deprecated ",Object(i.b)("inlineCode",{parentName:"li"},"fromString")," in favor of ",Object(i.b)("inlineCode",{parentName:"li"},"parseString"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"csv.fromString()")," change to ",Object(i.b)("inlineCode",{parentName:"li"},"csv.parseString()")))),Object(i.b)("li",{parentName:"ul"},"Deprecated ",Object(i.b)("inlineCode",{parentName:"li"},"fromStream")," in favor of ",Object(i.b)("inlineCode",{parentName:"li"},"parseStream"),"a",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"csv.fromStream()")," change to ",Object(i.b)("inlineCode",{parentName:"li"},"csv.parseStream()")))),Object(i.b)("li",{parentName:"ul"},"Deprecated",Object(i.b)("inlineCode",{parentName:"li"},"fromPath")," in favor of ",Object(i.b)("inlineCode",{parentName:"li"},"parseFile"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"csv.fromPath()")," change to ",Object(i.b)("inlineCode",{parentName:"li"},"csv.parseFile()"))))),Object(i.b)("h3",{id:"formatting-changes"},"Formatting Changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"csv.createWriteStream")," has been removed in favor of ",Object(i.b)("inlineCode",{parentName:"li"},"csv.format")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"csv.writeToBuffer")," and ",Object(i.b)("inlineCode",{parentName:"li"},"csv.writeToString")," no longer accepts a ",Object(i.b)("inlineCode",{parentName:"li"},"callback"),", instead they return a promise ",Object(i.b)("inlineCode",{parentName:"li"},"Promise"))))}p.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,d=s["".concat(o,".").concat(u)]||s[u]||m[u]||i;return n?a.a.createElement(d,c(c({ref:t},b),{},{components:n})):a.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);