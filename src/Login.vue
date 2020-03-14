<template>
  <form class="form-signin" v-on:submit='onLogin'>
    <div class="text-center mb-4">
      <h1 class="h3 mb-3 font-weight-normal">Chat Room</h1>
      <p>
        Reach your family, friends, and acquaintance easily with create your own chat room
      </p>
    </div>

    <div class="form-label-group">
      <label for="inputEmail">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
      />
    </div>

    <div class="form-label-group">
       <label for="inputPassword">Password</label>
       <select class="form-control">
          <option>Education</option>
          <option>Sport</option>
          <option>Travelling</option>
          <option>NodeJS Community</option>
       </select>
    </div>
    <br />
   
    <button class="btn btn-lg btn-primary btn-block"  type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-muted text-center">© 1999-{{ yearNow }}</p>
  </form>
</template>

<script>
import { router } from './router'
import { context } from './services/contextState'

export default {
  name: "Login",
  data() {
      return{
        yearNow: (new Date).getFullYear()
      }
  },
  methods: {
    onLogin (ev) {
      ev.preventDefault()
      context.username = "sda"
      context.chatRoom = "sda"
      router.push("/")
    }
  }
};
</script>

<style scoped>
.form-signin {
    width: 100%;
    max-width: 420px;
    padding: 15px;
    margin: auto;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
</style>