(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(89)),c={id:"store.md",title:"Store",sidebar_label:"Store",slug:"/store"},i={unversionedId:"store.md",id:"store.md",isDocsHomePage:!1,title:"Store",description:"Store is a plugin and a state management built for munster framework.",source:"@site/docs\\store.md",slug:"/store",permalink:"/ts/docs/store",editUrl:"https://github.com/munsterjs/docs/blob/master/docs/store.md",version:"current",sidebar_label:"Store",sidebar:"someSidebar",previous:{title:"Router",permalink:"/ts/docs/router"},next:{title:"Installation",permalink:"/ts/docs/cli-installation"}},s=[{value:"Register the plugin",id:"register-the-plugin",children:[]},{value:"Initial state",id:"initial-state",children:[]},{value:"Setter",id:"setter",children:[]},{value:"Getter",id:"getter",children:[]},{value:"Watchers",id:"watchers",children:[]},{value:"Actions",id:"actions",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Store is a plugin and a state management built for munster framework.\nIt is accessible inside a component using ",Object(o.b)("inlineCode",{parentName:"p"},"this.$store"),"."),Object(o.b)("h2",{id:"register-the-plugin"},"Register the plugin"),Object(o.b)("p",null,"Store needs to be registered in a module before we can use it."),Object(o.b)("p",null,"Here's an example on how to register the store:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { Module, Store } from 'munster';\n\nexport class RootModule extends Module {\n    plugins = [\n        Store.config({})\n    ];\n}\n")),Object(o.b)("h2",{id:"initial-state"},"Initial state"),Object(o.b)("p",null,"Initial state of the store is the state that is passed to the store as the initial data."),Object(o.b)("p",null,"Here's an example on how to create an initial state:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { Module, Store } from 'munster';\n\nconst initialState = {\n    state: {\n        random: 0\n    }\n};\n\nexport class RootModule extends Module {\n    plugins = [\n        Store.config(initialState)\n    ];\n}\n")),Object(o.b)("h2",{id:"setter"},"Setter"),Object(o.b)("p",null,"Setting a state of the store is very straightforward."),Object(o.b)("p",null,"Here's an example on how to set a state inside a component:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"<template>\n    ...\n</template>\n\n<script>\n    export default class SampleComponent {\n        btnClick() {\n            this.$store.random = Math.random();\n        }\n    }\n<\/script>\n")),Object(o.b)("h2",{id:"getter"},"Getter"),Object(o.b)("p",null,"Accessing a value of a store, the developer needs to call the ",Object(o.b)("inlineCode",{parentName:"p"},"value")," in order to get the current value of the state."),Object(o.b)("p",null,"Here's an example on how to get a value of the store:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"<template>\n    ...\n</template>\n\n<script>\n    export default class SampleComponent {\n        $connected() {\n            this.random = this.$store.random.value;\n        }\n    }\n<\/script>\n")),Object(o.b)("h2",{id:"watchers"},"Watchers"),Object(o.b)("p",null,"Store also offers a way to watch for the changes of each item of the state."),Object(o.b)("p",null,"Here's how to watch the data changes for each item in the state:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"<template>\n    ...\n</template>\n\n<script>\n    export default class SampleComponent {\n        $connected() {\n            this.$store.random.watch(value => {\n                console.log(value);\n            });\n        }\n    }\n<\/script>\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Watchers are automatically un-watch when the component is destroyed."))),Object(o.b)("h2",{id:"actions"},"Actions"),Object(o.b)("p",null,"Actions can also be used to update the state."),Object(o.b)("h4",{id:"create-actions"},"Create actions"),Object(o.b)("p",null,"Here's an example on how to create an action:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { Module, Store } from 'munster';\n\nconst initialState = {\n    state: {\n        random: 0\n    },\n    actions: {\n        random: {\n            setRandom(current, payload) => {\n                return payload;\n            }\n        }\n    }\n};\n\nexport class RootModule extends Module {\n    plugins = [\n        Store.config(initialState)\n    ];\n}\n")),Object(o.b)("h4",{id:"dispatch-an-action"},"Dispatch an action"),Object(o.b)("p",null,"Here's an example on how to dispatch the created action above:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"<template>\n    ...\n</template>\n<script>\n    export default class SampleComponent {\n        btnClick() {\n            this.$store.random.dispatch('setRandom', Math.random());\n        }\n    }\n<\/script>\n")))}p.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);