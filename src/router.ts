/*
 * @Author: Siwen
 * @Date: 2019-08-08 13:42:48
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-23 11:21:47
 * @Description: 路由管理
 */
import Vue from 'vue'
import Router from 'vue-router'
process.env.NODE_ENV !== 'production' && Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: () => import('@/views/Home.vue') },
    { path: '/history', name: 'history', component: () => import('@/views/History.vue') },
    { path: '/historyContent', name: 'historyContent', component: () => import('@/views/HistoryContent.vue') },
    { path: '*', component: () => import('@/views/404.vue') }
  ]
})
