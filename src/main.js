// main.js

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './components/Home.vue'
import './assets/stylesheets/main.scss';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/*', component: Home }
  ]
})

new Vue({
  router,
  template: `
    <div>
      <a class="skip_to_content" href="#main-content">Skip to Content</a>
      <router-view></router-view>
    </div>
  `
}).$mount('#app')