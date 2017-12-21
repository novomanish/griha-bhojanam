import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu'
import Dish from '@/components/Dish'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Menu', component: Menu},
    {path: '/dish', name: 'Dish', component: Dish}
  ]
})
