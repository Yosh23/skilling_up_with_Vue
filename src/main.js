import Vue from 'vue'
import App from './App.vue'
// these 4 lines of code are how you imoprt and use vue-material
import { MdButton } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(MdButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
