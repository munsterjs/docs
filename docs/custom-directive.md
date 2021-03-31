---
id: custom-directive.md
title: Custom Directive
sidebar_label: Custom directive
slug: /custom-directive
---

Custom directives are classes that manipulates an element and our munster application.
Directive is sometimes called as namespace in this framework since the syntax to write directives in view is `<namespace>:<name>={<value>}`.
The value is not required.

## Creating a custom directive

To create a directive. We just create a class that extends the `Directive` class provided by the framework.

```javascript
import { Directive } from 'munster';

export class HighlightDirective extends Directive {
}
```

The next step is to add a static property called namespace that has a value of an array of namespaces that we want to use in our view.

```javascript
import { Directive } from 'munster';

export class HighlightDirective extends Directive {
    static namespace = ['highlight:red', 'highlight:blue'];
}
```

The namespaces will call its respective class methods once used in a template.
The methods are named after its namespace with camel case format without the colon.

For the example above, `highlight:red` will call the method `highlightRed` with the parameters of the namespace name, the value caller, and the element.

Here's how the methods looks like:

```javascript
import { Directive } from 'munster';

export class HighlightDirective extends Directive {
    static namespace = ['highlight:red', 'highlight:blue'];

    highlightRed(name, valueCaller, element) {
        element.style.backgroundColor = 'red';
    }

    highlightBlue(name, valueCaller, element) {
        element.style.backgroundColor = 'blue';
    }
}
```

## Use the custom directive

We use the syntax `<namespace>:<name>={<value>}` to use a directive.

Using the example directive above we can change the background color of an element by applying a directive to it's opening tag.

```html
<template>
    <div>
        <p highlight:red>I am in a red line.</p>
        <p highlight:blue>I am in a blue line.</p>
    </div>
</template>
```

Please remember that directive value is optional.

## Value change watcher

To let our directive react when it's a value is changed we can use the `this.$watch` method of a directive.
The watch method has a parameters of value caller, element, and the callback which runs every time the value changes.

Here's an example on how to change the background color of an element based on the value passed to it namespace.

#### The directive
```javascript
import { Directive } from 'munster';

export class HighlightDirective extends Directive {
    static namespace = ['highlight:color'];

    highlightColor(name, valueCaller, element) {
        this.$watch(valueCaller, element, () => {
            element.style.backgroundColor = 'red';
        });
    }
}
```
#### The component
```html
<template>
    <p highlight:color={this.color}>Hello World!</p>
</template>
```

## Wildcard directive

We can also use a single directive method for all namespaces.
This is very useful if you do not know what is the name of your namespace.

Here's an example on how to use wildcard in a namespace

```javascript
import { Directive } from 'munster';

export class HighlightDirective extends Directive {
    static namespace = ['highlight:*'];

    highlightAll(name, valueCaller, element) {
        console.log(name);
        console.log(valueCaller());
        console.log(element);
    }
}
```

The `highlight:*` will call the method `highlightAll`.

In the component's view we can use any name we want and it will call the highlightAll method.

```html
<template>
    <p highlight:color="red" highlight:red highlight:blue>Hello World!</p>
</template>
```

## Accessing component from directive

Directives also has access to the component from its constructor.

Here's an example on how to access the component from a directive:

```javascript
import { Directive } from 'munster';

export class HighlightDirective extends Directive {
    constructor(component) {
        this.component = component;
    }
}
```
