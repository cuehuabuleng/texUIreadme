---
title: radio
date: 2020-12-17
---

## radio单选框
在一组备选项中进行单选

### 基础用法

<template>
  <demo-block class="demo-box">
    <div class="source" slot="source">
    <!-- 展示的组件内容 -->
      <tex-radio label="1" v-model="value"></tex-radio>
      <tex-radio label="0" v-model="value"></tex-radio>
    </div>
    <div class="highlight" slot="highlight" >
      <!-- desciption -->
     <div class="description">
     </div>
      <pre v-highlight>
              <code class="language-html">{{radiohtml}}</code>
              <code class="language-js">{{radiojs}}</code>
        </pre>
    </div>
  </demo-block>
</template>

### 单选框组
适用于在多个互斥的选项中选择的场景

<template>
  <demo-block class="demo-box">
    <div class="source" slot="source">
    <!-- 展示的组件内容 -->
        <tex-radio-group v-model="options">
            <tex-radio label="1">A</tex-radio>
            <tex-radio label="2">B</tex-radio>
            <tex-radio label="3">C</tex-radio>
        </tex-radio-group>
    </div>
    <div class="highlight" slot="highlight" >
      <!-- desciption -->
     <div class="description">
     </div>
      <pre v-highlight>
              <code class="language-html">{{radiohtml1}}</code>
              <code class="language-js">{{radiojs1}}</code>
        </pre>
    </div>
  </demo-block>
</template>

<script>
export default{
    data(){
        return{
            value:'1',
            options:[],
            radiohtml:`<template>
  <tex-radio v-model="value" label="1">备选项</tex-radio>
  <tex-radio v-model="value" label="2">备选项</tex-radio>
</template>`,
            radiojs:`export default {
  data() {
    return {
      value:''
    };
  },
};`,
            radiohtml1:`<template>
         <tex-radio-group v-model="options">
            <tex-radio label="1">A</tex-radio>
            <tex-radio label="2">B</tex-radio>
            <tex-radio label="3">C</tex-radio>
        </tex-radio-group>
</template>`,
            radiojs1:`export default {
  data() {
    return {
     options:[]
    };
  },
};`
        }
    },
    methods:{
        handleChange(){
            console.log('1')
        }
    }
}
</script>

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :-----| ----: | :----: | :----: | :----: | 
| value / v-model | 绑定值 | string / number / boolean  |——  |—— |
| label	 | Radio 的 value | string / number / boolean |—— |—— |
| name | 原生 name 属性 | string |—— |—— |


### Radio Events
| 事件名称 | 说明 | 回调参数 |
| :-----| ----: | :----: | 
| change | 绑定值变化时触发的事件 |选中的 Radio label 值|
