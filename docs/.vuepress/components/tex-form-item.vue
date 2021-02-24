<template>
  <div class="tex-form-item">
    <label
      class="tex-form-item_label"
      :style="{ width: this.Form.labelWidth }"
      >{{ label }}</label
    >
    <div class="tex-form-item_content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TexFormItem",
  props: {
    label: {
      type: String,
    },
  },
  inject: ["Form"],
};
</script>

<style lang="less" scoped>
.tex-form-item {
  margin-bottom: 25px;
  .tex-form-item_label {
    float: left;
    padding: 0 12px 0 0;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    text-align: right;
    vertical-align: middle;
    box-sizing: border-box;
  }
  .tex-form-item_content {
    position: relative;
    line-height: 40px;
    font-size: 14px;
    overflow: hidden;
  }
}
.err {
  color: red;
  font-size: 14px;
  line-height: 14px;
}
</style>