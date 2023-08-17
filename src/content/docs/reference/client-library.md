---
title: Client library
description: WildFlow client library page.
---

:::caution[Work in progress]
wildflow API is in early development.
:::

You can install wildflow with `pip install wildflow` and then run the following python code:

```py
import wildflow

data = wildflow.dataset('gbif')
print(data.shape)
```
