import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './styles/index.less'

Vue.config.productionTip = false

// 创建 Vue 根实例
// 把router 配置到根实例只能够
// 通过 render 方法把 App 根组件渲染到 #app 入口节点
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
