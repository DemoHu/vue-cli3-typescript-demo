<!--
 * @Author: Siwen
 * @Date: 2019-08-08 13:42:48
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-14 15:40:24
 * @Description: 开奖历史详情
 -->
<template>
  <div class="history_content">
    <div class="header_title container">
      <div class="title">{{ lotteryName }}开奖历史</div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>开奖查询</el-breadcrumb-item>
        <el-breadcrumb-item>高频开奖</el-breadcrumb-item>
        <el-breadcrumb-item>{{ lotteryName }}开奖历史</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
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
    </div>
    <div class="table_list container">
      <el-date-picker
        v-model="dateVal"
        type="date"
        size="mini"
        placeholder="筛选日期">
      </el-date-picker>
      <el-table
        header-row-class-name="header_class"
        row-class-name="row_class"
        :data="tableData">
        <el-table-column label="期号" width="220" prop="period"></el-table-column>
        <el-table-column label="开奖时间" width="220" prop="date"></el-table-column>
        <el-table-column label="最新开奖结果" prop="number">
          <template slot-scope="scope">
            <span v-for="(item, index) in scope.row.number" :key="index" class="number_item">
              {{ item }}
            </span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
interface tableData {
  period: string
  date: string
  number: Array<string | number>
}
@Component
export default class History extends Vue {
  private tabsType: string = '1'
  private tabsList: {name: string, type: string}[] = [
    { name: '开奖查询', type: '1' },
    { name: '走势图', type: '2' }
  ]
  private dateVal: string = ''
  private tableData: tableData[] = [
    { period: '201907293922', date: '2019-7-29 15:23:11', 
      number: [1, 4, 5, 43, 6, 11, 20, 1, 4, 5, 43, 6, 11, 20, 1, 4, 5, 43, 6, 11]
    },
    { period: '201907293922', date: '2019-7-29 15:23:11', 
      number: [1, 4, 5, 43, 6, 11, 20, 1, 5, 43, 6, 11]
    },
    { period: '201907293922', date: '2019-7-29 15:23:11', 
      number: [1, 11, 20, 1, 4, 5, 43, 6, 11, 20, 1, 4, 5, 43, 6, 11]
    },
    { period: '201907293922', date: '2019-7-29 15:23:11', 
      number: [15, 43, 6, 11, 20, 1, 4, 5, 43, 6, 11]
    },
    { period: '201907293922', date: '2019-7-29 15:23:11', 
      number: [1, 4, 5, 43, 4, 5, 43, 6, 11, 20, 1, 4, 5, 43, 6, 11]
    }
  ]
  get lotteryName() {
    return this.$route.query.lotteryName
  }
  private changeTabs(type: string) {
    if (type === '2') {
      this.$notify.info({
        title: '敬请期待',
        duration: 2500,
        message: '走势图暂未开放'
      })
      return
    }
    this.tabsType = type
  }
}

</script>
<style lang="scss">
.history_content {
  .header_title {
    height: 50px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid #bbb;
    color: $main-color;
    .el-breadcrumb__item:nth-child(3) {
      .el-breadcrumb__inner {
        color: $main-color;
      }
    }
  }
  .tabs {
    width: 380px;
    height: 42px;
    border: 2px solid $main-color;
    border-radius: 4px;
    color: $main-color;
    font-size: 16px;
    display: flex;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 20px;
    .tabs_item {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &.active {
        color: $white;
        background-color: $main-color;
      }
    }
  }
  .table_list {
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
      }
      td:last-child {
        padding-right: 20px;
      }
      td:nth-child(3) {
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
            color: $main-color;
            background-image: linear-gradient(0deg, 
              #ffffff 0%, 
              #f2f2ed 100%);
            border: solid 1px #e4e4df;
          }
        }
      }
    }
    .el-date-editor {
      position: absolute;
      right: 30px;
      top: 10px;
      width: 150px;
      height: 32px;
      z-index: 2;
      .el-icon-date {
        color: $main-color;
      }
      .el-input__inner:focus {
        border-color: transparent;
      }
    }
  }
}
.el-date-table {
  td:hover,
  td.today {
    span {
      color: $main-color;
    }
  }
  td.current:not(.disabled) {
    span {
      background-color: $main-color;
    }
  }
}
</style>
