---
title: switch 开关
date: 2020-12-17
---

## switch开关
表示两种相互对立的状态间的切换，多用于触发「开/关」。

### 基本用法

<template>
  <demo-block class="demo-box">
    <div class="source" slot="source">
    <!-- 展示的组件内容 -->
      <tex-switch v-model="active" inactive-color="red" active-color="green" @change="handleChange"></tex-switch>
    </div>
    <div class="highlight" slot="highlight" >
      <!-- desciption -->
      <p>绑定<code>v-model</code>到一个<code>Boolean</code>类型的变量。可以使用<code>active-color</code>属性与<code>inactive-color</code>属性来设置开关的背景色。</p>
     <div class="description">
     </div>
      <pre v-highlight>
              <code class="language-html">{{switchhtml}}</code>
              <code class="language-js">{{switchjs}}</code>
        </pre>
    </div>
  </demo-block>
</template>

<script>
export default{
    data(){
        return {
            active:false,
            switchhtml:`  <template>
    <tex-switch
      v-model="active"
      inactive-color="red"
      active-color="green"
      name="username"
      @change="handleChange"
    ></tex-switch>
  </template>`,
            switchjs:`export default {
  data() {
    return {
      active:false
    };
  },
  methods:{
        handleChange(){
            console.log('handleChange')
        }
    }
};`
        }
    },
    methods:{
        handleChange(value){
            console.log('handleChange1',value)
        }
    }
}
</script>

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :-----| ----: | :----: | :----: | :----: | 
| value / v-model | 绑定值 | 	string / number  |——  |—— |
| active-color | switch 打开时的背景色 | string |—— |#409EFF |
| inactive-color | switch 关闭时的背景色 | boolean |—— |#C0CCDA |
| name | switch 对应的 name 属性 | string |—— |—— |


### Events

| 事件名称 | 说明 | 回调参数 | 
| :-----| ----: | :----: | :----: | :----: | 
| change | switch 状态发生变化时的回调函数 |新状态的值|