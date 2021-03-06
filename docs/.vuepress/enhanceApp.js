// import Vue from 'vue'
// 这个是用vue2.x打包过来的lib
import 'highlight.js/styles/tomorrow-night.css' 
import hljs from 'highlight.js'
import 'tex-ui/dist/tex-ui.css'

export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData, // 站点元数据
    isServer // 当前应用配置是处于 服务端渲染 或 客户端
  }) => {
    // ...做一些其他的应用级别的优化
    Vue.directive('highlight',function (el) {
      let blocks = el.querySelectorAll('pre code');
      blocks.forEach((block) => {
        hljs.highlightBlock(block)
      })
    })
  }