import Vue from 'vue'
import App from './App.vue'
import VueWindowSize from 'vue-window-size'

Vue.use(VueWindowSize) // to compute the windowWidth and windowHeight

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
