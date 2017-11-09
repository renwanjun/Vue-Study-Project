import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/vuex/store'

import Login from '@/components/login'
import Main from '@/components/main'

Vue.use(Router)
const store = Vue.$store
// 定义路由配置
const routerConfig = {
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
}
const router = new Router(routerConfig)
/**
 *路由全局验证 会在整个路由切换的最前端被调用，优先于个路由组件中的路由钩子执行
 */
router.beforeEach((to, from, next) => {
  // console.log('dd')
  if (to.path === '/login') {
    next()
  } else {
    if (!store.state.user) {
      next({path: '/login', query: {redirect: to.fullPath}})
    } else {
      next()
    }
    // if (!store.state.user && (from.path === '/my') && (to.path === '/ToolCompute')) {
    //   next({path: '/login'})
    // }
  }
})
// 初始化路由实例并导出
export default router
