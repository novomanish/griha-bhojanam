// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFirestore from 'vue-firestore'
import Vuetify from 'vuetify'
import('vuetify/dist/vuetify.min.css')

// explicit installation required in module environments
Vue.use(Vuetify)
Vue.use(VueFirestore)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
