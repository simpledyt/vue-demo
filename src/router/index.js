import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/store'
import Layout from '@/components/layout'

Vue.use(Router)

const routes = [{
  path: '*',
  component: () => import('../../src/view/extension/404')
}, {
  path: '/index',
  meta: { auth: false, title: '登录' },
  component: () => import('../../src/view/index')
}, {
  path: '/dashboard',
  component: Layout,
  redirect: '/dashboard/index',
  children: [{
    path: '/dashboard/index',
    component: () => import('../../src/view/dashboard'),
    name: 'dashboard',
    meta: { auth: true, title: '首页' }
  }]
}]

const router = new Router({
  // mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

router.beforeEach(async (to, from, next) => {
  // 不需要登录
  // if (!to.matched.some(record => record.meta.auth)) {
  next()
  //   return
  // }

  // let token = localStorage.getItem('token')
  // if (token) {
  //   // 登录后强制刷新页面，用户信息从sessionStorage获取
  //   let me = sessionStorage.getItem('me')
  //   if (me) {
  //     // store.commit('GET_USER_INFO', JSON.parse(me))
  //   } else {
  //     // store.dispatch('getUserInfo')
  //   }
  //   next()
  // } else {
  //   next('/index')
  // }

  // 未登录，本地也无token，跳转到登录页，同时记录来源页，登录后可跳转到相应页面
  // next(`/?redirectPath=${to.fullPath}`)
})

export default router
