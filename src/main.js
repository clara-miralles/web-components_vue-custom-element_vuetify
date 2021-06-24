import Vue from "vue"
import App from "./eewc-app.vue"
import vuetify from "./plugins/vuetify"
import vueCustomElement from "vue-custom-element"
import DemoBasic from "./components/demo-basic";
import SideMenu from "./components/eewc-navigation-sidebar";

Vue.config.productionTip = false
Vue.use(vueCustomElement);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app")

Vue.config.ignoredElements = ["demo-basic", "eewc-navigation-sidebar"]; //to avoid warning element not registered.
Vue.customElement("demo-basic", DemoBasic); // shadowDOM.
Vue.customElement("eewc-navigation-sidebar", SideMenu); // shadowDOM.