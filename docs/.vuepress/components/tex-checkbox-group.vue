<template>
  <div class="tex-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "TexCheckgroup",
  props: {
    value: {
      type: Array,
      default: null,
    },
  },
  provide(){
      return{
          CheckboxGroup:this
      }
  }
};
</script>
<style lang="less" scoped>
</style>