<!--
 * @Author: Siwen
 * @Date: 2019-08-08 13:42:48
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-14 15:25:07
 * @Description: 开奖历史
 -->
<template>
  <div class="history">
    <ul class="tabs">
      <li
        v-for="(item, index) in tabsList"
        :key="index"
        class="tabs_item"
        :class="{ 'active': item.type === tabsType }"
        @click="changeTabs(item.type)">
        {{ item.name }}
      </li>
    </ul>
    <div class="table_list container">
      <el-input v-model="searchVal" size="mini" placeholder="输入彩种名称" class="search_lottery">
        <i slot="suffix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-table
        header-row-class-name="header_class"
        row-class-name="row_class"
        :data="tableData.filter(data => !searchVal || data.name.toLowerCase().includes(searchVal.toLowerCase()))">
        <el-table-column label="彩种名称" :width="+rectWidth <= 1445 ? '200px' : '210px'" prop="name">
          <template slot-scope="scope">
            <img :src="scope.row.icon" alt="">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="种类" width="80px" prop="type"></el-table-column>
        <el-table-column label="期号" :width="+rectWidth <= 1445 ? '130px' : '140px'" prop="period"></el-table-column>
        <el-table-column label="开奖频率" :width="+rectWidth <= 1445 ? '100px' : '130px'" prop="rate"></el-table-column>
        <el-table-column label="最新开奖时间" :width="+rectWidth <= 1445 ? '160px' : '180px'" prop="date"></el-table-column>
        <el-table-column label="最新开奖结果" :width="+rectWidth <= 1445 && '400px'" prop="number">
          <template slot-scope="scope">
            <span v-for="(item, index) in scope.row.number" :key="index" class="number_item">
              {{ item }}
            </span>
          </template>
        </el-table-column>
        <el-table-column align="right" :width="+rectWidth <= 1445 ? '130px' : '180px'">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleHistory(scope.row.name)">历史记录</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
interface tableData {
  icon: string
  name: string
  type: string | number
  period: string
  rate: string
  date: string
  number: Array<string | number>
}
@Component
export default class History extends Vue {
  private tabsType: string = '1'
  private tabsList: {name: string, type: string}[] = [
    { name: '高频彩种', type: '1' },
    { name: '低频彩种', type: '2' },
    { name: '足竞彩', type: '3' },
    { name: '数字区块链彩种', type: '4' }
  ]
  private searchVal: string = ''
  private tableData: tableData[] = [
    { icon: require('@/assets/images/lottery_icon.png'), name: '北京PK10', type: '赛车', period: '201907293922', rate: '1.5分钟一期', date: '2019-7-29 15:23:11', 
      number: [1, 4, 5, 43, 6, 11, 20, 1, 4, 5, 43, 6, 11, 20, 1, 4, 5, 43, 6, 11]
    },
    { icon: require('@/assets/images/lottery_icon.png'), name: '极限冰壶彩', type: '赛车', period: '201907293922', rate: '1.5分钟一期', date: '2019-7-29 15:23:11', 
      number: [1, 4, 5, 43, 6, 11, 20, 1, 4, 5, 43]
    },
    { icon: require('@/assets/images/lottery_icon.png'), name: '好运快3(广西快3)', type: '快乐8', period: '201907293922', rate: '1.5分钟一期', date: '2019-7-29 15:23:11', 
      number: [1, 4, 5, 43, 6, 11, 20, 1, 4, 5, 43, 6, 11, 20, 1, 4, 5, 43, 6, 11]
    },
    { icon: require('@/assets/images/lottery_icon.png'), name: '加拿大快乐8', type: '飞艇', period: '201907293922', rate: '1.5分钟一期', date: '2019-7-29 15:23:11', 
      number: [1, 4, 5, 43, 6, 4, 5, 43, 6, 11]
    }
  ]
  get rectWidth() { //屏幕宽度
    return sessionStorage.getItem('rectWidth')
  }
  /**切换彩种类型
   * @param type string 彩种类型
   */
  private changeTabs(type: string) {
    this.tabsType = type
  }
  /**查看历史记录
   * @param name string 彩种名称
   * @param type string 彩种名称
   */
  private handleHistory(name: string) {
    this.$router.push({ path: '/historyContent', query: { lotteryName: name }})
  }
}

</script>
<style lang="scss">
.history {
  .tabs {
    height: 60px;
    background-color: $main-color;
    font-size: 14px;
    color: #f5c7cd;
    display: flex;
    justify-content: center;
    align-items: center;
    .tabs_item {
      padding: 0 65px;
      cursor: pointer;
      margin-top: 3px;
      // transition: all .3s ease-in-out;
      &::after {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background: $white;
        margin-top: 3px;
        transition: width .2s;
      }
      &:hover, &.active {
        color: $white;
        &::after {
          width: 100%;
        }
      }
      &:hover::after {
        width: 100%;
      }
    }
  }
  .table_list {
    margin-top: 30px;
    position: relative;
    .header_class {
      background-color: $main-color;
      padding: 0 40px;
      th {
        background-color: $main-color;
        padding: 13px 0;
        .cell {
          color: #f19aa5;
          font-size: 14px;
          display: flex;
          align-items: center;
        }
        &:first-child {
          padding-left: 20px;
        }
        &:last-child {
          padding-right: 20px;
        }
      }
    }
    .row_class {
      td:first-child {
        padding-left: 20px;
        .cell {
          display: flex;
          align-items: center;
          img {
            width: 36px;
            height: 36px;
          }
        }
      }
      td:last-child {
        padding-right: 20px;
      }
      td:nth-child(6) {
        .cell {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-wrap: wrap;
          .number_item {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 8px;
            font-weight: 700;
            color: $main-color;
            background-image: linear-gradient(0deg, 
              #ffffff 0%, 
              #f2f2ed 100%);
            border: solid 1px #e4e4df;
            &:nth-child(10), &:last-child {
              margin-right: 0;
            }
            &:nth-child(-n+10) {
              margin-bottom: 8px;
            }
          }
        }
      }
    }
    .search_lottery {
      position: absolute;
      right: 30px;
      top: 10px;
      width: 220px;
      height: 32px;
      z-index: 2;
      .el-input__inner:focus {
        border-color: transparent;
      }
    }
  }
}
</style>
