<template>
  <div>
    <tex-button>默认按钮</tex-button>
    <tex-button type="primary">主要按钮</tex-button>
    <tex-button type="success">成功按钮</tex-button>
    <tex-button type="info">信息按钮</tex-button>
    <tex-button type="warning">警告按钮</tex-button>
    <tex-button type="danger">危险按钮</tex-button>

    <h2>dialog</h2>
    <!-- sync修饰符是一个语法糖 -->
    <tex-button
      plain
      icon="tex-icon-delete"
      type="primary"
      @click="visible = true"
      >显示</tex-button
    >
    <tex-dialog
      title="温馨提示"
      width="50%"
      top="200px"
      v-model:visible="visible"
    >
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <tex-button type="primary" @click="visible = false">取消</tex-button>
        <tex-button @click="visible = false">确认</tex-button>
      </template>
    </tex-dialog>
    <input v-model:showvalue="showvalue" />
    <p>{{ showvalue }}</p>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      showvalue: "232321",
      visible:true
    };
  },
  methods: {},
};
</script>