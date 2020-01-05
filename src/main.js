import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import lightboxjs from 'lightbox2/dist/js/lightbox-plus-jquery.js'
import lightboxcss from 'lightbox2/dist/css/lightbox.css'


Vue.use([lightboxjs,lightboxcss])

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
