// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'sanitize.css';
import Vue from 'vue';
import Fragment from 'vue-fragment';
import App from './App'
import router from './router'
import Antd from 'ant-design-vue/es'
import 'ant-design-vue/dist/antd.css'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false

Vue.use(Fragment.Plugin)
Vue.use(Antd)
Vue.use(ViewUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
