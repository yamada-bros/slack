<template>
  <div class='modal-mask'>
    <div class='modal-wrapper'>
      <div class='modal-container'>
        <div class="header">
          Create a channle
        </div>
        <div class="discrption">
          Channles are where your tem communicates.
          They're best when organized around a topic - #leads,</br> for example
        </div>
        <div class="channelType">
          <el-tooltip :content="'Switch value: ' + value3" placement="top">
            <el-switch
              class="el-switch"
              v-model="value3"
              on-color="#13ce66"
              off-color="#ff4949"
              on-value="100"
              off-value="0">
            </el-switch>
          </el-tooltip>
          Anyone on your team can view and join this channel.
        </div>
        <div class="channel-inputBox">
          <p>Name</p>
          <input type="text" placeholder="new channel name" v-model="channelName"></br>
          <p>Purpose(optional)</p>
          <input type="text" placeholder="new channel name" v-model="channelName"></br>
          <p>Send invites to:(optional)</p>
          <input type="text" placeholder="new channel name" v-model="channelName"></br>
          <div class="channel-btnBox">
            <button @click="channelAdd">Cancel</button>
            <button @click="channelAdd">Create Channel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'modal',
  data () {
    return {
      channelName: '',
      value3: '100'
    }
  },
  methods: {
    channelAdd () {
      var channelId = {id: this.generateUuid(), name: this.channelName}
      console.log(channelId)
      console.log(this.channelName)
      store.dispatch('channelAdd', channelId)
    },
    generateUuid () {
      let chars = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.split('')
      for (let i = 0, len = chars.length; i < len; i++) {
        switch (chars[i]) {
          case 'x':
            chars[i] = Math.floor(Math.random() * 16).toString(16)
            break
          case 'y':
            chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16)
            break
        }
      }
      return chars.join('')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.modal-mask {
  background: red;
  color: black;
  display: table;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  position: relative;
}

.modal-container {
  background: #fff;
  width: 60%;
  height: 80%;
  margin: 0 auto;
  padding: 5% 0;
}

.header {
  font-size: 2em;
  color: black;
}

.discrption {

}

.el-switch{
  border: 1px solid black;
  padding: 10%;
}

.channel-btnBox {
  text-align: right;
}



</style>
