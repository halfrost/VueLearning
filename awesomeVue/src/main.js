// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'
import Layout from './components/layout'
import * as uiv from 'uiv'
// import BootstrapVue from 'bootstrap-vue'

// Vue.use(BootstrapVue)
Vue.use(uiv)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: {
    Layout
  }
  //  render: h => h(App)
})
