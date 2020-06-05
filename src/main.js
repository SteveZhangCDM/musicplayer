import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// import router
import VueRouter from 'vue-router';

//use

Vue.use(VueRouter);
import discovery from './components/01discovery.vue';
import recommendmusic from './components/02recommendmusic.vue';
import newsongs from './components/03newsongs.vue';
import newmvs from './components/04newmvs.vue';

let router = new VueRouter({
  routes: [
    {
      //address
      path: '/discovery',
      //component
      component: discovery,
    },
    {
      //address
      path: '/',
      //component
      component: discovery,
    },
    {
      //address
      path: '/recommendmusic',
      //component
      component: recommendmusic,
    },
    {
      //address
      path: '/newsongs',
      //component
      component: newsongs,
    },
    {
      //address
      path: '/newmvs',
      //component
      component: newmvs,
    },
  ],
});

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
