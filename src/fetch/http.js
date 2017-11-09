import axios from 'axios'
import store from '@/vuex/store'
import router from '@/router'
import qs from 'qs'

import URLS from './apiUrl'

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www.form-urlencodex:charset=UTF-8'
axios.defaults.baseURL = 'http://localhost:8008'

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
    return response
  },
  error => {
    if (error.response) {
      // 根据状态码区分处理问题
      switch (error.response.status) {
        case 401: // 登录被拒绝
        // 返回 401 清除token信息并跳转到登录页面
          // store.commit(types.LOGOUT)
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}
          })
      }
    }
    return Promise.reject(error.response.data)
  }
)

// 公共方法
export function fetch (url, params) {
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

// function fetch(type){

// }

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
  url += '?' + params
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
  /**
   * 用户登录
   */
  Login (params) {
    return fetch(URLS.login, params)
  },
  getAddressJson () {
    return fetch('/address/', {addressId: 1})
  }
}

export {post, get}
