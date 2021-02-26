---
title: Checkbox 多选框
date: 2020-12-17
---

## Checkbox 多选框

一组备选项中进行多选

## 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

<template>
  <demo-block class="demo-box">
    <div class="source" slot="source">
    <!-- 展示的组件内容 -->
    <tex-checkbox v-model="active"> 是否选中 </tex-checkbox>
    </div>
    <div class="highlight" slot="highlight" >
      <!-- desciption -->
     <div class="description">
      <p>在<code>tex-checkbox</code>元素中定义<code>v-model</code>绑定变量，单一的<code>checkbox</code>中，默认绑定变量的值会是<code>Boolean</code>，选中为<code>true</code>。</p>
     </div>
      <pre v-highlight>
              <code class="language-html">{{checkboxhtml}}</code>
              <code class="language-js">{{checkboxjs}}</code>
        </pre>
    </div>
  </demo-block>
</template>

## 多选框组
适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

<template>
  <demo-block class="demo-box">
    <div class="source" slot="source">
    <!-- 展示的组件内容 -->
        <tex-checkbox-group v-model="options">
            <tex-checkbox label="A"></tex-checkbox>
            <tex-checkbox label="B"></tex-checkbox>
        <tex-checkbox label="C"></tex-checkbox>
        </tex-checkbox-group>
    </div>
    <div class="highlight" slot="highlight" >
      <!-- desciption -->
     <div class="description">
        <p><code>tex-checkbox-group</code>元素能把多个 checkbox 管理为一组，只需要在 Group 中使用<code>v-model</code>绑定<code>Array</code>类型的变量即可。 <code>el-checkbox</code> 的 <code>label</code>属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。<code>label</code>与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。</p>
     </div>
      <pre v-highlight>
              <code class="language-html">{{checkboxhtml1}}</code>
              <code class="language-js">{{checkboxjs1}}</code>
        </pre>
    </div>
  </demo-block>
</template>

<script>
    export default{
        data(){
            return{
                active:false,
                options:[],
                checkboxhtml:`<template>
    <tex-checkbox v-model="active"> 是否选中 </tex-checkbox>
  </template>`,
                checkboxjs:`export default {
  data() {
    return {
      active: false,
    };
  },
};`,
                checkboxhtml1:`  <template>
    <tex-checkgroup v-model:value="hobby">
      <tex-checkbox label="抽烟"></tex-checkbox>
      <tex-checkbox label="喝酒"></tex-checkbox>
      <tex-checkbox label="烫头"></tex-checkbox>
    </tex-checkgroup>
  </template>`,
                checkboxjs1:`export default {
  data() {
    return {
       options:[]
    };
  },
};`
            }
        }
    }
</script>

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :-----| ----: | :----: | :----: | :----: | 
| value / v-model | 绑定值 | 	string / number / boolean |——  |—— |
| label | 选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效） | string / number / boolean |—— |—— |
| name | 原生 name 属性 | string |—— |—— |

