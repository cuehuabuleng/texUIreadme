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
        <tex-form :model="form"  label-width="100px">
            <tex-form-item label="用户名">
                <tex-input
                    placeholder="请输入用户名"
                    v-model="form.username"
                    clearable
                ></tex-input>
            </tex-form-item>
            <tex-form-item label="密码">
                <tex-input
                    placeholder="请输入用密码"
                    v-model="form.password"
                    showPassword
                ></tex-input>
            </tex-form-item>
             <tex-form-item label="记住密码">
                <tex-switch v-model="form.remenber"></tex-switch>
            </tex-form-item>
            <tex-form-item label="性别">
                <tex-radio-group v-model="form.sex">
                    <tex-radio label="1">男</tex-radio>
                    <tex-radio label="2">女</tex-radio>
                </tex-radio-group>
            </tex-form-item>
            <tex-form-item label="爱好">
                <tex-checkbox-group v-model="form.hobby">
                    <tex-checkbox label="篮球"></tex-checkbox>
                    <tex-checkbox label="足球"></tex-checkbox>
                    <tex-checkbox label="乒乓球"></tex-checkbox>
                </tex-checkbox-group>
            </tex-form-item>
            <tex-form-item >
                <tex-button @click='onSubmit'>提交</tex-button>
            </tex-form-item>
        </tex-form>
    </div>
    <div class="highlight" slot="highlight" >
      <!-- desciption -->
     <div class="description">
     </div>
      <pre v-highlight>
              <code class="language-html">{{formhtml}}</code>
              <code class="language-javascript">{{formjs}}</code>
        </pre>
    </div>
  </demo-block>
</template>

<script>
export default{
    data (){
        return{
            form:{
                username:'',
                remenber:false,
                password:'',
                sex:'1',
                hobby:['篮球','足球','乒乓球']
            },
            formhtml:`  <template>
    <tex-form :model="form" label-width="100px">
      <tex-form-item label="用户名">
        <tex-input
          palceholder="请输入用户名"
          v-model="form.username"
          clearable
        ></tex-input>
      </tex-form-item>
      <tex-form-item label="密码">
        <tex-input
          palceholder="请输入密码"
          v-model="form.password"
          showPassword
        ></tex-input>
      </tex-form-item>
      <tex-form-item label="记住密码">
        <tex-switch v-model:modleActive="form.remenber"></tex-switch>
      </tex-form-item>
      <tex-form-item label="性别">
        <tex-radiogroup v-model:value="form.sex">
          <tex-radio label="1">男</tex-radio>
          <tex-radio label="2">女</tex-radio>
        </tex-radiogroup>
      </tex-form-item>
      <tex-form-item label="兴趣">
        <tex-checkgroup v-model:value="form.hobby">
          <tex-checkbox label="篮球"></tex-checkbox>
          <tex-checkbox label="足球"></tex-checkbox>
          <tex-checkbox label="乒乓球"></tex-checkbox>
        </tex-checkgroup>
      </tex-form-item>
      <tex-form-item>
        <tex-button @click="onSubmit">提交</tex-button>
      </tex-form-item>
    </tex-form>
  </template>`,
            formjs:`export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        remenber: false,
        hobby: ["篮球", "足球", "乒乓球"],
        sex: "1",
      },
    };
  },
   methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
};`
        }
    },
    methods:{
        onSubmit(){
            console.log('submit', this.form)
        }
    },
    watch:{
        form(){
            console.log('1', this.form.username)
        }
    }
}
</script>

### Form Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :-----| ----: | :----: | :----: | :----: | 
| model | 表单数据对象 | 	object |——  |—— |
| label-width | 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。 | string |—— |—— |