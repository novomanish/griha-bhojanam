import Vue from 'vue'
import Router from 'vue-router'
import Dummy from '@/components/Dummy'
import Menu from '@/components/Menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/dummy',
      name: 'Dummy',
      component: Dummy
    }
  ]
})
