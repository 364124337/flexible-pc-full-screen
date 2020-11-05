import Vue from 'vue'
import App from './App.vue'
import '@/assets/main.scss'
import ECharts from 'vue-echarts'
import chinaMap from '@/assets/china.json'

// 手动引入 ECharts 各模块来减小打包体积
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/chart/pie'
// import 'echarts/lib/chart/scatter'
// import 'echarts/lib/chart/line'
// import 'echarts/lib/component/tooltip'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

ECharts.registerMap('china', chinaMap)
Vue.component('chart', ECharts)

new Vue({
  render: h => h(App),
}).$mount('#app')
