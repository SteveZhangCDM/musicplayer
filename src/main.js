import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// import router
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import discovery from './components/01discovery.vue';
import recommendmusic from './components/02recommendmusic.vue';
import newsongs from './components/03newsongs.vue';
import newmvs from './components/04newmvs.vue';
import result from './components/result.vue';

let router = new VueRouter({
  routes: [
    {
      path: '/discovery',
      component: discovery,
    },
    {
      path: '/',
      component: discovery,
    },
    {
      path: '/recommendmusic',
      component: recommendmusic,
    },
    {
      path: '/newsongs',
      component: newsongs,
    },
    {
      path: '/newmvs',
      component: newmvs,
    },
    {
      //address
      path: '/result',
      //component
      component: result,
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
