<!--
 * @Author: Siwen
 * @Date: 2019-08-08 13:42:48
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-12 18:39:51
 * @Description: App入口
 -->
<template>
  <div id="app">
    <menu-Header></menu-Header>
    <router-view class="router_view" />
    <footer-copy-right></footer-copy-right>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import menuHeader from '@/components/Header.vue'
import FooterCopyRight from '@/components/Footer.vue'
@Component({
  components: {
    menuHeader,
    FooterCopyRight
  }
})
export default class App extends Vue {
  public created() {}
  public mounted() {}
}
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
