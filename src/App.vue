<template>
  <div id="app">
    <Login />
  </div>
</template>

<script>
import Login from './Login'

export default {
  name: 'app',
  components: { Login },
  data () {
    return {
      msg: 'hello world'
    }
  }
}
</script>

<style>
@import './assets/bootstrap.min.css';
</style>
