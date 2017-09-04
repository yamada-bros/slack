import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Slack from '@/components/Slack'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Slack',
      name: 'Slack',
      component: Slack
    }
  ]
})
