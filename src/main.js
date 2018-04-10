'use strict'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './vuex/store'
import _, {urls} from './fetch/http'
import router from './router' // 路由

import App from './app'
// 引入全局css,less文件
import './common/styles/reset.css'
import './common/styles/common.less'
import './common/styles/virables.less'


// 引入全局使用组件
// import 'swiper/dist/css/swiper.min.css'
// import Swiper from 'swiper'

Vue.use(Vuex) // 在使用一个模块化额打包系统中，必须显示地通过Vue.use()来安装Vuex；

Vue.prototype.$store = store // 全局注册store到Vue的原型中，这样各个组件都可以使用axios
// Vue.prototype.$router = router
Vue.prototype._http = _ // 将请求方法注册到全局Vue变量中
Vue.prototype.$urls = urls // 将请求方法注册到全局Vue变量中
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  store,
  template: '<App/>',
  components: {App}
})
