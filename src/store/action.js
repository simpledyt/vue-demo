/*
 * @Author: dyt
 * @Date: 2018-07-04 09:56:30
 * @Last Modified by: simpledyt
 * @Last Modified time: 2018-08-09 18:57:56
 */
// store.dispatch('getMenu')
import * as api from '../service/api'
import { GET_MENU, GET_USER_INFO } from './mutation-types'
import router from '@/router'
export default {
  async getMenu ({ commit, state }) {
    let res = await api.getLoginCode()
    commit(GET_MENU, res)
  },
  async getUserInfo ({ commit }) {
    try {
      let res = await api.getUserInfo()
      commit(GET_USER_INFO, res.data)
      sessionStorage.setItem('me', JSON.stringify(res.data))
    } catch (e) {
      router.push('/index')
      console.log(e)
    }
  },
  async loginOut ({ commit }) {
    try {
      let curToken = await localStorage.getItem('token')
      await api.loginOut({ token: curToken })
      let clearMe = {me: {
        user: {},
        menus: {}
      }}
      commit(GET_USER_INFO, clearMe)
      sessionStorage.setItem('me', JSON.stringify(clearMe))
      localStorage.removeItem('token')
      this.$router.push('/')
    } catch (e) {
      router.push('/index')
      console.log(e)
    }
  }
}
