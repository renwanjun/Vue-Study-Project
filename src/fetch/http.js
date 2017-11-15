import axios from 'axios'
import store from '@/vuex/store'
import router from '@/router'
import qs from 'qs'

import URLS from './urls'  // 地址路径

axios.defaults.timeout = 50000
axios.defaults.headers.post['Content-Type'] = 'application/x-www.form-urlencodex:charset=UTF-8'
// axios.defaults.headers.authorization = 'wewewewq'
axios.defaults.headers.common['authorization'] = 'wewewewq'
axios.defaults.baseURL = 'http://localhost:3006'  // 默认得请求路径

// http request拦截器 发送请求前处理
axios.interceptors.request.use(
  config => {
    if (store.state.token) { // 判断是否存在token,如果存在的话，则每个http header都加上token
      config.headers.Authorization = `token ${store.state.token}`
    }
    if (config.method === 'post') { // POST传参序列化
      config.data = qs.stringify(config.data)
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response拦截器 返回状态判断
axios.interceptors.response.use(
  response => {
    // if (!response.data) { // 自定义业务处理
    //   return Promise.reject(response)
    // }
    console.log(response)
    return response
  },
  error => {
    if (error.response) {
      // 根据状态码区分处理问题
      switch (error.response.status) {
        case 401: // 登录被拒绝。
        // 返回 401 清除token信息并跳转到登录页面
          // store.commit(types.LOGOUT)
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}
          })
      }
    }
    return Promise.reject(error.message)
    // if (error.response)
  }
)

function post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(response => {
      resolve(response)
    }, err => {
      reject(err)
    }).catch(err => {
      reject(err)
    })
  })
}
function get (url, params) {
  if (params !== undefined && params !== '') {
    url += '?'
    if (typeof params === 'object') {
      for (let field in params) {
        url += field + '=' + params[field] + '&'
      }
    } else {
      url += params
    }
  }
  return new Promise((resolve, reject) => {
    axios.get(url).then(response => {
      resolve(response)
    }, err => {
      reject(err)
    }).catch(err => {
      reject(err)
    })
  })
}

export default{
  fetch (method, url, params) {
    return new Promise((resolve, reject) => {
      if (method === 'post') { // POST传参序列化
        return post(url, params)
      }
      if (method === 'get') { // POST传参序列化
        // config.data = qs.stringify(config.data)
        return get(url, params)
      }
    })
  }
}

export {URLS as urls, post, get}
