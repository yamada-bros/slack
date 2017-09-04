<template>
  <div id="scroller" class="message">
    <div class="panel-body">
      <ul id='messages'>
        <li v-for="e in push">
          <p v-if="!e.edit">created_time:{{ e.time }}</br>
          {{ e.message }}</p>
          <input type="text" v-if="e.edit" v-model="text">
          <button @click="deleat(e)">deleat</button>
          <button @click="e.edit = true">Edit</button>
          <button @click="e.edit = false">edit end</button>
          <button @click="goBottom">bottom</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import store from '../store'

export default {
  name: 'message',
  data () {
    return {
      value: 'Test',
      text: []
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
  height: 84%;
  overflow: scroll;
}

.message p {
  padding:3%;
}
.message p:hover{
    background: #f5f5f5;
}

#messages {
  display: flex;
  flex-direction: column;
}

#messages > li {
  text-align: left;
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
