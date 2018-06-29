import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Documentos from '@/components/Documentos'
import Home from '@/components/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/documentos',
      name: 'Documentos',
      component: Documentos
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
