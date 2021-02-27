---
title: dialog 弹窗
date: 2020-12-17
---

### dialog 对话框
在保留当前页面状态的情况下，告知用户并承载相关操作。

### 基本用法
Dialog 弹出一个对话框，适合需要定制性更大的场景。

<template>
  <demo-block class="demo-box">
    <div class="source" slot="source">
    <!-- 展示的组件内容 -->
     <tex-button
        plain
        type="primary"
        @click="visible = true"
        >点击打开dialog</tex-button>
    <tex-dialog title="提示" width="25%" top="200px" :visible.sync="visible" @close="handleClose">
        <p>这是一段信息</p>
        <template v-slot:footer>
            <tex-button @click="visible = false">取消</tex-button>
            <tex-button type="primary" @click="visible = false">确认</tex-button>
        </template>
    </tex-dialog>
    </div>
    <div class="highlight" slot="highlight" >
      <!-- desciption -->
      <p>需要设置<code>visible</code>属性，它接收<code>Boolean</code>，当为<code>true</code>时显示 <code>Dialog</code>。<code>Dialog</code>分为三个部分：<code>body</code>、<code>footer</code>和<code>title</code>，<code>title</code>和<code>footer</code>需要具名为<code>title</code>和<code>footer</code>的<code>slot</code>。<code>title</code>属性用于定义标题，它是可选的，默认值为空。</p>
     <div class="description">
     </div>
      <pre v-highlight>
              <code class="language-html">{{dialoghtml}}</code>
              <code class="language-js">{{dialogjs}}</code>
        </pre>
    </div>
  </demo-block>
</template>

### 自定义内容

Dialog 组件的内容可以是任意的，甚至可以是表格或表单

<template>
  <demo-block class="demo-box">
    <div class="source" slot="source">
    <!-- 展示的组件内容 -->
     <tex-button
        plain
        type="primary"
        @click="visible1 = true"
        >点击打开dialog</tex-button>
    <tex-dialog title="输入账号" width="30%" top="200px" :visible.sync="visible1">
        <tex-form :model="form" label-width="75px">
            <tex-form-item label="用户名">
                <tex-input
                    placeholder="请输入用户名"
                    v-model="form.username"
                    width='100%'
                    clearable
                ></tex-input>
            </tex-form-item>
            <tex-form-item label="密码">
                <tex-input
                    placeholder="请输入密码"
                    v-model="form.password"
                    width='100%'
                    showPassword
                ></tex-input>
            </tex-form-item>
        </tex-form>
        <template v-slot:footer>
            <tex-button @click="visible1 = false">取消</tex-button>
            <tex-button type="primary" @click="visible1 = false">确认</tex-button>
        </template>
    </tex-dialog>
    </div>
    <div class="highlight" slot="highlight" >
      <!-- desciption -->
     <div class="description">
     </div>
      <pre v-highlight>
              <code class="language-html">{{dialoghtml1}}</code>
              <code class="language-js">{{dialogjs1}}</code>
        </pre>
    </div>
  </demo-block>
</template>

<script>
export default{
    data(){
        return{
            visible:false,
            visible1:false,
            dialogjs:`export default {
  data() {
    return {
        visible:false
    };
  }
};`,
            dialoghtml:`<template>
    <tex-button plain type="primary" @click="visible = true"
      >点击打开dialog</tex-button
    >
    <tex-dialog
      title="温馨提示"
      width="30%"
      top="200px"
      v-model:visible="visible"
    >
      <p>这是一段信息</p>
      <template v-slot:footer>
        <tex-button type="primary" @click="visible = false">取消</tex-button>
        <tex-button @click="visible = false">确认</tex-button>
      </template>
    </tex-dialog>
  </template>`,
            dialoghtml1:`<template>
     <tex-button
        plain
        type="primary"
        @click="visible1 = true"
        >点击打开dialog</tex-button>
    <tex-dialog title="输入账号" width="30%" top="200px" :visible.sync="visible1">
        <tex-form :model="form" label-width="75px">
            <tex-form-item label="用户名">
                <tex-input
                    placeholder="请输入用户名"
                    v-model="form.username"
                    width='100%'
                    clearable
                ></tex-input>
            </tex-form-item>
            <tex-form-item label="密码">
                <tex-input
                    placeholder="请输入密码"
                    v-model="form.password"
                    width='100%'
                    showPassword
                ></tex-input>
            </tex-form-item>
        </tex-form>
        <template v-slot:footer>
            <tex-button @click="visible1 = false">取消</tex-button>
            <tex-button type="primary" @click="visible1 = false">确认</tex-button>
        </template>
    </tex-dialog>
  </template>`,
            dialogjs1:`export default {
  data() {
    return {
        visible:false,
        form:{
                uaername:'',
                password:''
            }
    };
  }
};`,
            form:{
                uaername:'',
                password:''
            }
        }
    },
    methods:{
      handleClose(){
        console.log('close')
      }
    }
}
</script>

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :-----| ----: | :----: | :----: | :----: | 
| visible | 是否显示 Dialog，支持 .sync 修饰符 | 	boolean |——  |false |
| title | Dialog 的标题，也可通过具名 slot （见下表）传入 | string |—— |—— |
| width | Dialog 的宽度 | string |—— |50% |
| top | Dialog CSS 中的 margin-top 值 | string |—— |15vh |



### Slot
| name | 说明 | 
| :-----| :---- |
| —— | Dialog 的内容 |
| title | Dialog 标题区的内容 |
| footer | 	Dialog 按钮操作区的内容 |

### Events

| 事件名称 | 说明 | 回调参数 | 
| :-----| ----: | :----: | :----: | :----: | 
| close | Dialog 关闭的回调 |——|

