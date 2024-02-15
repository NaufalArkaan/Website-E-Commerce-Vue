import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue';
import App from './App.vue'
import Home from './Home.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import { store } from './store/index'

// import { store } from './components/store/index.js';

const app = createApp(App);
const home = createApp(Home)
// Gunakan store VueX
app.use(store);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const routerr = createRouter({
  history: createWebHistory(),
  routes,
});
// Gunakan router Vue
app.use(router);
home.use(routerr);
// Pasang aplikasi ke elemen dengan id "app"
app.mount('#app');

// app.use(store)

import 'bootstrap/dist/js/bootstrap.js';