---
id: module.md
title: Module
sidebar_label: Module
slug: /module
---

Every component of an application is a part of a module.
This is a way to group components, plugins and other part of application that are related to each other.

## Module root component

Every module has a root component which will be displayed when a module is mounted to the dom tree.

```javascript
import { Module } from 'munster';
import { RootComponent } from './root.component';

export class RootModule extends Module {
    rootComponent = RootComponent;
}
```

In this example, `RootComponent` is the root component.

## Mount to dom tree

Module must be mounted to the dom tee first before we can interact with its components.

```javascript
import { Module } from 'munster';
import { RootComponent } from './root.component';

export class RootModule extends Module {
    rootComponent = RootComponent;
}
```

In the example code above, the selector of the root component is `root-component`.
The tag name when mounting the component will be `<app-root-component></app-root-component>`.

## Module prefix

The prefix of a module will be the prefix of the component selector when mounting a component to dom tree.

```javascript
import { Module } from 'munster';
import { RootComponent } from './root.component';

export class RootModule extends Module {
    rootComponent = RootComponent;
    prefix = 'web';
}
```
In the example code above, the selector of the root component is `root-component` and the prefix of the module is `web`.
The tag name when mounting the component will be `<web-root-component></web-root-component>`.
The default prefix is of a module is `app`.

## Include a plugin

Plugin must be included in the plugins array of a module before the components inside the module can use it.

Here's an example on how to use a plugin:

```javascript
import { Module, Store } from 'munster';
import { RootComponent } from './root.component';

export class RootModule extends Module {
    rootComponent = RootComponent;
    plugins = [
        Store.config({})
    ];
}
```

In the example above, we included the `Store` plugin to our module.
Please see [Store](/docs/store) for more information about the store plugin.

## Declare components

A component must be declared in a module before it can be used inside our application.

Here's an example on how to declare a component:

```javascript
import { Module, Store } from 'munster';
import { RootComponent } from './root.component';
import { SampleComponent } from './sample.component';

export class RootModule extends Module {
    rootComponent = RootComponent;
    components = [
        SampleComponent
    ];
}
```

To declare a component, we just pass the component to the components array in a module.

## Import submodules

A module can also have a submodule.
Submodule is a way to create application with modular architecture.
It is one way to group and organize your code to make it more reusable and easy to maintain.

```javascript
import { Module, Store } from 'munster';
import { RootComponent } from './root.component';
import { SampleModule } from './sample.module';

export class RootModule extends Module {
    rootComponent = RootComponent;
    modules = [
        SampleModule
    ];
}
```

To declare a module, we just pass the module to the modules array in a module.
Components from submodules are automatically available in components registered in the parent module.

## Export plugins

Plugins in submodule needs to be exported from submodule if we want it to be available in components registered in the parent module.

Here's an example on how to export a plugin:

```javascript
import { Module } from 'munster';
import { SamplePlugin } from './sample.plugin';

export class RootModule extends Module {
    exportPlugins = [
        SamplePlugin
    ];
}
```