
// 仓库文件
import Vue from 'vue'
// 导入Vuex
import Vuex from 'vuex'
Vue.use(Vuex)
import {
  getLocal
} from '../utils/mylocal';
export default new Vuex.Store({
  state: {
    user: getLocal("userInfo") || {}
  },
  mutations: {

  }
})