import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 存放登录状态
const store = new Vuex.Store({
  state: {
    token: false,
    user: false
  },
  mutations: {
    // 登录
    login (state, user) {
      state.user = user
    },
     // 退出
    logout (state, user) {
      state.user = false
    }
  }
})

export default store
