// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './vuex/store'

import router from './router'     // 路由

import App from './app'
// 引入全局css
import './common/styles/reset.css'
import './common/styles/common.less'
import './common/styles/virables.less'

Vue.use(Vuex)  // 在使用一个模块化额打包系统中，必须显示地通过Vue.use()来安装Vuex；
Vue.prototype.$store = store  // 全局注册store到Vue的原型中，这样各个组件都可以使用axios
Vue.prototype.$router = router
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
