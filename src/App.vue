<template>
  <div id="app">
     <router-link :to="{name: 'login'}">Login</router-link>
     <router-view></router-view>
  </div>
</template>

<script>
import Login from './Login'

export default {
  name: 'app',
  components: { Login },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
@import './assets/bootstrap.min.css';
</style>
