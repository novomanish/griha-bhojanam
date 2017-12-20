import Vue from 'vue'
import Router from 'vue-router'
import Dummy from '@/components/Dummy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dummy',
      component: Dummy
    }
  ]
})
