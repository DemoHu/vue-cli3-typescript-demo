/*
 * @Author: Siwen
 * @Date: 2019-08-08 15:20:25
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-14 15:34:30
 * @Description: 第三方插件载入
 */
import Vue from 'vue'
import { Button, Table, TableColumn, Breadcrumb, BreadcrumbItem,
  DatePicker, Input, Icon, Message, Notification
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(DatePicker)
Vue.use(Input)
Vue.use(Icon)
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message


