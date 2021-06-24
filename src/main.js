import Vue from "vue"
import App from "./eewc-app.vue"
import vuetify from "./plugins/vuetify"
import vueCustomElement from 'vue-custom-element'

Vue.config.productionTip = false
Vue.use(vueCustomElement);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app")
