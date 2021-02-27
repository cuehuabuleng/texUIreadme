<template>
  <div
    class="tex-switch"
    :class="{ 'is-checked': value }"
    @click="handleChange"
  >
    <span class="tex-switch_core" ref="core">
      <span class="tex-switch_button"></span>
    </span>
    <input
      type="checkbox"
      class="tex-switch_input"
      :name="name"
      ref="checked"
    />
  </div>
</template>
<script>
export default {
  name: "TexSwitch",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
      default: "",
    },
    inactiveColor: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },
  methods: {
    async handleChange() {
      // 当点击switch的时候，外部会触发change事件
      this.$emit("change", "");
      this.$emit("input", !this.value);
      await this.$nextTick();
      this.setColor();
    },
    setColor() {
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.backgroundColor = color;
        this.$refs.core.style.borderColor = color;
      }
      //   同步checkbox和switch组件的值
      this.$refs.checked.checked = this.value;
    },
  },
  mounted() {
    this.setColor();
  },
};
</script>
<style lang="less" scoped>
.tex-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .tex-switch_input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .tex-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .tex-switch_button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}

.tex-switch.is-checked {
  .tex-switch_core {
    border-color: #409eff;
    background-color: #409eff;
    .tex-switch_button {
      transform: translateX(20px);
    }
  }
}
</style>