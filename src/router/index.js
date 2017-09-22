import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import Slack from '@/components/Slack'
import SignUp from '@/components/SignUp'
import Top from '@/components/Top'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/Slack',
      name: 'Slack',
      component: Slack
    }
  ]
})
