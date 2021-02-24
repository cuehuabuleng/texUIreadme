<template>
  <label class="tex-checkbox" :class="{ 'is-checked': ischecked }">
    <span class="tex-checkbox_input">
      <span class="tex-checkbox_inner"></span>
      <input
        type="checkbox"
        class="tex-checkbox_original"
        :name="name"
        :value="label" 
        v-model="model"
      />
    </span>
    <span class="tex-checkbox_label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "TexCheckbox",
  inject: {
    CheckboxGroup: {
      default: "",
    },
  },
  computed: {
    //   这里的model 的作用就是 根据是否有group包裹 绑定不同的值  然后返回给外部或者调用外部的值
    model: {
      get() {
        return this.isGroup ? this.CheckboxGroup.value : this.value;
      },
      set(value) {
        this.isGroup
          ? this.CheckboxGroup.$emit("update:value", value)
          : this.$emit("update:value", value);
      },
    },

    // 可以判断是否有group包裹
    isGroup() {
      return !!this.CheckboxGroup;
    },
    ischecked() {
      // 如果是group包裹， 判断label是否在model中
      // 如果没有group包裹，直接使用model
      return this.isGroup ? this.model.includes(this.label) : this.model;
    },
  },
  props: {
    //   这里的value是在单个checkbox使用的时候 起作用 true/false  
    // 上面input绑定的value就是在多个checkbox组合时起作用 因为选中的时候，就是选中input中的value
    value: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
  },
  watch:{
    value(){
      console.log('子组件', this.value)
    }
  },
  mounted(){
    console.log('子组件',this.value, this.label, this.name)
  }
};
</script>

<style lang="less" scoped>
.tex-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .tex-checkbox_input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .tex-checkbox_inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .tex-checkbox_original {
      opacity: 0;
      outline: none;
      position: absolute;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .tex-checkbox_label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
  &.is-checked {
    .tex-checkbox_input {
      .tex-checkbox_inner {
        background-color: #409eff;
        border-color: #409eff;
        &::after {
          transform: rotate(45deg) scaleY(1);
        }
      }
    }
    .tex-checkbox_label {
      color: #409eff;
    }
  }
}
</style>