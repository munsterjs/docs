(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(89)),i={id:"testing.md",title:"Testing",sidebar_label:"Testing",slug:"/testing"},c={unversionedId:"testing.md",id:"testing.md",isDocsHomePage:!1,title:"Testing",description:"Testing in munster uses karma and munster-tester package.",source:"@site/docs\\testing.md",slug:"/testing",permalink:"/docs/testing",editUrl:"https://github.com/munsterjs/docs/blob/master/docs/testing.md",version:"current",sidebar_label:"Testing"},s=[{value:"Setup testing environment",id:"setup-testing-environment",children:[]},{value:"Install dependencies",id:"install-dependencies",children:[]},{value:"Initialize karma",id:"initialize-karma",children:[]},{value:"Running the test",id:"running-the-test",children:[]},{value:"Creating a test files",id:"creating-a-test-files",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Testing in munster uses ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://karma-runner.github.io/latest/index.html"}),"karma")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://npmjs.com"}),"munster-tester")," package."),Object(o.b)("h2",{id:"setup-testing-environment"},"Setup testing environment"),Object(o.b)("p",null,"Testing environment can be setup using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/cli-installation"}),"munster-cli")," or manually installing all the dependencies.\nThe cli allows the developer to setup the testing environment in just one line command."),Object(o.b)("p",null,"To install all the dependencies just follow the instructions below:"),Object(o.b)("p",null,"The instructions below is to setup ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://karma-runner.github.io/latest/index.html"}),"karma")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://jasmine.github.io"}),"jasmine")," for the testing environment."),Object(o.b)("h2",{id:"install-dependencies"},"Install dependencies"),Object(o.b)("p",null,"Install the following dependencies in your current project as a development dependencies using the following command."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save-dev munster-tester karma karma-jasmine karma-parcel karma-babel-preprocessor karma-chrome-launcher\n")),Object(o.b)("h2",{id:"initialize-karma"},"Initialize karma"),Object(o.b)("p",null,"After installing the dependencies, generate a karma config using the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npx karma init\n")),Object(o.b)("p",null,"Choose your preferred config."),Object(o.b)("p",null,"Open the ",Object(o.b)("inlineCode",{parentName:"p"},"karma.config.js")," file and add the following configs:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"...\n    plugins: [\n        require('karma-jasmine'),\n        require('karma-parcel'),\n        require('karma-chrome-launcher'),\n        require('karma-babel-preprocessor')\n    ],\n    frameworks: ['jasmine', 'parcel'],\n    files: [\n      {\n        pattern: \"test/**/*.js\",\n        watched: false,\n        included: false\n      }\n    ],\n    preprocessors: {\n      'test/**/*.js': ['parcel']\n    },\n    browsers: ['ChromeHeadless'],\n    singleRun: true,\n...\n")),Object(o.b)("h2",{id:"running-the-test"},"Running the test"),Object(o.b)("p",null,"To run the test just run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npx karma start\n")),Object(o.b)("p",null,"or create a script command in your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file like the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'    "scripts": {\n        ...\n        "test": "karma start"\n    },\n')),Object(o.b)("p",null,"Now we can run the following command to start testing the application"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm run test\n")),Object(o.b)("h2",{id:"creating-a-test-files"},"Creating a test files"),Object(o.b)("p",null,"Based on the config above, our test must be located inside the ",Object(o.b)("inlineCode",{parentName:"p"},"test")," folder at the root directory of our munster project."),Object(o.b)("p",null,"Let's create a test for our ",Object(o.b)("inlineCode",{parentName:"p"},"src/Root.js")," component."),Object(o.b)("p",null,"Steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a file ",Object(o.b)("inlineCode",{parentName:"li"},"test/Root.spec.js"),"."),Object(o.b)("li",{parentName:"ol"},"Open and import your root component inside the test files.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import Root from '../src/Root';\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Describe the purpose of this test.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import Root from '../src/Root';\n\ndescribe('Test Root.js component', function() {\n    ...\n});\n")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Create our first test case.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import Root from '../src/Root';\nimport { define } from 'munster-tester';\n\ndescribe('Test Root.js component', function() {\n  it('should rendered the view correctly', function() {\n    const component = define(Root);\n    expect(component.innerHTML).toContain('Root Component');\n  });\n});\n")),Object(o.b)("p",null,"Additional information about ",Object(o.b)("inlineCode",{parentName:"p"},"munster-tester")," package in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/munster-tester"}),"here"),"."))}p.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);