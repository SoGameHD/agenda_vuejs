import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import HomePage from './views/HomePage.vue';
import NeighborhoodPage from './views/NeighborhoodPage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/neighborhood', name: 'neighborhood', component: NeighborhoodPage }
];

const router = new VueRouter({
  routes
});

new Vue({router, render: h => h(App)}).$mount('#app');
