<template>
  <div id="scroller">
    <div class="messages">
      <ul class='message-list'>
        <!-- <li v-for="e in push" @mouseover="showEdit=true" @mouseout="showEdit=false"> -->
        <li v-for="msg in messages">
          <div class="message-content">
            <img src="http://sakurabaryo.com/wp/wp-content/uploads/2015/09/CA%E3%83%A2%E3%83%90%E3%82%A4%E3%83%AB.png" alt="">
            <div class="message-user">
              <div>
                yamada_t<span> {{ msg.time }}</span></br>
              </div>
              <div v-if="!msg.edit" class="messageContent">
                <p>{{ msg.comment }}</p>
              </div>
              <textarea type="text" v-if="msg.edit" v-model="newMsg" class="input-decoration"></textarea>
            </div>
          </div>
          <button @click="deleat(msg)">deleat</button>
          <button @click="msg.edit = true">Edit</button>
          <button @click="msg.edit = false">Cancel</button>
          <button @click="msg.edit = false, edit(msg)">↩︎Save Changes</button>
          <messagepop class="action-pop" v-show="showEdit"></messagepop>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import messagepop from '@/components/MessagePop'
import { firebaseModel } from '@/firebaseModel'
import store from '../store'

export default {
  name: 'message',
  components: {
    messagepop
  },
  data () {
    return {
      value: 'Test',
      active: false,
      showEdit: true,
      newMsg: ''
    }
  },
  methods: {
    deleat (value) {
      console.log(value)
      store.dispatch('remove', value)
    },
    editOn (value) {
      console.log(value)
      store.dispatch('editOn', value)
    },
    editOff () {
      store.dispatch('editOff')
    },
    edit (value) {
      console.log(value)
      console.log(this.newMsg)
      value.message = this.newMsg
      store.dispatch('editMsg', value)
      this.newMsg = ''
      firebaseModel.updateMessage(this.newMsg, store.state.currentChannelId)
    }
  },
  computed: {
    messages () {
      console.log(store.getters.messagePush)
      return store.getters.messagePush
    },
    time () {
      return store.getters.timePush
    },
    editMsg () {
      console.log(store.getters.editMsg)
      return store.getters.editMsg
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 #scroller {
   overflow: hidden;
   height: 83%;
   overflow: scroll;
 }

.messages {
   height: 100%; 
   width: 100%;
  display: table;
}

 .message-list {
  display: table-cell;
  vertical-align: bottom;
} 

.message-list li {
  margin: 0;
  padding: 1% 5%;
  align-items: center;
  justify-content: space-between;
}
.message-list li:hover {
  background: #f5f5f5;
}
.message-list img {
  width: 45px;
  height: 45px;
  margin:0 5px 0 0;
  border-radius: 10px;
}

.message-content {
  display: flex;
  font-weight: normal;
}
.message-content span {
  color: #696969;
  font-weight: lighter;
}
.message-user {
  font-weight: bold;
}

.messageContent p{
  white-space: pre;
  font-weight: normal;
}

#messages {
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

#messages > li {
  text-align: left;
}

.action-pop {
  /* position: absolute; */
  top:30%;
  right: 2%;
}

.input-decoration {
  border: 1px solid orange;
  border-radius: 5px;
  outline: none;
  height: 42px;
  width: 100%;
  font-size: 1.1em;
  color: #696969;
}
</style>
