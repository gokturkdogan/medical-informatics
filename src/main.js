import Vue from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'
import SvgIcon from "./components/baseIcon.vue"
import router from "./router"
import store from "./store"


Vue.config.productionTip = false
Vue.component('SvgIcon',SvgIcon)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
