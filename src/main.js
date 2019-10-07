import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import BootstrapVue from "bootstrap-vue";
import router from "./plugins/router";
import "./plugins/validation";
import { toDateFormat, toDateFormatWithHours} from "./filters/date-filter";
import store from "./store/store";
import "@/assets/styles/index.scss";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.filter('toDateFormat', toDateFormat)
Vue.filter('toDateFormatWithHours', toDateFormatWithHours)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
