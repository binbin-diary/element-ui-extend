import Vue from 'vue';
import VueRouter from 'vue-router'
import app from './app';
import hlUi from 'main/index.js';
import routes from './router/index';

Vue.use(hlUi);
Vue.use(VueRouter);

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: (h) => h(app)
})