// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './utils/polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import './element-ui'
import Layout from './components/layout'
import titleMixin from './utils/titleMixin'
import { parseTime } from './utils/assist'

// Vue.config.productionTip = false

// 布局组件
Vue.component('layout', Layout)
// 全局混合，document.title
Vue.mixin(titleMixin)

Vue.filter('parseTime', parseTime)

Vue.prototype.JSONo = (t, b) => {
  return Object.assign({}, t, b)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
