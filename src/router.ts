/*
 * @Author: Siwen
 * @Date: 2019-08-08 13:42:48
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-14 14:06:35
 * @Description: 路由管理
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: () => import('@/views/Home.vue') },
    { path: '/history', name: 'history', component: () => import('@/views/History.vue') },
    { path: '/historyContent', name: 'historyContent', component: () => import('@/views/HistoryContent.vue') }
  ]
})
