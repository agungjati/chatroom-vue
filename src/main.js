import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Login from './Login.vue'
import Home from './Home.vue'
import Register from './Register.vue'

Vue.use(Router)

const router = new Router({ 
  routes: [
    { path: '/', name: 'home', component: Home, }, 
    { path: '/login', name: 'login', component: Login, props: true, },
    { path: '/register', name: 'register', component: Register, props: true, },
  ] 
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
