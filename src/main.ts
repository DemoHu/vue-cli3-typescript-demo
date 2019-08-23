/*
 * @Author: Siwen
 * @Date: 2019-08-08 13:42:48
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-23 11:22:26
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/styles/index.scss'
import '@/plugins'
import '@/filters'
import '@/js/resizeHandler.js'
import uTils from '@/utils'
import * as api from '@/api'
// 记得前往shims-config.d.ts 配置声明
Vue.prototype.$utils = uTils
Vue.prototype.$api = api
Vue.prototype.$event = new Vue()

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
