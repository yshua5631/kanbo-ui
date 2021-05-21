import { createRouter,createWebHashHistory} from "vue-router";
import Main from '@/components/Main/Main'
import ProductDetail from '@/components/ProductDetail/ProductDetail'
import SearchResult from '@/components/SearchResult/SearchResult'

const routes = [
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


export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
