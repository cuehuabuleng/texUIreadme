---
title: button 按钮
date: 2020-12-8
---

<script>
export default {
  data () {
    return {
      bthtml: `<template>
    <div>
       <tex-button>默认按钮</tex-button>
       <tex-button type="primary">主要按钮</tex-button>
       <tex-button type="success">成功按钮</tex-button>
       <tex-button type="info">信息按钮</tex-button>
       <tex-button type="warning">警告按钮</tex-button>
       <tex-button type="danger">危险按钮</tex-button>
     </div>
</template>`.replace(/^s*/gm, '').trim()
    }
  },
  methods: {
    click () {
      this.value = '点击过'
    }
  }
}
</script>

# Button 按钮
常用的操作按钮
<br/>

## 基础用法
基础的按钮用法。


<template>
  <demo-block class="demo-box">
    <div class="source" slot="source">
    <!-- 展示的组件内容 -->
      <btn />
    </div>
    <div class="highlight" slot="highlight" >
      desciption
      <pre v-highlight>
              <code class="language-html">{{bthtml}}</code>
          </pre>
    </div>
  </demo-block>
</template>




<!-- https://www.jb51.net/article/156264.htm -->