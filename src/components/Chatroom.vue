<template>
  <div>
       <div class="list-message">
         <div v-for="(chat, i) in chats" 
          :key="i" 
          :class="username  === chat.username ? 'd-flex justify-content-end' : ''"
          >
          <div class="message mb-2">
            <div class="message-header">
                <span>{{ chat.username }}</span>
                <small>{{chat.createdAt}}</small>
            </div>
            <div>{{ chat.message }}</div>
          </div>
        </div>

    </div>
     <form class="input-message" @submit="onInsertMessage">
       <div >
      <textarea
        placeholder="Write a message..."
        required
        v-model="message">
      </textarea>
      &nbsp;
      </div>
      <input type="submit" class="btn btn-small btn-primary" value="SEND" />
    </form>
    </div>
</template>

<script>
import { context } from '../services/contextState'
import { addMessage, URL_SOCKET } from '../services/ChatService'
import io from 'socket.io-client'

export default {
  name: 'Chatroom',
  props: ['chats'],
  mounted(){
    this.startSocket()
    this.scrollToEnd()
  },
  data () {
    return {
      socket: io(URL_SOCKET),
      socketClient: {},
      message: "",
      username: context.username
    }
  }, 
  methods: {
    onInsertMessage(ev){
      ev.preventDefault()
      this.socket.emit('save', {
        id: context.chatroomId, 
        username: context.username, 
        message: this.message
      })
      this.message = ""
    },
    startSocket(){
      this.socket.on('connect',  (client) => {
        console.log('connection successfuly', client) 
        this.socket.emit('subscribe', { id: context.chatroomId })
      })

      this.socket.on('disconnect',  (client) => {
        console.log('disconnection', client) 
        this.socket.emit('unsubscribe', { id: context.chatroomId })
      })

      this.socket.on('message_saved', (data) => {
        this.scrollToEnd()
          this.chats.push(data)
      });

      this.socket.on('message_not_saved', (data) => {
        alert(data)
        console.error(data)
      });
      
    },
    scrollToEnd() {
      setTimeout(() => {
        const container = this.$el.querySelector(".list-message");
        container.scrollTop = container.scrollHeight+1000;
      }, 500)    	
      
    }
  },
  
}
</script>

<style>
.input-message {
    padding: 10px;
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #fff;
    display: flex;
    border-top: 1px solid #eaeaea;
}

.input-message >div{
  display: flex;
  flex: 1;
  align-items: center;
}

.input-message textarea{
    flex: 1;
    border: none;
    background: #ffffff4a;
    padding: 10px;
    border-bottom: 1px solid #eaeaea;
    color: #666;
    outline: none;
}

.input-message textarea::placeholder {
  color: #999;
}

.input-message textarea:focus {
    box-shadow: 0 2px 2px #ccc;
    transition: all 0.8s ease;
}

.message {
    display: inline-flex;
    background: #e6eff5;
    flex-direction: column;
    color: #555;
    padding: 5px;
    border-radius: 5px;
    min-width: 200px;
}

.list-message {
    margin: 10px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: calc(100vh - 173px);
}
.message-header {

    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
}

.message-header >span {
    color: #3e4a52;
    font-weight: bold;
    letter-spacing: 0.4px;
}

.message-header >small {
    background: #fff;
    padding: 3px;
    border-radius: 5px;
    font-size: 9px;
    color: #666;
}

</style>
