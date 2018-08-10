/*
 * @Author: dyt
 * @Date: 2018-07-04 09:35:28
 * @Last Modified by: simpledyt
 * @Last Modified time: 2018-08-09 15:58:38
 */
// store.commit('GET_MENU')
import {
  GET_MENU,
  TOGGLE_BAR,
  GET_USER_INFO,
  REMOVE_USER_INFO
} from './mutation-types.js'
export default {
  [GET_MENU] (state) {
    console.log(state)
  },
  [TOGGLE_BAR] (state) {
    state.toggleBar = !state.toggleBar
  },
  [GET_USER_INFO] (state, res) {
    state.me = res
  },
  [REMOVE_USER_INFO] (state) {
    state.me = {
      user: {}
    }
    sessionStorage.removeItem('user')
  }
}
