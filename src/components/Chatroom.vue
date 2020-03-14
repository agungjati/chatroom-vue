<template>
  <div>
       <div class="list-message">
         <div>
        <div class="message mb-2">
           <div class="message-header">
              <span>Agung Jati</span>
              <small>17:00</small>
           </div>
          <div>
              hai gus
          </div>
        </div>
        </div>
        <div class="d-flex justify-content-end">
        <div class="message">
           <div class="message-header">
              <span>Agung Jati</span>
              <small>17:00</small>
           </div>
          <div>
              hai gus
          </div>
        </div>
        </div >
    </div>
     <form class="input-message" >
      <input
        type="text"
        class="form-control"
        placeholder="Enter message"
        required
      />
      &nbsp;
      <input type="submit" class="btn btn-small btn-primary" value="SEND" />
    </form>
    </div>
</template>

<script>
import { context } from '../services/contextState'


export default {
  name: 'Chatroom',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
.input-message {
    padding: 10px;
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #f76b6c;
    display: flex;
}

.message {
    display: inline-flex;
    background: #ffe1e2;
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
}

.message-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
}

.message-header >span {
    color: #d45f5f;
    font-weight: bold;
}

.message-header >small {
    background: #fff;
    padding: 3px;
    border-radius: 5px;
    font-size: 9px;
    color: #666;
}

</style>
