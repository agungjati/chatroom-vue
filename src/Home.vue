<template>
  <div class="container d-flex">
      <div class="d-flex flex-column" style="width: 30%">
        <div class="logo">
          Chatroom
        </div>
      <div class="list-member">
        <div class="member">
           <span>A</span>
           <div>
              <span>Agung Jati</span>
              <small>agungjati94@gmail.com</small>
           </div>
        </div>
        <div class="member">
           <span>A</span>
           <div>
              <span>Agung Jati</span>
              <small>agungjati94@gmail.com</small>
           </div>
        </div>
      </div>
      </div>
      <div class="d-flex flex-column" style="width: 70%">
        <div class="navbar">
          image
        </div>
        <div class="chat"> 
          
        </div>
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
.logo {
  border-right: 3px solid #e06060;
}
.navbar {
    display: flex;
    align-items: center;
    justify-content: flex-end;text-align: left;
}
.logo, .navbar  {
    background: #f76c6c;
    color: #fff;
    padding: 10px 5px;
    font-weight: bolder;
}

.list-member {
  background: #fff2f8;
  padding: 10px 0;
}

.list-member, .chat{
  height: calc(100vh - 24px);
    overflow: auto;
}

.member >span {
    display: flex;
    background: #b2a7c7;
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
    border-bottom: 1px solid #999;
        
}

.member small{
    font-size: 11px;
    color: #666;
}

.chat {
  background: #fff2f8;
}
</style>