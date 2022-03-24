import App from './App'
// 接受暴露出来方法用｛｝接受
import {myRequest} from './util/api.js'

// 挂载方法
// Vue.prototype.$myRequest=myRequest

Vue.filter('formatDate',(date)=>{
	const ndate = new Date(date)
	const year=ndate.getFullYear()
	const month=ndate.getMonth()
	const day=ndate.getDay()
	return year +'-'+month+'-'+day
})

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif