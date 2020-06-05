import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

//import router
// import VueRouter from 'vue-router';
// //use
// Vue.use(VueRouter);
// let router = new VueRouter({
//   routes: [{}, {}, {}, {}],
// });

//import ui kit
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  render: (h) => h(App),
  // router,
}).$mount('#app');
