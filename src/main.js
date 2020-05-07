import Vue from 'vue'
import App from './App.vue'
import { ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
extend('required',{
  ...required,
  message: 'this field is required'
});
extend('min', {
  // lets make our validate more dynamic and now we can customize our
  // length validator with our min param like this min:3
  // and our text dynamically changes as well
  validate(value, {min}) {
    return value.length >= min;
  },
  params: ['min'],
  message: (fieldName, placeholders) => {
    return `the ${fieldName} field must have ${placeholders.min} or more characters`
  }
})
// using Vue.component makes validation global and can now use inside my Tasks.vue
Vue.component('ValidationProvider', ValidationProvider);
// these 4 lines of code are how you imoprt and use vue-material
import { MdButton } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(MdButton);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
