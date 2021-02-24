<template>
  <div class="tex-input" :class="{ 'tex-input--suffix': showSuffix }">
    <input
      :name="name"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      class="tex-input_inner"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="{ 'is-disabled': disabled }"
      :value="value"
      @input="handleInput"
    />
    <span class="tex-input_suffix" v-if="showSuffix">
      <i class="tex-icon-close" v-if="clearable && value" @click="clear"></i>
      <i
        class="tex-icon-view"
        :class="{ 'tex-icon-view-active': passwordVisible }"
        v-if="showPassword"
        @click="handlePassword"
      ></i>
    </span>
  </div>
</template>
<script>
export default {
  name: "TexInput",
  data() {
    return {
      passwordVisible: false,
    };
  },
  // model:{
  //   prop:'value',
  //   event:'input'
  // },
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: [String, Number],
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleInput(e) {
      console.log(e.target.value)
      this.$emit("input", e.target.value);
    },
    clear() {
      console.log('clear',this.value)
      this.$emit("input", "");
    },
    handlePassword() {
      this.passwordVisible = !this.passwordVisible;
    },
  },
  computed: {
    showSuffix() {
      return this.showPassword || this.clearable;
    },
  },
};
</script>
<style lang="less" scoped>
.tex-input {
  width: 180px;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .tex-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #000;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}

.tex-input--suffix {
  .tex-input_inner {
    padding-right: 30px;
  }
  .tex-input_suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .tex-icon-view-active {
      color: blue;
    }
  }
}
</style>