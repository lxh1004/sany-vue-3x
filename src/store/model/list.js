
/**
 * 项目列表接口
 */
export default {
  name: 'list',
  namespaced: true,  //增加命名空间
  state: {
    projectArr: [], //全部项目列表
    subArr: [], //指定子项目列表
  },
  getters: {
    getList(state) {
      return state.projectArr;
    },
    getSubArr(state) {
      return state.subArr;
    },

  },
  mutations: {
    GET_PROJECT(state, { paylaot }) {
      state.projectArr = paylaot
    },
    GET_SUB(state, { paylaot }) {
      state.subArr = paylaot
    },
    //key是数据名字，value是值
    setState(state, payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {
    //获取项目列表  不带参数的接口
    async getProjectListArr(context) {
      try {
        let res = await getProjectList();
        if (res.status == 200) {
          context.commit('GET_PROJECT', { paylaot: res.result });
        }
      } catch (error) {
        console.log(error);
      }
    },
    //获取子项目列表   //带参数的接口
    async getSubListArr({ commit }, msg) {
      try {
        let res = await getSubList(msg);
        if (res.status == 200) {
          commit('GET_SUB', { paylaot: res.result });
        }
      } catch (error) {
        console.log(error);
      }
    },

  },

}