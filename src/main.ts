import Vue from 'vue'
import App from './App.vue'

import './registerServiceWorker'
import router from './router'
import './icons'

import './assets/styles/index.scss'

// import module
import { forEach } from 'lodash'

// base components
import components from './components/base'

Vue.config.productionTip = false

forEach(components, (value, key) => {
  Vue.component(key, value)
})



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
