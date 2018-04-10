import Vue from 'vue'
import Router from 'vue-router'
import store from '@/vuex/store'

import Login from '@/components/login'
import main from '@/components/main'
import starrySky from '@/components/animation/starry_sky'

Vue.use(Router)
Router.prototype.animate = 0
// const store = Vue.$store
// 定义路由配置
/* *
 *  改进点
 *  1.路由懒加载
 *  2.登陆拦截 通过路由的beforeEach钩子函数
 *  3.动画切换 通过meta参数设置
 * */
const routerConfig = {
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/starrySky',
      name: 'starry_sky',
      meta: {
        slide: 1
      },
      component: starrySky
    }
  ]
}
const router = new Router(routerConfig)
/**
 * 路由全局验证,通过路由的beforeEach钩子函数来判断是否需要登陆
 * 会在整个路由切换的最前端被调用，优先于个路由组件中的路由钩子执行
 */
router.beforeEach((to, from, next) => {
  // console.log('dd')
  if (to.path === '/login') {
    next()
  } else {
    if (!store.state.user) {
      // next({path: '/login'})
      next()
      // next({path: '/login', query: {redirect: to.fullPath}})
    } else {
      next()
    }
  }
})
// 初始化路由实例并导出
export default router
