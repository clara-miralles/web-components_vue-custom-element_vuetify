import Vue from "vue"
import App from "./eewc-app.vue"
import vuetify from "./plugins/vuetify"
import vueCustomElement from "vue-custom-element"
import DemoBasic from "./components/demo-basic";

Vue.config.productionTip = false
Vue.use(vueCustomElement);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app")

Vue.config.ignoredElements = ["demo-basic"]; //to avoid warning element not registered.
Vue.customElement("demo-basic", DemoBasic); // shadowDOM.

<script src="./eewc-app.vue"></script>