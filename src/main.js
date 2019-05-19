import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Velocity from 'velocity-animate'

Object.defineProperty(Vue.prototype, '$vel', { value: Velocity });



Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
