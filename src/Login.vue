<template>
  <form class="form-signin" v-on:submit='onLogin'>
    <div class="container-field">
    <div class="text-center mb-4">
      <h1 class="h3 mb-3 font-weight-normal">Chat Room</h1>
      <p class="sub-header">
        Reach your family, friends, and acquaintance easily with create your own chat room
      </p>
    </div>

    <div class="form-label-group">
      <label for="inputUsername">Username</label>
      <input
        v-model="username"
        type="text"
        class="form-control"
        id="inputUsername"
        placeholder="Enter Username"
        required
        autofocus
      />
    </div>

    <div class="form-label-group">
       <label for="inputPassword">Select a chatroom</label>
       <select class="form-control" v-model="chatroom">
          <option v-for="item in chatrooms" :key="item.name" :value="item"  >
            {{item.name}}
          </option>
       </select>
       
    </div>
    <br />
   
    <button class="btn btn-lg btn-primary btn-block"  type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-muted text-center">© 1999-{{ yearNow }}</p>
    </div>
  </form>
</template>

<script>
import { router } from './router'
import { context } from './services/contextState'
import {  getChatrooms } from './services/ChatService';

export default {
  name: "Login",
  created() {
    getChatrooms()
    .then(res => res.data)
    .then(chatrooms => {
      this.chatrooms = chatrooms
    })
  },
  data(){
    return {
      yearNow: (new Date).getFullYear(),
      chatrooms: [],
      chatroom: {},
      username: ""
    }
  },
  methods: {
    onLogin (ev) {
      ev.preventDefault()
      context.username = this.username;
      context.chatroomId = this.chatroom.id;
      context.chatroomName = this.chatroom.name;
      localStorage.setItem("context", JSON.stringify(context))
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

.container-field{
  background: #fff;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 2px #ccc;
}

.sub-header {
  font-size: 14px;
    margin: 0 10px;
    color: #999;
}
</style>