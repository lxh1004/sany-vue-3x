import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./element/element";

import echarts from 'echarts' //引入echarts
Vue.prototype.$echarts = echarts //引入组件
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
