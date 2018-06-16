// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store/store'
import Axios from 'axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import colors from 'vuetify/es5/util/colors'
import 'font-awesome/css/font-awesome.css'

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.darken1, // #E53935
    secondary: colors.green.lighten4, // #FFCDD2
    accent: colors.red.base // #3F51B5
  }})
Vue.config.productionTip = false
Vue.use(Axios)
/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
