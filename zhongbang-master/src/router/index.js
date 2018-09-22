import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/homepage/Home'
import Bill from '@/views/billpage/Bill'
import Com from '@/views/compage/Com'
import Me from '@/views/mepage/Me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/bill',
      name: 'bill',
      component: Bill
    },
    {
      path: '/com',
      name: 'com',
      component: Com
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    }
  ]
})
