---
id: munster-tester.md
title: Munster tester
sidebar_label: Munster tester
slug: /munster-tester
---

Munster tester is a tool to make your testing easy.

## Installation

Here's the command on how to add the munster-tester library in your project:

```bash
npm install --save-dev munster-tester
```

## Define

`import { define } from 'munster-tester';`

Define is a function used to define your web component until the `connectedCallback()` is triggered.

Here's an example on how to use the define function:

```javascript
import { define } from 'munster-tester';
import Root from '../src/Root';

describe('Test Root.js component', function() {
  it('should rendered the view correctly', function() {
    const component = define(Root);
    ...
  });
});
```

## Extend method

`import { extendMethod } from 'munster-tester';`

This function is used to extend the functionality of a method.
This is useful when you want to run functions or override variable values in this method before the change detection is fired.

Extend method accepts four parameters, the component, method, pre and post.

* `component` : the component instance
* `method` : string, the method name
* `pre` : callback, called before the original method is called
* `post` : callback, called after the original method is called

Here's an example on how to use the extendMethod function:

```javascript
import { define, extendMethod } from 'munster-tester';
import Root from '../src/Root';

describe('Test Root.js component', function() {
  it('should rendered the view correctly', async function(done) {
    const component = define(Root);
    component.someValue = 'initial value';
    extendMethod(component, 'btnClick', pre = null, function() {
        component.someValue = 'new value';
    });
    extendMethod(component, 'afterChange', pre = null, function() {
        expect(component.someValue).toEqual('new value');
        done();
    });
    component.querySelector('button').click();
  });
});
```

## Typing

`import { typing } from 'munster-tester';`

This function is used to mimic the typing behavior of an input.

This function accepts five parameters, the element, text, endCallback, perInputCallback and delay.

* `element` : HTMLElement, the input element
* `text` : string, the string to be typed
* `endCallback` : Function, called after the typing is done
* `perInputCallback` : Function, called after every input
* `delay` : number, the delay before the next input

Here's an example of how to use the typing function:

```javascript
import { define, typing, extendMethod } from 'munster-tester';
import Root from '../src/Root';

describe('Test Root.js component', function() {
  it('should update model value in logic if changed in view', async function(done) {
    const component = define(Root);
    extendMethod(component, 'afterChange', null, function() {
      expect(component.modelBinding).toEqual(component.modelInput.value)
      done();
    });
    typing(component.modelInput, 'new value');
  })
});
```

## Action

`import { action } from 'munster-tester';`

This is just to add a delay before making actions in a component.

Here's an example on how to use the action function:

```javascript
import { define, extendMethod, action } from 'munster-tester';
import Root from '../src/Root';

describe('Test Root.js component', function() {
  it('should rendered the view correctly', async function(done) {
    const component = define(Root);
    ...
    action(function() {
        component.querySelector('button').click();
    });
  });
});
```
