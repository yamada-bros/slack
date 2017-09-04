<template>
  <div class='modal-mask'>
    <div class='modal-wrapper'>
      <div class='modal-container'>
        <div class="header">
          Create a channle
        </div>
        <div class="discrption">
          Channles are where your tem communicates.</br>
          They're best when organized around a topic - #leads, for example
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
        </div>
        <input type="text" placeholder="new channel name" v-model="channelName">
        <!-- 「$emit」は、現在のインスタンス上でイベントを発行します。 -->
        <button @click="channelAdd">OK</button>
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
  border: 1px solid black;
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  border: 1px solid black;
  background: #fff;
  width: 50%;
  height: 70%;
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
</style>
