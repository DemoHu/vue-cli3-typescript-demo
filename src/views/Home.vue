<!--
 * @Author: Siwen
 * @Date: 2019-08-08 13:42:48
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-12 17:52:22
 * @Description: 首页
 -->
<template>
  <div class="home">
    <section class="banner">
      <h2>全球彩种开奖数据查询中心</h2>
      <p>链彩网平台是面向网络媒体、彩票行业客户、第三方彩票销售或分析机构等用户提供专业权威的开奖数据</p>
      <div class="search_box">
        <input v-model="lottery" placeholder="请输入彩种名称" class="search_ipt" @keyup.enter="search">
        <button class="search_btn" @click="search">
          <i class="el-icon-search"></i>搜索
        </button>
      </div>
    </section>
    <section class="introduce">
      <div class="notice">
        <div class="info">
          <img src="@/assets/images/notice_icon.png" class="notice_icon">
          <span>公告</span>
          <p>链彩网平台是面向网络媒体、彩票行业客户、第三方彩票销售或分析机构等用户提供专业权威的开奖数据</p>
        </div>
        <div class="date">2019-08-07</div>
      </div>
      <ul class="list_box container">
        <li v-for="(item, index) in introduceList" :key="index">
          <img :src="item.icon" alt="">
          <div class="text">
            <h4>{{ item.title }}</h4>
            <p class="tips">{{ item.tips }}</p>
          </div>
        </li>
      </ul>
    </section>
    <section class="lottery_box container">
      <lottery-card v-for="(item, index) in 3" :key="index"></lottery-card>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import LotteryCard from '@/components/Home/LotteryCard.vue'
@Component({
  components: {
    LotteryCard
  }
})
export default class Home extends Vue {
  private lottery: string = ''
  private introduceList: { title: string, tips: string, icon: string } [] = [
    { title: '海量彩票数据查询', tips: '囊括全球 各种玩法', icon: require('@/assets/images/introduce_search.png') },
    { title: '官方数据来源', tips: '准确、稳定、丰富', icon: require('@/assets/images/introduce_auth.png') },
    { title: '最新、最快、最热玩法', tips: '区块链开奖境外开奖', icon: require('@/assets/images/introduce_fly.png') }
  ]
  /**搜索彩种 */
  private search() {
    console.log(this.lottery)
  }
}
</script>
<style lang="scss">
.home {
  .banner {
    width: 100%;
    height: 500px;
    @include background-func("../assets/images/banner.png");
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      color: $white;
      font-size: 34px;
      line-height: 50px;
      margin-top: 50px;
    }
    p {
      color: $white;
      font-size: 16px;
      margin-top: 20px;
    }
    .search_box {
      width: 600px;
      height: 100px;
      margin-top: 100px;
      background-color: rgba(0,0,0,.15);
      display: flex;
      justify-content: center;
      align-items: center;
      .search_ipt {
        width: 440px;
        height: 42px;
        background-color: $white;
        padding-left: 12px;
        border: 0px;
        &::placeholder {
          color: #bbb;
          font-size: 14px;
        }
      }
      .search_btn {
        width: 108px;
        height: 42px;
        background-color: $white;
        border: 0px;
        color: $main-color;
        font-weight: 700;
        position: relative;
        cursor: pointer;
        &::after {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          top: 10px;
          width: 1px;
          height: 20px;
          background-color: #cfcfcf;
        }
        .el-icon-search {
          margin-right: 5px;
          color: $main-color;
          font-weight: 700;
        }
      }
    }
  }
  .introduce {
    height: 180px;
    background-color: $white;
    position: relative;
    .list_box.container {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      li {
        width: 33.333%;
        display: flex;
        margin-top: 30px;
        justify-content: center;
        color: $introduce-item;
        img {
          width: 80px;
          height: 72px;
        }
        h4 {
          font-size: 20px;
        }
        .tips {
          font-size: 14px;
          margin-top: 10px;
        }
      }
    }
    .notice {
      width: 75%;
      max-width: 1280px;
      height: 54px;
      background-color: $white;
      box-shadow: 0px 0px 8px 0px rgba(63, 73, 84, 0.2);
      border-radius: 6px;
      position: absolute;
      top: -26px;
      left: 50%;
      transform: translate(-50%);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      font-size: 14px;
      color: $text6;
      .info {
        display: flex;
        align-items: center;
        .notice_icon {
          width: 18px;
          height: 14px;
        }
        span {
          color: $main-color;
          font-weight: 700;
          padding: 0 12px 0 10px;
        }
      }
      .date {
        color: $text9;
      }
    }
  }
  .lottery_box {
    min-height: 500px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 42px;
    margin-bottom: 90px;
  }
}
</style>
