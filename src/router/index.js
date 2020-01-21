import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main/Main'
import ProductDetail from '@/components/ProductDetail/ProductDetail'
import SearchResult from '@/components/SearchResult/SearchResult'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/ProductDetail',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/SearchResult/:key',
      name: 'SearchResult',
      component: SearchResult
    }
  ]
})
