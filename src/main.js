import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'
import store from './store/store'
import VeeValidate from 'vee-validate'

import 'vuetify/dist/vuetify.min.css'

Vue.use(VeeValidate);
Vue.use(Vuetify, { iconfont: 'fa', });

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
