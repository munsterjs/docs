(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return m}));var a=n(2),r=n(6),i=(n(0),n(89)),c={id:"custom-directive.md",title:"Custom Directive",sidebar_label:"Custom directive",slug:"/custom-directive"},l={unversionedId:"custom-directive.md",id:"custom-directive.md",isDocsHomePage:!1,title:"Custom Directive",description:"Custom directives are classes that manipulates an element and our munster application.",source:"@site/docs\\custom-directive.md",slug:"/custom-directive",permalink:"/docs/docs/custom-directive",editUrl:"https://github.com/munsterjs/docs/blob/master/docs/custom-directive.md",version:"current",sidebar_label:"Custom directive",sidebar:"someSidebar",previous:{title:"Directives",permalink:"/docs/docs/directives"},next:{title:"Navigate",permalink:"/docs/docs/navigate"}},o=[{value:"Creating a custom directive",id:"creating-a-custom-directive",children:[]},{value:"Use the custom directive",id:"use-the-custom-directive",children:[]},{value:"Value change watcher",id:"value-change-watcher",children:[]},{value:"Wildcard directive",id:"wildcard-directive",children:[]},{value:"Accessing component from directive",id:"accessing-component-from-directive",children:[]}],s={rightToc:o};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Custom directives are classes that manipulates an element and our munster application.\nDirective is sometimes called as namespace in this framework since the syntax to write directives in view is ",Object(i.b)("inlineCode",{parentName:"p"},"<namespace>:<name>={<value>}"),".\nThe value is not required."),Object(i.b)("h2",{id:"creating-a-custom-directive"},"Creating a custom directive"),Object(i.b)("p",null,"To create a directive. We just create a class that extends the ",Object(i.b)("inlineCode",{parentName:"p"},"Directive")," class provided by the framework."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { Directive } from 'munster';\n\nexport class HighlightDirective extends Directive {\n}\n")),Object(i.b)("p",null,"The next step is to add a static property called namespace that has a value of an array of namespaces that we want to use in our view."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { Directive } from 'munster';\n\nexport class HighlightDirective extends Directive {\n    static namespace = ['highlight:red', 'highlight:blue'];\n}\n")),Object(i.b)("p",null,"The namespaces will call its respective class methods once used in a template.\nThe methods are named after its namespace with camel case format without the colon."),Object(i.b)("p",null,"For the example above, ",Object(i.b)("inlineCode",{parentName:"p"},"highlight:red")," will call the method ",Object(i.b)("inlineCode",{parentName:"p"},"highlightRed")," with the parameters of the namespace name, the value caller, and the element."),Object(i.b)("p",null,"Here's how the methods looks like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { Directive } from 'munster';\n\nexport class HighlightDirective extends Directive {\n    static namespace = ['highlight:red', 'highlight:blue'];\n\n    highlightRed(name, valueCaller, element) {\n        element.style.backgroundColor = 'red';\n    }\n\n    highlightBlue(name, valueCaller, element) {\n        element.style.backgroundColor = 'blue';\n    }\n}\n")),Object(i.b)("h2",{id:"use-the-custom-directive"},"Use the custom directive"),Object(i.b)("p",null,"We use the syntax ",Object(i.b)("inlineCode",{parentName:"p"},"<namespace>:<name>={<value>}")," to use a directive."),Object(i.b)("p",null,"Using the example directive above we can change the background color of an element by applying a directive to it's opening tag."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<template>\n    <div>\n        <p highlight:red>I am in a red line.</p>\n        <p highlight:blue>I am in a blue line.</p>\n    </div>\n</template>\n")),Object(i.b)("p",null,"Please remember that directive value is optional."),Object(i.b)("h2",{id:"value-change-watcher"},"Value change watcher"),Object(i.b)("p",null,"To let our directive react when it's a value is changed we can use the ",Object(i.b)("inlineCode",{parentName:"p"},"this.$watch")," method of a directive.\nThe watch method has a parameters of value caller, element, and the callback which runs every time the value changes."),Object(i.b)("p",null,"Here's an example on how to change the background color of an element based on the value passed to it namespace."),Object(i.b)("h4",{id:"the-directive"},"The directive"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { Directive } from 'munster';\n\nexport class HighlightDirective extends Directive {\n    static namespace = ['highlight:color'];\n\n    highlightColor(name, valueCaller, element) {\n        this.$watch(valueCaller, element, () => {\n            element.style.backgroundColor = 'red';\n        });\n    }\n}\n")),Object(i.b)("h4",{id:"the-component"},"The component"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<template>\n    <p highlight:color={this.color}>Hello World!</p>\n</template>\n")),Object(i.b)("h2",{id:"wildcard-directive"},"Wildcard directive"),Object(i.b)("p",null,"We can also use a single directive method for all namespaces.\nThis is very useful if you do not know what is the name of your namespace."),Object(i.b)("p",null,"Here's an example on how to use wildcard in a namespace"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { Directive } from 'munster';\n\nexport class HighlightDirective extends Directive {\n    static namespace = ['highlight:*'];\n\n    highlightAll(name, valueCaller, element) {\n        console.log(name);\n        console.log(valueCaller());\n        console.log(element);\n    }\n}\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"highlight:*")," will call the method ",Object(i.b)("inlineCode",{parentName:"p"},"highlightAll"),"."),Object(i.b)("p",null,"In the component's view we can use any name we want and it will call the highlightAll method."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<template>\n    <p highlight:color="red" highlight:red highlight:blue>Hello World!</p>\n</template>\n')),Object(i.b)("h2",{id:"accessing-component-from-directive"},"Accessing component from directive"),Object(i.b)("p",null,"Directives also has access to the component from its constructor."),Object(i.b)("p",null,"Here's an example on how to access the component from a directive:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { Directive } from 'munster';\n\nexport class HighlightDirective extends Directive {\n    constructor(component) {\n        this.component = component;\n    }\n}\n")))}m.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=m(n),h=a,d=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return n?r.a.createElement(d,l(l({ref:t},s),{},{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<i;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);