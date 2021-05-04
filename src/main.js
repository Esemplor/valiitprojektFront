import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  vuetify,
  router,
  axios,
  render: h => h(App)
}).$mount('#app')

// new Vue({
//   router,
//   render: function (h) {
//     return h(App)
//   }
// }).$mount('#app')