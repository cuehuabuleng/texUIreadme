---
title: form
date: 2020-12-8
---


## form表单的使用
由输入框、选择器、单选框、多选框等控件组成，用以收集、提交数据

### 典型表单
包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。

<template>
  <demo-block class="demo-box">
    <div class="source" slot="source">
    <!-- 展示的组件内容 -->
        <tex-form :model="model"  label-width="100px">
            <tex-form-item label="用户名">
                <tex-input
                    placeholder="请输入用户名"
                    v-model="model.username"
                    clearable
                ></tex-input>
            </tex-form-item>
            <tex-form-item label="密码">
                <tex-input
                    placeholder="请输入用密码"
                    v-model="model.password"
                    showPassword
                ></tex-input>
            </tex-form-item>
             <tex-form-item label="记住密码">
                <tex-switch v-model="model.remenber"></tex-switch>
            </tex-form-item>
            <tex-form-item label="性别">
                <tex-radio-group v-model="model.value">
                    <tex-radio label="1">男</tex-radio>
                    <tex-radio label="2">女</tex-radio>
                </tex-radio-group>
            </tex-form-item>
            <tex-form-item >
                <tex-button @click='handleClick'>提交</tex-button>
            </tex-form-item>
        </tex-form>
    </div>
    <div class="highlight" slot="highlight" >
      <!-- desciption -->
     <div class="description">
     </div>
      <pre v-highlight>
              <code class="language-html">123</code>
        </pre>
    </div>
  </demo-block>
</template>

<script>
export default{
    data (){
        return{
            model:{
                username:'132',
                remenber:false,
                password:'',
                value:'1'
            },
        }
    },
    methods:{
        handleClick(){
            console.log('submit', this.model)
        }
    },
    watch:{
        model(){
            console.log('1', this.model.username)
        }
    }
}
</script>