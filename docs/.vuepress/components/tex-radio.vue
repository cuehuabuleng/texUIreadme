<template>
  <label class="tex-radio" :class="{ 'is-checked': label === modelValue }">
    <span class="tex-radio_input">
      <span class="tex-radio_inner"></span>
      <input
        type="radio"
        class="tex-radio_original"
        :value="label"
        :name="name"
        v-model="modelValue"
      />
    </span>
    <span class="tex-radio_label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
<script>
export default {
  name: "TexRadio",
  inject: {
    RadioGroup: {
      default: "",
    },
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: "",
    },
    value: {
      type: [String, Number, Boolean],
      default: "1",
    },
    name: {
      type: String,
      default: "",
    },
  },
  computed: {
    modelValue: {
      get() {
        // 如果外面被group包裹，那就需要返回的是group的值value
        return this.isGroup ? this.RadioGroup.value : this.value;
      },
      set(value) {
        // 提供change事件给外部监听
        this.isGroup ?
        this.RadioGroup.$emit('change', value):
        this.$emit('change', value);
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      },
    },
    isGroup() {
      return !!this.RadioGroup.value;
    },
  }
};
</script>
<style lang="less" scoped>
.tex-radio {
  display: inline-block;
  position: relative;
  margin-right: 30px;
  color: #606266;
  font-size: 14px;
  font-weight: 500;
  // 根据字号大小设置行距
  line-height: 1;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  // 禁止文本选择
  -moz-user-select: none;
  -webkit-user-select: none;
  .tex-radio_input {
    position: relative;
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
    outline: none;
    white-space: nowrap;
    cursor: pointer;
    .tex-radio_inner {
      position: relative;
      display: inline-block;
      width: 14px;
      height: 14px;
      box-sizing: border-box;
      border: 1px solid #dcdfe6;
      border-radius: 50%;
      cursor: pointer;
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #409eff;
        // scale显示与隐藏
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .tex-radio_original {
      opacity: 0;
      outline: none;
      position: absolute;
    }
  }
  .tex-radio_label {
    font-size: 14px;
    padding-left: 15px;
  }
  &.is-checked {
    .tex-radio_input {
      .tex-radio_inner {
        border-color: #409eff;
        &::after {
          transform: translate(-50%, -50%) scale(1);
        }
      }
    }
    .tex-radio_label {
      color: #409eff;
    }
  }
}
</style>