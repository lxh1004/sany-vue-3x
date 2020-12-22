import Vue from 'vue'
import Vuex from 'vuex'
import users from './model/users'
import list from './model/list'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    list
  }
})
