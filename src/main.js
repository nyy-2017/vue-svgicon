import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './icons' // svgIcons

Vue.use(ElementUI, { size: 'mini', zIndex: 3000 }) //全局配置 size


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
