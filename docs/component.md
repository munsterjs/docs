---
id: component.md
title: Component
sidebar_label: Component
slug: /component
---

Components are the most basic building block of an application.
A component is composed of view, logic and styles.
In this framework, you have an option to put the view, logic and styles in a single file or in a separate .html, .js and .css files.

:::note
If using a single file component. The component class must use `export default` in exporting the component.
:::

## Structure

### Single file component

Here's an example of a single file component.

```html
<template>
    ... <!-- view -->
</template>

<script>
    ... // logic
</script>

<style>
    ... /* style */
</style>
```

Inside the `<template> </template>` tag is the view of the component.
The template tag must have a single child only or it will not work property.

Below the template tags is the `<script> </script>` tag that contains the component's logic.
Here we can find the class that manipulates the view and the state of the component.
This tag is completely optional. We don't have to put a script tag if no logic is needed for the component.
The component class must use `export default` in exporting the component or it will not work.

```javascript
<script>
    export default class SampleComponent {
        ... // Logic
    }
</script>
```

The `<style> </style>` contains the styles of the component. Same as the script tag, this tag is also optional.

### Multiple file component

The view, logic and styles of a component can also be separated into different files.
View can have `.html`, logic can have `.js` and styles can have `.css` extension.

Here's an example on how to make a multiple file component:

#### View
```html
<!-- ./sample.component.html -->
<template>
    <h1>Sample Component</h1>
</template>
```

All html element in view must be inside the template tag and template tag must have a single child only.

#### Style
```css
/* ./sample.component.css */
h1 {
    color: red;
}
```

#### Logic
```javascript
// ./sample.component.js

import { Component } from 'munster';
import Template from './sample.component.html';
import Style from './sample.component.css';

@Component({
  template: Template,
  style: Style
})
export class SampleComponent {
    ...
}
```

Please take note of the `@Component` decorator. The template and style must be imported and passed to the @Component decorator.

## Component selector

Component selector is based on the class name of the component converted into kebab case with the prefix of its module(default prefix is `app`).
If the class name of a component is `SampleComponent` the selector will be `app-sample-component`.
We can mount the component to the dom using `<app-sample-component />` tag.


## Custom component selector

Selector can also be customized inside the component using the static property `$selector`.

Here's an example on how to add customize the component's selector:

```html
<template>
    ...
</template>

<script>
export default class SampleComponent {
    static $selector = 'custom-selector';
}
</script>
```

With this example we can use `<app-custom-selector />` to mount the component to the dom.

## Define component

Component must be defined in a module before we can use it.

Here's an example on how to define a component in a module:

```javascript
import { Module } from 'munster';
import SampleComponent from './sample.component.html';

export class RootModule extends Module {
  components = [
    SingleFileComponent
  ];
}
```

## Custom element define

Since a component is a web component.
It can also be defined using `customElements.define`.
However, it cannot use the plugins of a module.
It is recommended to define the component inside the `src/app/root.module.js` file.

Here's an example on how to define a web component:

```javascript
import SampleComponent from './sample.component.html';

customElements.define('sample-component', SampleComponent);
```

:::note
Component name must contain a hyphen(`-`) character or else it will be treated as normal html element.
:::

## Data binding

Data binding is a way to synchronize the data from logic to view and vise versa.

#### Attribute binding

Here is an example on how to bind a property from the logic into an attribute of view:

```html
<template>
    <h1 id={this.attr}></h1>
</template>

<script>
    export default class SampleComponent {
        attr = 'sample-attr';
    }
</script>
```

#### Text binding

Here is an example on how to display a text from logic to view:
```html
<template>
    <h1>{greeting}</h1>
</template>

<script>
    export default class SampleComponent {
        greeting = 'Hello World!';
    }
</script>
```

## Model binding

`view:model`

Model binding is a two way binding of data.
Every time the model is changed from the view, the value in logic will be updated and the same thing will happen in the view when the model is updated from the logic.

Here's an example on how to bind a model to the view:

```javascript
<template>
    <input view:model={this.sampleModel} type="text" />
</template>

<script>
    export default class SampleComponent {
        sampleModel = '';
    }
</script>
```

