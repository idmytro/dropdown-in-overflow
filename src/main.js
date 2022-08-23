import Vue from 'vue';
import ElementUI from 'element-ui';

import { BootstrapVue } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// eslint-disable-next-line import/no-unresolved
import 'windi.css';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
