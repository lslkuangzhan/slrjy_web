import Vue from 'vue'
import App from './App'
import router from './router'
import VueWechatTitle from 'vue-wechat-title'
import api from './api/index.js'
Vue.use(VueWechatTitle)
Vue.config.productionTip = false
Vue.prototype.$api = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App), 
  template: '<App/>',
  components: { App }
})
