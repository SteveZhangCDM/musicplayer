import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

//import
import VueRouter from 'vue-router';
//use
Vue.use(VueRouter);
//create
let router = new VueRouter();

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
