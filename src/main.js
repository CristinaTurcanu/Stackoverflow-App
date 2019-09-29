import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import BootstrapVue from "bootstrap-vue";
import router from "./router";
import "./validation";
import store from "./store/store";
import "../src/design/index.scss";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
