(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var i=n(2),a=n(6),r=(n(0),n(89)),l={id:"directives.md",title:"Directives",sidebar_label:"Directives",slug:"/directives"},o={unversionedId:"directives.md",id:"directives.md",isDocsHomePage:!1,title:"Directives",description:"List Rendering",source:"@site/docs\\directives.md",slug:"/directives",permalink:"/docs/docs/directives",editUrl:"https://github.com/munsterjs/docs/blob/master/docs/directives.md",version:"current",sidebar_label:"Directives",sidebar:"someSidebar",previous:{title:"Change detection",permalink:"/docs/docs/change-detection"},next:{title:"Custom Directive",permalink:"/docs/docs/custom-directive"}},c=[{value:"List Rendering",id:"list-rendering",children:[]},{value:"List item name",id:"list-item-name",children:[]},{value:"List index",id:"list-index",children:[]},{value:"Conditional rendering",id:"conditional-rendering",children:[]},{value:"Reference an element",id:"reference-an-element",children:[]},{value:"Model binding",id:"model-binding",children:[]},{value:"Event binding",id:"event-binding",children:[]},{value:"Prevent default event",id:"prevent-default-event",children:[]}],p={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"list-rendering"},"List Rendering"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"view:for")," | ",Object(r.b)("inlineCode",{parentName:"p"},"v:for")),Object(r.b)("p",null,"List rendering directive allows developers to render a list of element based on the given array of data."),Object(r.b)("p",null,"Here's an example on how to use list rendering:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"<template>\n    <p view:for={this.array}>Hello World!</p>\n</template>\n<script>\n    export default class SampleComponent {\n        array = [1, 2, 3];\n    }\n<\/script>\n")),Object(r.b)("h2",{id:"list-item-name"},"List item name"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"view:for-item")," | ",Object(r.b)("inlineCode",{parentName:"p"},"v:for-item")),Object(r.b)("p",null,"It allows developers to set the variable name of the list item and display it in view.\nIf no list item directive is provided, it is ",Object(r.b)("inlineCode",{parentName:"p"},"$item")," by default."),Object(r.b)("p",null,"Here's an example on how to use list item directive:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"<template>\n    <p view:for={this.array} view:for-item=\"listItem\">{listItem}</p>\n</template>\n\n<script>\n    export default class SampleComponent {\n        array = ['foo', 'bar', 'bazz'];\n    }\n<\/script>\n")),Object(r.b)("p",null,"The example code above will generate a list of elements that looks like the following."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-html"}),"<p>foo</p>\n<p>bar</p>\n<p>bazz</p>\n")),Object(r.b)("h2",{id:"list-index"},"List index"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"view:for-index")," | ",Object(r.b)("inlineCode",{parentName:"p"},"v:for-index")),Object(r.b)("p",null,"It allows developers to set the variable name of the list index.\nIf no list index directive is provided, it is ",Object(r.b)("inlineCode",{parentName:"p"},"$index")," by default."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"<template>\n    <p view:for={this.array} view:for-index=\"listIndex\">{listIndex}</p>\n</template>\n\n<script>\n    export default class SampleComponent {\n        array = ['foo', 'bar', 'bazz'];\n    }\n<\/script>\n")),Object(r.b)("p",null,"The example code above will generate list of element that looks like the following."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-html"}),"<p>0</p>\n<p>1</p>\n<p>2</p>\n")),Object(r.b)("h2",{id:"conditional-rendering"},"Conditional rendering"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"view:if")," | ",Object(r.b)("inlineCode",{parentName:"p"},"v:if")),Object(r.b)("p",null,"Conditional rendering is used to conditionally render an element in the dom.\nIt uses the ",Object(r.b)("inlineCode",{parentName:"p"},"view:if")," directive which removes an element from the dom if the value is a falsy and append the element if otherwise."),Object(r.b)("p",null,"Here's an example on how to use conditional rendering:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"<template>\n    <h1 view:if={this.toggle}></h1>\n</template>\n\n<script>\n    export default class SampleComponent {\n        toggle = true;\n    }\n<\/script>\n")),Object(r.b)("h2",{id:"reference-an-element"},"Reference an element"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"view:ref")," | ",Object(r.b)("inlineCode",{parentName:"p"},"v:ref")),Object(r.b)("p",null,"This directive is used to create a reference of an element to the property of the logic."),Object(r.b)("p",null,"Here's an example on how to use this directive:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"<template>\n    <p view:ref={this.reference}>Hello World</p>\n</template>\n\n<script>\n    export default class SampleComponent {\n        this.reference = null;\n        $afterViewInit() {\n            console.log(this.reference);\n        }\n    }\n<\/script>\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"this.reference")," property should now contain a reference to the ",Object(r.b)("inlineCode",{parentName:"p"},"p")," element in the view when ",Object(r.b)("inlineCode",{parentName:"p"},"$afterViewInit")," hook runs."),Object(r.b)("h2",{id:"model-binding"},"Model binding"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"view:model")),Object(r.b)("p",null,"Model binding is a two way binding of data.\nEvery time the model is changed from the view, the value in logic will be updated and the same thing will happen in the view when the model is updated from the logic."),Object(r.b)("p",null,"Here's an example on how to bind a model to the view:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"<template>\n    <input view:model={this.sampleModel} type=\"text\" />\n</template>\n\n<script>\n    export default class SampleComponent {\n        sampleModel = '';\n    }\n<\/script>\n")),Object(r.b)("h2",{id:"event-binding"},"Event binding"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"on:<event name\\>")),Object(r.b)("p",null,"Event binding is a way to attach an event into an element."),Object(r.b)("p",null,"Here's an example on how to attach a click event to a button:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"<template>\n    <button on:click={this.clickMe}>Click Me</button>\n</template>\n\n<script>\n    export default class SampleComponent {\n        clickMe() {\n            console.log('I was clicked');\n        }\n    }\n<\/script>\n")),Object(r.b)("p",null,"Here is a list of available events from ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.w3schools.com/jsref/dom_obj_event.asp"}),"w3schools.com"),"."),Object(r.b)("h2",{id:"prevent-default-event"},"Prevent default event"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"on-prevent:<event name\\>")),Object(r.b)("p",null,"This namespace is the same as ",Object(r.b)("inlineCode",{parentName:"p"},"on")," namespace but it stops the default action of an element from happening using ",Object(r.b)("inlineCode",{parentName:"p"},"event.preventDefault()"),"."))}s.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=i,u=b["".concat(l,".").concat(m)]||b[m]||d[m]||r;return n?a.a.createElement(u,o(o({ref:t},p),{},{components:n})):a.a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);