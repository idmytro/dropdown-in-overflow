import Vue from 'vue';
import ElementUI from 'element-ui';

import App from './App.vue';
import router from './router';
// eslint-disable-next-line import/no-unresolved
import 'windi.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
