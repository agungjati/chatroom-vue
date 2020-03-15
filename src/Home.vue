<template>
  <div class="content container d-flex">
      <div class="d-flex flex-column" style="width: 30%">
        <div class="logo">
          Chatroom &nbsp;<b>{{ chatroomName }}</b>
        </div>
      <div class="list-member">
        <div class="member" v-for="member in members" :key="member">
           <span>{{ member.slice(0,1) }}</span>
           <div>
              <span>{{ member }}</span>
           </div>
        </div>
        <div class="member">
           <span>A</span>
           <div>
              <span>Agung Jati</span>
           </div>
        </div>
      </div>
      </div>
      <div class="d-flex flex-column" style="width: 70%">
        <div class="navbar">
          <router-link class="btn btn-small btn-primary mr-2" :to="{name: 'login'}">Logout</router-link>
        </div>
        <div class="chat"> 
          <Chatroom :chats="chats" />
        </div>
      </div>
  </div>
</template>

<script>
import Chatroom from './components/Chatroom'
import { context } from './services/contextState'
import { getChatroom } from './services/ChatService'
import { router } from './router'

export default {
  created(){
    let contextLocal =  localStorage.getItem("context");
    if(!contextLocal)
    {
      router.push("login")
    }else{
      const { username, chatroomId, chatroomName } = JSON.parse(contextLocal)
      context.username = username
      context.chatroomId = chatroomId
      context.chatroomName = chatroomName

      getChatroom(context.chatroomId)
      .then(x => x.data)
      .then(chatroom => {
        this.members = chatroom.members
        this.chats = chatroom.chats
    })
    }


  },
  name: "Home",
  components: {
    Chatroom,
  },
  data() {
      return{
        chatroomName: context.chatroomName,
        members: [],
        chats: []
      }
  }
};
</script>

<style scoped>
.logo {
  border-right: 3px solid #3c6c90;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navbar {
    display: flex;
    align-items: center;
    justify-content: flex-end;text-align: left;
}
.logo, .navbar  {
    background:rgb(86, 130, 163);
    color: #fff;
    padding: 0 5px;
    font-weight: bolder;
    height: 51px;
}

.list-member {
  background: #fff;
  padding: 10px 0;
  border-right: 2px solid #eaeaea;
}

.list-member, .chat{
  height: calc(100vh - 68px);
  overflow: auto;
}

.member >span {
  background: #b2a7c7;
    display: flex;
    color: #fff;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    text-align: center;
    align-items: center;
    justify-content: center;
}

.member {
    display: flex;
    align-items: center;
    padding: 3px 0 0 10px;
    color: #544545;
    margin-bottom: 10px;
}

.member >div {
    display: flex;
    flex-direction: column;
    padding: 5px;
    flex: 1;
        
}

.member small{
    font-size: 11px;
    color: #666;
}

.chat {
  background: #fff;
  position: relative;
}

.content {
  box-shadow: 0 2px 2px #ccc;
  padding: 0;
}
</style>