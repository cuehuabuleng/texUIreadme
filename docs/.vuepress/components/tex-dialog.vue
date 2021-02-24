<template>
  <transition name="dialog">
    <!-- 遮罩层  .self代表点击自己才触发 -->
    <div class="tex-dialog_wrapper" v-show="visible" @click.self="handleClose">
      <div class="tex-dialog" :style="{ width, marginTop: top }">
        <div class="tex-dialog_header">
          <slot name="title">
            <span class="tex-dialog_title">{{ title }}</span>
          </slot>
          <button class="tex-dialog_headerbtn" @click="handleClose">
            <i class="tex-icon-close"></i>
          </button>
        </div>
        <div class="tex-dialog_body">
          <!-- 默认插槽 -->
          <slot></slot>
        </div>
        <div class="tex-dialog_footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "TexDialog",
  props: {
    title: {
      type: String,
      default: "提示",
    },
    width: {
      type: String,
      default: "50%",
    },
    top: {
      type: String,
      default: "15vh",
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClose() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style lang="less" scoped>
// scopd会给当前组件中的模板中的所有元素添加一个  随机的属性
// scoped会给当前组件中所有样式  也添加一个对应的属性选择器
.tex-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;

  background-color: rgba(0, 0, 0, 0.5);
}
.tex-dialog {
  position: relative;
  margin: 15vh auto 50px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  width: 30%;
  z-index: 2001;

  .tex-dialog_header {
    padding: 20px 20px 10px;
    .tex-dialog_title {
      line-height: 24px;
      font-size: 18px;
      color: #303133;
    }
    .tex-dialog_headerbtn {
      position: absolute;
      top: 20px;
      right: 20px;
      padding: 0;
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 16px;
      .tex-icon-close {
        color: #909399;
      }
    }
  }

  .tex-dialog_body {
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
  }
  .tex-dialog_footer {
    padding: 10px 20px 20px;
    text-align: right;
    box-sizing: border-box;
    //   深度选择器 sass中的深度选择器写法是 ::v-deep
    /deep/ .tex-button:first-child {
      margin-right: 20px;
    }
  }
}

.dialog-enter-active {
  animation: dialog-fade-in 0.4s;
}

.dialog-leave-active {
  animation: dialog-fade-out 0.4s;
}

@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>