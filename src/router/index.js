import { createRouter,createWebHashHistory} from "vue-router";
import Main from '@/components/Main/Main'
import ProductDetail from '@/components/ProductDetail/ProductDetail'
import SearchResult from '@/components/SearchResult/SearchResult'
import DownLoad from '@/components/Main/DownLoad'

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
  },
  {
    path: '/downLoad',
    name: 'DownLoad',
    component: DownLoad
  }
]


export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
