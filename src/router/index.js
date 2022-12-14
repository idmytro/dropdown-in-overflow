import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import InputView from '../views/InputView.vue';
import BsVue from '../views/BsVue.vue';
import BsVueFixed from '../views/BsVueFixed.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/bs',
    name: 'bs',
    component: BsVue,
  },
  {
    path: '/fix',
    name: 'fix',
    component: BsVueFixed,
  },
  {
    path: '/i',
    name: 'i',
    component: InputView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
