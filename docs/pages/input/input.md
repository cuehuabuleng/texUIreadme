---
title: input 输入框
date: 2020-12-17
---

## input输入框
通过鼠标或键盘输入字符

## 基础用法

<template>
  <demo-block class="demo-box">
    <div class="source" slot="source">
    <!-- 展示的组件内容 -->
        <tex-input v-model="value" placeholder="请输入内容" width='180px' @input="handleInput"></tex-input>
    </div>
    <div class="highlight" slot="highlight" >
      <!-- desciption -->
     <div class="description">
     </div>
      <pre v-highlight>
              <code class="language-html">{{inputhtml}}</code>
              <code class="language-js">{{inputjs}}</code>
        </pre>
    </div>
  </demo-block>
</template>

## 禁用状态

<template>
  <demo-block class="demo-box">
    <div class="source" slot="source">
    <!-- 展示的组件内容 -->
        <tex-input v-model="value1" placeholder="请输入内容" width='180px' disabled></tex-input>
    </div>
    <div class="highlight" slot="highlight" >
      <!-- desciption -->
     <div class="description">
      <p>通过 <code>disabled</code> 属性指定是否禁用 input 组件</p>
     </div>
      <pre v-highlight>
              <code class="language-html">{{inputhtml1}}</code>
              <code class="language-js">{{inputjs1}}</code>
        </pre>
    </div>
  </demo-block>
</template>

## 可清空

<template>
  <demo-block class="demo-box">
    <div class="source" slot="source">
    <!-- 展示的组件内容 -->
        <tex-input v-model="value2" placeholder="请输入内容" width='180px' clearable @clear="handleClear"></tex-input>
    </div>
    <div class="highlight" slot="highlight" >
      <!-- desciption -->
     <div class="description">
      <p>使用 <code>clearable</code> 属性指定是否禁用 input 组件</p>
     </div>
      <pre v-highlight>
              <code class="language-html">{{inputhtml2}}</code>
              <code class="language-js">{{inputjs2}}</code>
        </pre>
    </div>
  </demo-block>
</template>

## 密码框

<template>
  <demo-block class="demo-box">
    <div class="source" slot="source">
    <!-- 展示的组件内容 -->
        <tex-input v-model="value3" placeholder="请输入密码" width='180px' showPassword></tex-input>
    </div>
    <div class="highlight" slot="highlight" >
      <!-- desciption -->
     <div class="description">
      <p>使用 <code>showPassword</code> 属性即可得到一个可切换显示隐藏的密码框</p>
     </div>
      <pre v-highlight>
              <code class="language-html">{{inputhtml3}}</code>
              <code class="language-js">{{inputjs3}}</code>
        </pre>
    </div>
  </demo-block>
</template>


<script>
    export default{
        data(){
            return{
                value:'',
                value1:'',
                value2:'',
                value3:'',
                inputhtml:` <template>
    <tex-input v-model="modelValue" placeholder="请输入内容"></tex-input>
 </template>`,
                inputjs:`export default {
  data() {
    return {
      value:''
    };
  },
};`,
                inputhtml1:` <template>
    <tex-input v-model="modelValue" placeholder="请输入内容" disabled></tex-input>
 </template>`,
                inputjs1:`export default {
  data() {
    return {
      value:''
    };
  },
};`,
                inputhtml2:` <template>
    <tex-input v-model="modelValue" placeholder="请输入内容" clearable></tex-input>
 </template>`,
                inputjs2:`export default {
  data() {
    return {
      value:''
    };
  },
};`,
                inputhtml3:` <template>
    <tex-input v-model="modelValue" placeholder="请输入密码" showPassword></tex-input>
 </template>`,
                inputjs3:`export default {
  data() {
    return {
      value:''
    };
  },
};`
            }
        },
        methods:{
          handleInput(val){
            console.log('handelinput', val)
          },
          handleClear(){
            console.log('clear')
          }
        }
    }
</script>


### Input Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :-----| ----: | :----: | :----: | :----: | 
| type | 类型 | string |text，textarea 和其他 原生 input 的 type 值 |text |
| value / v-model | 绑定值 | 	string / number  |——  |—— |
| placeholder | 输入框占位文本 | string |—— |—— |
| clearable | 是否可清空 | boolean |—— |false |
| showPassword | 是否显示切换密码图标 | boolean |—— |false |
| disabled | 禁用 | boolean |—— |false |
| width | 输入框长度 | string |—— |180px |

### Input Events

| 事件名称 | 说明 | 回调参数 | 
| :-----| ----: | :----: | :----: | :----: | 
| input | 在 Input 值改变时触发 |(value: string / number)|
| clear | 在点击由 clearable 属性生成的清空按钮时触发 |——|