## Hooks

Hooks are functions that lets you run a block of codes when your component triggers a lifecycle event.

Below are the available lifecycle hooks:

| Hooks                 | |
| ---                   | --- |
| $connected()                                   | Fired when the component is added to the dom. |
| $disconnected()                                | Fired when the component is removed from the dom. |
| $attributeChanged(attrName, oldVal, newVal)    | Fired when a component attribute is changed. |
| $adopted()                                     | Fired when the component is moved from one HTML document to another one with the `adoptNode` method. |
| $onViewInit()                                  | Fired when a component starts building the element of view. |
| $afterViewInit()                               | Fired when a component is done building the element of view. |
| $onChange()                                    | Fired when a the change detection in component is triggered. |

## Child Component

Child component is a component rendered inside a component.

Here's an example on how to render a child component:

```javascript
<template>
    <div>
        <child-component></child-component>
    </div>
</template>

<script>
export default class SampleComponent {
    ...
}
</script>
```

:::note
Child component must be registered to the same module as parent component.
:::

## Attributes

Attributes are values passed down from parent component to child component.
Attribute can only hold a value and not objects or arrays.

Here's an example on how to pass a value from parent to child component:

##### Parent component
```javascript
<template>
    <child-component sample-attribute={this.number}></child-component>
</template>

<script>
export default class SampleComponent {
    number = 123;
}
</script>
```

##### Child component
```javascript
<template>
    ...
</template>

<script>
export default class ChildComponent {
    static get observedAttributes() {
        return ['sample-attribute'];
    }
    $attributeChanged(attrName, oldVal, newVal) {
        console.log(attrName, oldVal, newVal);
    }
}
</script>
```

:::note
`observedAttributes` is required if we want to watch for the changes of an attribute.
:::

## Props

Props are the properties passed down from parent to child.
Props is different from attributes since it can hold values, arrays or objects.

Since props is not directly available in web components we need to use a plugin to use this feature.

Please see the [props plugin document](/docs/component) on how to use props.

:::note
Passing data using attribute is recommended since attribute is using the implementation of web component attributes.
:::

<!--
## Custom Directives

Custom directive let's us create our own directive that can be used inside our views.
Directives are classes that inherits the `Directive` class of munster framework.

#### Create a directive

Here's an example on how to create a custom directive:

```javascript
// ./Color.directive.js
import { Directive } from 'munster';

export default class Color extends Directive {
    constructor(props) {
        // props argument in super is required if constructor is present
        super(props);
    }

    $onInit() {
        this.changeColor();
    }

    $onPropsUpdated() {
        this.changeColor();
    }

    changeColor() {
        this.element.style.color = this.$props.color;
    }
}
```

The sample code above is a directive to change the text color of an element.

:::note
If constructor is called, a `super` call expression with `props` argument is require.
:::

#### Register a directive

Directive needs to be registered in the module before we can use it.

Here's an example on how to register a directive:

```javascript
import { Module } from 'munster-modules';
import Color from './Color.directive';

const module = new Module({
    ...
});

module.directive(Color, {});
```

The `directive` method in module accepts two arguments.
First is the directive itself and second is an optional argument which is a data for the directive.
The data is accessible inside the constructor for the directive.

Here's an example on how to access the data inside the directive:

```javascript
export default class Color extends Directive {
    constructor(props) {
        super(props);
        this.directiveData = props.data.module._directivesData.color;
    }
}
```

#### Using the directive

Custom directive uses the namespace `directive:` or `d:` in view followed by the class name of the directive with the first letter in lower case.

Example: `SampleDirective` will be called as `d:sampleDirective`.


Here's an example on how to use the `Color` directive created above:

```javascript
<template>
    <div>
        <h1 d:color={this.color}>Change My Color</h1>
        <button on:click={this.changeColor}>Change Color<button>
    </div>
</template>

export default class App {
    constructor() {
        this.color = {
            color: 'green'
        };
    }

    changeColor() {
        this.color = {
            color: 'red'
        };
    }
}
```
-->
