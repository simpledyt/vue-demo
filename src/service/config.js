import Vue from 'vue'
import axios from 'axios'
import Qs from 'qs'
import ProgressBar from '../components/progress-bar'
// import router from '../router'

Vue.prototype.$axios = axios

let bar = Vue.prototype.$bar = new Vue(ProgressBar).$mount()
document.body.appendChild(bar.$el)

// const isProd = process.env.NODE_ENV === 'production'
/* eslint-disable */
var baseURL = process.env.NODE_ENV === 'production' ? /^(.*\/\/[^\/]*\/).*$/.exec(window.location.href)[1] : '/'
/* eslint-enable */

axios.defaults.baseURL = baseURL + 'api2'

// export const baseURL = isProd ? 'http://192.168.100.19/' : process.env.BASE_API

// 30秒中断请求
axios.defaults.timeout = 30000

// 拦截发送请求 application/x-www-form-urlencoded application/json
axios.interceptors.request.use(
  config => {
    if (config.url === 'insurance/car/save' || config.url === 'insurance/car/modify') {
      config.headers['Content-Type'] = 'application/json'
    } else {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    bar.start()
    let token = localStorage.getItem('token')
    // let eid = localStorage.getItem('eid')
    // 请求头加上token
    // console.log(token)
    if (token) {
      config.headers['accessToken'] = token
    }
    return config
  },
  err => {
    bar.finish()
    return Promise.reject(err)
  }
)

// 拦截返回结果
axios.interceptors.response.use(
  res => {
    bar.finish()
    return res
  },
  err => {
    bar.finish()
    // 账号或密码错误
    console.log(err.response.status)
    if (err.response.status === 900) {
      Vue.prototype.$message({
        message: err.response.data.message,
        type: 'error'
      })
    } else if (err.response.status === 408) {
      // 没有权限
      Vue.prototype.$alert(err.response.data.message + err.response.status, '系统提示', { type: 'error' })
    } else if (err.response.status === 401) {
      // 登录过期
      localStorage.removeItem('token')
      Vue.prototype.$alert(err.response.data.message + err.response.status, '系统提示', { type: 'error' })
    } else if (err.response.status === 504) {
      Vue.prototype.$alert('服务器连接超时，请稍后重试！', '系统提示', { type: 'error', confirmButtonText: '确定' })
    } else if (err.response.status === 500) {
      // console.log(err.response.status)
      Vue.prototype.$alert(err.response.data.message + err.response.status, '系统提示', { type: 'error', confirmButtonText: '确定' })
    } else {
      Vue.prototype.$alert(err.response.data.message + err.response.status, '系统提示', { type: 'error' })
    }
    return Promise.reject(err)
  }
)

/**
 * request封装
 */
function fetchData (method, url, data = {}, isBlob) {
  // 获取验证码responseType设置
  if (isBlob === 'blob') {
    axios.defaults.responseType = 'blob'
  } else {
    axios.defaults.responseType = 'json'
  }
  data['siteId'] = 0
  return new Promise((resolve, reject) => {
    let request
    if (method === 'get' || method === 'delete') {
      request = axios[method](url, { params: data })
    } else {
      if (url === 'insurance/car/save' || url === 'insurance/car/modify') {
        request = axios[method](url, data)
      } else {
        // post 接口参数序列化
        request = axios[method](url, Qs.stringify(data))
      }
    }
    request
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function APIURL () {
  return axios.defaults.baseURL
}

export function get (url, params, isBlob) {
  return fetchData('get', url, params, isBlob)
}

export function post (url, data) {
  return fetchData('post', url, data)
}

export function put (url, data) {
  return fetchData('put', url, data)
}

export function remove (url, params) {
  return fetchData('delete', url, params)
}

export function upload (url, data) {
  const formData = new FormData()
  Object.keys(data).forEach((child) => {
    formData.append(child, data[child])
  })
  return post(url, formData)
}
