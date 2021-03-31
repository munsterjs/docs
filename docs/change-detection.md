---
id: change-detection.md
title: Change detection
sidebar_label: Change detection
slug: /change-detection
---

Change detection in munster is when a value of a class property is changed.
Property that starts with `$` sign will not trigger the change detection function.
Setting multiple class properties in a loop will only trigger the change detection once.

:::note
Property that starts with `$` sign will not trigger the change detection function.
:::

## Manually trigger change detection

In some cases, you may need to manually trigger change detection of a component.

To manually call change detection we can call the `this.$apply()` method of a component.
Calling this method in a loop will only trigger the change detection once.
