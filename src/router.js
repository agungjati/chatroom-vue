import Login from './Login.vue'
import Home from './Home.vue'
import Router from 'vue-router'

export const router = new Router({ 
    routes: [
      { path: '/', name: 'home', component: Home, }, 
      { path: '/login', name: 'login', component: Login, props: true, }
    ]
  });