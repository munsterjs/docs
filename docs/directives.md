---
id: directives.md
title: Directives
sidebar_label: Directives
slug: /directives
---

## List Rendering

`view:for` | `v:for`

List rendering directive allows developers to render a list of element based on the given array of data.

Here's an example on how to use list rendering:

```javascript
<template>
    <p view:for={this.array}>Hello World!</p>
</template>
<script>
    export default class SampleComponent {
        array = [1, 2, 3];
    }
</script>
```

## List item name

`view:for-item` | `v:for-item`

It allows developers to set the variable name of the list item and display it in view.
If no list item directive is provided, it is `$item` by default.

Here's an example on how to use list item directive:

```javascript
<template>
    <p view:for={this.array} view:for-item="listItem">{listItem}</p>
</template>

<script>
    export default class SampleComponent {
        array = ['foo', 'bar', 'bazz'];
    }
</script>
```

The example code above will generate a list of elements that looks like the following.

```html
<p>foo</p>
<p>bar</p>
<p>bazz</p>
```

## List index

`view:for-index` | `v:for-index`

It allows developers to set the variable name of the list index.
If no list index directive is provided, it is `$index` by default.

```javascript
<template>
    <p view:for={this.array} view:for-index="listIndex">{listIndex}</p>
</template>

<script>
    export default class SampleComponent {
        array = ['foo', 'bar', 'bazz'];
    }
</script>
```

The example code above will generate list of element that looks like the following.

```html
<p>0</p>
<p>1</p>
<p>2</p>
```

## Conditional rendering

`view:if` | `v:if`

Conditional rendering is used to conditionally render an element in the dom.
It uses the `view:if` directive which removes an element from the dom if the value is a falsy and append the element if otherwise.

Here's an example on how to use conditional rendering:

```javascript
<template>
    <h1 view:if={this.toggle}></h1>
</template>

<script>
    export default class SampleComponent {
        toggle = true;
    }
</script>
```

## Reference an element

`view:ref` | `v:ref`

This directive is used to create a reference of an element to the property of the logic.

Here's an example on how to use this directive:

```javascript
<template>
    <p view:ref={this.reference}>Hello World</p>
</template>

<script>
    export default class SampleComponent {
        this.reference = null;
        $afterViewInit() {
            console.log(this.reference);
        }
    }
</script>
```

The `this.reference` property should now contain a reference to the `p` element in the view when `$afterViewInit` hook runs.


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

## Event binding

`on:<event name\>`

Event binding is a way to attach an event into an element.

Here's an example on how to attach a click event to a button:

```javascript
<template>
    <button on:click={this.clickMe}>Click Me</button>
</template>

<script>
    export default class SampleComponent {
        clickMe() {
            console.log('I was clicked');
        }
    }
</script>
```

Here is a list of available events from [w3schools.com](https://www.w3schools.com/jsref/dom_obj_event.asp).

## Prevent default event

`on-prevent:<event name\>`

This namespace is the same as `on` namespace but it stops the default action of an element from happening using `event.preventDefault()`.
