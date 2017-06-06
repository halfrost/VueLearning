import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/homePage'
import Issues from '@/pages/issues'
import Products from '@/pages/products'
import GoodsCart from '@/pages/goodsCart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/issues',
    name: 'Issues',
    component: Issues
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/goodscart',
    name: 'GoodsCart',
    component: GoodsCart
  }

  ]
})
