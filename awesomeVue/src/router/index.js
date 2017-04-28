import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Apple from '@/components/apple'
import Banana from '@/components/banana'
import RedApple from '@/components/redapple'

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
      path: '/apple',
      children: [
        {
          path: 'red',
          name: 'redApple',
          component: RedApple
        }
      ],
      component: Apple
    },
    {
      path: '/banana',
      component: Banana
    }
  ]
})
