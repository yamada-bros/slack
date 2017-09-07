<template>
  <div id="scroller" class="message">
    <div class="panel-body">
      <ul id='messages'>
        <li v-for="e in push" @mouseover="showEdit=true" @mouseout="showEdit=false">
          <div class="message-content">
            <img src="https://cdn-images-1.medium.com/max/1200/1*TiKyhAN2gx4PpbOsiBhYcw.png" alt="">
            <p v-if="!e.edit">
              yamada_t:{{ e.time }}PM</br>
              {{ e.message }}
            </p>
            <input type="text" v-if="e.edit" v-model="text">
          </div>
          <button @click="deleat(e)">deleat</button>
          <button @click="e.edit = true" v-show="active">Edit</button>
          <button @click="e.edit = false">edit end</button>
          <button @click="goBottom">bottom</button>
          <messagepop class="action-pop" v-show="showEdit"></messagepop>
        </li> 
      </ul>
    </div>
  </div>
</template>
<script>
import messagepop from '@/components/MessagePop'
import store from '../store'

export default {
  name: 'message',
  components: {
    messagepop
  },
  data () {
    return {
      value: 'Test',
      text: [],
      active: false,
      showEdit: true
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
    goBottom () {
      var scrollheight = document.getElementById('scroller').scrollHeight
      document.getElementById('scroller').scrollTop = scrollheight
    }
  },
  computed: {
    push () {
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

.message {
  height: 83%;
  overflow: scroll;
}
.message li {
  margin: 0;
  padding: 1% 5%;
  align-items: center;
  justify-content: space-between;
}
.message li:hover {
  background: #f5f5f5;
}
.message img {
  width: 5%;
  height: 5%;
  margin:0 5px 0 0;
}

.message-content {
  display: flex;
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
  position: absolute;
  top:0;
  right: 2%;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
