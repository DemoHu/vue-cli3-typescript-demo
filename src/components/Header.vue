<!--
 * @Author: Siwen
 * @Date: 2019-08-08 13:42:48
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-14 15:41:07
 * @Description: 顶部导航栏
 -->
<template>
  <div class="top_header">
    <header class="container">
      <ul class="menu_list">
        <router-link to="/">
          <img src="@/assets/images/logo.png" alt="链彩网" class="logo">
        </router-link>
        <li
          v-for="(item, index) in menuList"
          :key="index"
          :class="{ 'active': $route.path === item.url }"
          @click="routeTo(item.url)">
          {{ item.name }}
        </li>
      </ul>
      <div class="login_register" @click="loginRegister">
        <router-link to="" class="register">注册</router-link>
        <router-link to="" class="login">登录</router-link>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Header extends Vue {
  private menuList: { name: string, url: string } [] = [
    { name: '首页', url: '/' },
    { name: '开奖历史', url: '/history' },
    { name: '走势', url: '' }
  ]
  private routeTo(url: string) {
    if (!url) {
      this.$notify.info({
        title: '敬请期待',
        duration: 2500,
        message: '该功能暂未开放'
      })
      return
    }
    this.$router.push({ path: url })
  }
  /**登录注册 */
  private loginRegister() {
    this.$notify.info({
      title: '敬请期待',
      duration: 1500,
      message: '暂不需登录及注册'
    })
  }
}
</script>
<style lang="scss">
.top_header {
  border-bottom: 2px solid $main-color;
  .container {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .menu_list {
      display: flex;
      align-items: center;
      padding-left: 0;
      margin-left: 20px;
      .logo {
        width: 313px;
        height: 36px;
        margin-right: 30px;
      }
      li {
        font-size: 14px;
        color: $menu-item;
        border-right: 1px solid #ccc;
        padding: 0 30px;
        cursor: pointer;
        &:last-child {
          border-right: 0px;
        }
        &:hover, &.active {
          color: $menu-item-active;
          font-weight: 600;
        }
      }
    }
    .login_register {
      font-size: 14px;
      color: #666;
      margin-right: 20px;
      .register {
        color: #fff;
        padding: 7px 10px;
        background-color: $main-color;
        border-radius: 4px;
        margin-right: 10px;
      }
    }
  }
}
</style>
