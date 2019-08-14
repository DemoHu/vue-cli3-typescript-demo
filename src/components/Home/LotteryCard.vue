<!--
 * @Author: Siwen
 * @Date: 2019-08-08 13:42:48
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-13 15:14:05
 * @Description: 首页高频&区块链彩种列表卡
 -->
<template>
  <div class="home_lottery_card">
    <div class="header">高频彩种</div>
    <ul class="lottery_list">
      <li v-for="(item, index) in lotteryList" :key="index" class="li_card_item">
        <div class="info">
          <div class="left">
            <div class="title">{{ item.title }}</div>
            <div v-if="item.period" class="period">{{ item.period }}期</div>
          </div>
          <div class="right date">{{ item.date }}</div>
        </div>
        <ul class="number">
          <li
            v-for="(items, indexs) in item.number"
            :key="indexs"
            class="number_item">
            {{ items }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
interface lotteryList {
  title: string
  period: string | number
  date: string | number
  number: Array<string | number>
}
@Component
export default class Header extends Vue {
  private lotteryList: lotteryList[] = [
    { title: '北京快乐8', period: '23232312', date: '2019-8-2 14:21:24', number: [5, 2, 11, 4, 23, 5, 1, 53, 5] },
    { title: '重庆时时彩', period: '201908123239', date: '2019-8-2 14:21:24', number: [5, 2, 11, 14, 23, 5, 19, 5] },
    { title: 'PC28', period: '23232312', date: '2019-8-2 14:21:24', number: [5, 2, 11, 4, 23, 5, 1, 53, 5, 11, 4, 23, 5, 1, 3] },
    { title: '6HC', period: '6563476', date: '2019-8-2 14:21:24', number: [5, 2, 11, 4, 23, 5, 1, 53, 5] }
  ]
}
</script>
<style lang="scss">
.home_lottery_card {
  max-width: 420px;
  @media screen and (max-width: 1445px) {
    max-width: 390px;
  }
  min-height: 450px;
  background-color: $white;
  box-shadow: 0px 0px 10px 0pxrgba(63, 73, 84, 0.08);
	border-radius: 6px;
  .header {
    height: 54px;
    background-color: $main-color;
    border-radius: 6px 6px 0 0;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: $white;
    padding: 0 20px;
  }
  .lottery_list {
    .li_card_item {
      min-height: 100px;
      border-bottom: 1px solid #e5e5e5;
      padding: 10px 20px 0 20px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      &:last-child {
        border-bottom: 0px;
      }
      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        color: $text3;
        margin-bottom: 12px;
        .left {
          display: flex;
          align-items: center;
          .title {
            font-weight: 700;
            margin-right: 18px;
          }
        }
        .date {
          color: $text9;
        }
      }
      .number {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        .number_item {
          width: 30px;
          height: 30px;
          margin: 0px 8px 8px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: linear-gradient(0deg, #ffffff 0%, #f9f9f6 67%, #f2f2ed 100%);
          border: solid 1px #e4e4df;
          color: $main-color;
          font-size: 14px;
          border-radius: 50%;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
