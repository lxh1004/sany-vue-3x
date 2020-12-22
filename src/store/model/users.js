const state = {
  name: '蜡笔小仙女',
  doneTodosCount: 1110,
  anotherName: 'my baby'
}

const mutations = {
  setName(state, name) {
    state.name = name
  }
}
const actions = {
  setMyName({ commit, state }, name) {
    commit('setName', name)
  }
}
const getters = {
  getName(state) {
    return state.name
  },
  getDoneTodosCount(state) {
    return state.doneTodosCount
  },
  getAnotherName(state) {
    return state.anotherName
  }
}

export default {
  namespaced: true, // 增加命名空间
  state,
  mutations,
  actions,
  getters
}