<template>
  <div class="container d-flex">
      <div class="d-flex flex-column" style="width: 30%">
        <div>
          image
        </div>
      <div>list chat</div>
      </div>
      <div class="d-flex flex-column" style="width: 70%">
        <div>
          image
        </div>
      <div> chat</div>
      </div>
  </div>
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