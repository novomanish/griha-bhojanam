import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Dish from '@/components/Dish'
import Item from '@/components/Item'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Dashboard', component: Dashboard},
    {path: '/dish', name: 'Dish', component: Dish},
    {path: '/item', name: 'Item', component: Item}
  ]
})
