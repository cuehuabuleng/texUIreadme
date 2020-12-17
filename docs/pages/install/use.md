---
title: 快速上手
date: 2020-12-8
---


## 引入tex-ui
你可以引入整个 tex-ui，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 tex-ui。

## 完整引入

**在main.js中写入以下内容：**

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import TexUI from 'tex-ui'
import 'tex-ui/dist/tex-ui.css'
const app = createApp(App)
app.config.productionTip = false


app.use(TexUI)
app.mount('#app')

```

*以上代码便完成了 tex-ui 的引入。需要注意的是，样式文件需要单独引入。*

## 按需引入

::: warning
本版本尚未实现此功能
:::
