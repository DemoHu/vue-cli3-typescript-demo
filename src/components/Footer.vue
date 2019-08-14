<!--
 * @Author: Siwen
 * @Date: 2019-08-08 13:42:48
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-12 18:41:55
 * @Description: 底部版权
 -->
<template>
  <footer class="footer">
    CopyRight © 2010-2019 链彩网 蜀ICP备17033890号  服务范围：本站仅提供彩票数据查询相关服务，无投注购彩业务。
  </footer>
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
    { name: '走势', url: '/trend' }
  ]
  private routeTo(url: string) {
    this.$router.push({ path: url })
  }
}
</script>
<style lang="scss">
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e5e8ef;
  font-size: 12px;
  color: $text9;
}
</style>
