<!--
 * @Author: Siwen
 * @Date: 2019-08-08 13:42:48
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-23 11:22:54
 * @Description: App入口
 -->
<template>
  <div id="app">
    <menu-Header v-if="!page404"></menu-Header>
    <router-view class="router_view" />
    <footer-copy-right v-if="!page404"></footer-copy-right>
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
  private page404: boolean = false
  public created() {
    this.$event.$on('page404', (status: boolean) => {
      this.page404 = status
    })
  }
  public mounted() {}
}
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
