import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./assets/Common/reset.css";
import "./assets/JS/setHtmlFontSize";
import "./plugins/element";
import "./assets/Fonts/iconfont.css";
import "./assets/Common/common.scss"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
