/*
 * @Author: dyt
 * @Date: 2018-07-04 09:56:49
 * @Last Modified by: simpledyt
 * @Last Modified time: 2018-08-06 14:03:10
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
import tagsView from './modules/tagsView'

Vue.use(Vuex)

const state = {
  menu: null, // 当前菜单
  me: {
    user: {}
  },
  toggleBar: false
}

export default new Vuex.Store({
  modules: {
    tagsView
  },
  state,
  getters,
  actions,
  mutations
})
