<template>
  <form class="form-signin">
    <div class="text-center mb-4">
      <h1 class="h3 mb-3 font-weight-normal">Chat Room</h1>
      
    </div>

    
    <br />
    <div class="checkbox mb-3 d-flex justify-content-between">
      <label>
        <input type="checkbox" value="remember-me" /> Remember me
      </label>
      <a href="/register">Register</a>
    </div>
    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-muted text-center">© 1999-{{ yearNow }}</p>
  </form>
</template>

<script>
export default {
  name: "Home",
  data() {
      return{
        yearNow: (new Date).getFullYear()
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