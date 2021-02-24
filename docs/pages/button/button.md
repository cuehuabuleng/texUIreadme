---
title: button 按钮
date: 2020-12-8
---

<style>
.row{
  margin-bottom: 15px;
}
.row .tex-button{
  margin-right: 20px;
}
</style>
<script>
export default {
  data () {
    return {
      bthtml: `<template>
    <div>
      <div class='row'>
        <tex-button >默认按钮</tex-button>
        <tex-button type="primary">主要按钮</tex-button>
        <tex-button type="success">成功按钮</tex-button>
        <tex-button type="info">信息按钮</tex-button>
        <tex-button type="warning">警告按钮</tex-button>
        <tex-button type="danger">危险按钮</tex-button>
      </div>
      <div class='row'>
        <tex-button >朴素按钮</tex-button>
        <tex-button plain type="primary">主要按钮</tex-button>
        <tex-button plain type="success">成功按钮</tex-button>
        <tex-button plain type="info">信息按钮</tex-button>
        <tex-button plain type="warning">警告按钮</tex-button>
        <tex-button plain type="danger">危险按钮</tex-button>
      </div>
      <div class='row'>
        <tex-button round>圆角按钮</tex-button>
        <tex-button round type="primary">主要按钮</tex-button>
        <tex-button round type="success">成功按钮</tex-button>
        <tex-button round type="info">信息按钮</tex-button>
        <tex-button round type="warning">警告按钮</tex-button>
        <tex-button round type="danger">危险按钮</tex-button>
      </div>
      <div class='row'>
        <tex-button circle icon="tex-icon-search"></tex-button>
        <tex-button circle icon="tex-icon-edit" type="primary"></tex-button>
        <tex-button circle icon="tex-icon-check" type="success"></tex-button>
        <tex-button circle icon="tex-icon-message" type="info"></tex-button>
        <tex-button circle icon="tex-icon-star-off" type="warning"></tex-button>
        <tex-button circle icon="tex-icon-delete" type="danger"></tex-button>
      </div>
     </div>
</template>
<script>`,
btnjs:`export default {
         methods: {},
        }`,
btnhtml1:`<template>
    <div>
      <div class='row'>
        <tex-button disabled>默认按钮</tex-button>
        <tex-button type="primary" disabled>主要按钮</tex-button>
        <tex-button type="success" disabled>成功按钮</tex-button>
        <tex-button type="info" disabled>信息按钮</tex-button>
        <tex-button type="warning" disabled>警告按钮</tex-button>
        <tex-button type="danger" disabled>危险按钮</tex-button>
      </div>
     </div>
</template>`,
btnjs1:`export default {
         methods: {},
        }`
    }
  },
  methods: {
    click () {
      this.value = '点击过'
    }
  }
}
</script>

## Button 按钮
常用的操作按钮
<br/>

### 基础用法
基础的按钮用法。


<template>
  <demo-block class="demo-box">
    <div class="source" slot="source">
    <!-- 展示的组件内容 -->
      <div class='row'>
        <tex-button >默认按钮</tex-button>
        <tex-button type="primary">主要按钮</tex-button>
        <tex-button type="success">成功按钮</tex-button>
        <tex-button type="info">信息按钮</tex-button>
        <tex-button type="warning">警告按钮</tex-button>
        <tex-button type="danger">危险按钮</tex-button>
      </div>
      <div class='row'>
        <tex-button >朴素按钮</tex-button>
        <tex-button plain type="primary">主要按钮</tex-button>
        <tex-button plain type="success">成功按钮</tex-button>
        <tex-button plain type="info">信息按钮</tex-button>
        <tex-button plain type="warning">警告按钮</tex-button>
        <tex-button plain type="danger">危险按钮</tex-button>
      </div>
      <div class='row'>
        <tex-button round>圆角按钮</tex-button>
        <tex-button round type="primary">主要按钮</tex-button>
        <tex-button round type="success">成功按钮</tex-button>
        <tex-button round type="info">信息按钮</tex-button>
        <tex-button round type="warning">警告按钮</tex-button>
        <tex-button round type="danger">危险按钮</tex-button>
      </div>
      <div class='row'>
        <tex-button circle icon="tex-icon-search"></tex-button>
        <tex-button circle icon="tex-icon-edit" type="primary"></tex-button>
        <tex-button circle icon="tex-icon-check" type="success"></tex-button>
        <tex-button circle icon="tex-icon-message" type="info"></tex-button>
        <tex-button circle icon="tex-icon-star-off" type="warning"></tex-button>
        <tex-button circle icon="tex-icon-delete"  type="danger"></tex-button>
      </div>
    </div>
    <div class="highlight" slot="highlight" >
      <!-- desciption -->
     <div class="description">
      使用<code>type</code>、<code>plain</code>、<code>round</code>、和<code>circle</code>属性来定义 Button 的样式。
     </div>
      <pre v-highlight>
              <code class="language-html">{{bthtml}}</code>
        </pre>
    </div>
  </demo-block>
</template>

### 禁用状态
按钮不可用状态


<template>
  <demo-block class="demo-box">
    <div class="source" slot="source">
    <!-- 展示的组件内容 -->
      <div class='row'>
        <tex-button disabled>默认按钮</tex-button>
        <tex-button type="primary" disabled>主要按钮</tex-button>
        <tex-button type="success" disabled>成功按钮</tex-button>
        <tex-button type="info" disabled>信息按钮</tex-button>
        <tex-button type="warning" disabled>警告按钮</tex-button>
        <tex-button type="danger" disabled>危险按钮</tex-button>
      </div>
    </div>
    <div class="highlight" slot="highlight" >
      <!-- desciption -->
     <div class="description">
      你可以使用<code>disabled</code>属性来定义按钮是否可用，它接受一个<code>Boolean</code>值。
     </div>
      <pre v-highlight>
              <code class="language-html">
              {{btnhtml1}}
              </code>
        </pre>
    </div>
  </demo-block>
</template>

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :-----| ----: | :----: | :----: | :----: | 
| type | 类型 | string |primary / success / warning / danger / info /  |—— |
| plain | 是否朴素按钮 | boolean |—— |false |
| round | 是否圆角按钮 | boolean |—— |—— |
| circle | 是否圆形按钮 | boolean |—— |false |
| disabled | 是否禁用状态 | boolean |—— |false |
| icon | 图标类型 | string |—— |—— |

<!-- https://www.jb51.net/article/156264.htm -->