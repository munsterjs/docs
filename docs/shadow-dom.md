---
id: shadow-dom.md
title: Shadow Dom
sidebar_label: Shadow dom
slug: /shadow-dom
---

Shadow dom is used to encapsulate the component to prevent scripts and styles outside the component from affecting it.

To use shadow dom in a component, we need to set the `$shadowMode` property of the component to 'open' or 'closed' and a shadow dom will be attached to the component.

Here's an example on how to use shadow dom in a component:

```html
<template>
    ...
</template>

<script>
    export default class SampleComponent {
        $shadowMode = 'open';
    }
</script>
```

## Slots

Slots let's us display content from the parent component into the child component's view.
Slots only work properly inside a shadow dom component.

Here's an example on how to use slots:

##### Parent component

```html
<template>
    <div>
        <app-child-component>
            <h1>I will be displayed on the child component slot.</h1>
        </app-child-component>
    </div>
</template>
```

##### Child component

```html
<template>
    <slot></slot>
</template>
```
In the example above,
the `<h1>I will be displayed on the child component slot.</h1>` element which is inside the `<app-child-component>...</app-child-component>`
component tags will be displayed in the child component's view where the `<slot></slot>` tag is located.

## Named slot

Named slot let's us display multiple elements from parent component to child component.

Here's an example on how to use named slots:

##### Parent component

```html
<template>
    <div>
        <app-child-component>
            <h1 slot="first-slot">First named slot.</h1>
            <h2 slot="second-slot">Second named slot.</h2>
        </app-child-component>
    </div>
</template>
```

##### Child component

```html
<template>
    <div>
        <div>
            <slot name="first-slot"></slot>
        </div>
        <slot name="second-slot"></slot>
    </div>
</template>
```

The `h1` element from parent component will be displayed in the child component where the slot with a name of `first-slot` is located and the `h2` element in the `second-slot`.




















