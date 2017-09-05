<template>
 <div class='modal-mask' @close="showModal = false"> 
    <div class='modal-wrapper' @close="showModal = false">
      <div class='modal-container'>
        <div class="esc-button" @click="$emit('close')">
          <i class="el-icon-close"></i></br>
          esc
        </div>
        <div class="header">
          Create a channle
        </div>
        <div class="discrption">
          Channles are where your tem communicates.
          They're best when organized around a topic - #leads,</br> for example
        </div>
        <div class="channelType">
          <el-switch
            class="el-switch"
            v-model="value1"
            on-text="Public"
            off-text="Private"
            on-color="#13ce66"
            off-color="#ff4949">
          </el-switch>
          Anyone on your team can view and join this channel.
        </div>
        <div class="channel-inputBox">
          <p>Name<span> Don't forget to name your channel</span></p>
          <el-input placeholder="# e.g.leads" v-model="channelName"></el-input>
          <p>Names must be lowercase, without spaces or periods,and shorter than 22 characters.</p>
          <p>Purpose(optional)</p>
          <el-input></el-input></br>
          <p>What's this channel about?</p>
          <p>Send invites to:(optional)</p>
          <el-input placeholder="Search by name"></el-input></br>
          <div class="channel-btnBox">
            <el-button @click="$emit('close')">Cancel</el-button>
            <el-button @click="channelAdd" type="primary">Create Channel</el-button>
          </div>
        </div>
      </div>
    </div>  
    <div>
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
      value1: true,
      value2: true,
      dialogTableVisible: true
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
  color: black;
  display: table;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: .5s;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  position: relative;
  background: #fff;
}

.modal-container {
  width: 50%;
   height: 50%; 
   margin:0 auto; 
}

.esc-button {
  font-size: inherit;
  float: right;
  border-radius: 50%;
  text-align: center; 
  width:60px;
  height: 60px;
}

.esc-button p {
  padding: 0;
  margin: 0;
}

.esc-button:hover {
  background-color: #eeeeee;

}

.el-icon-close {
  padding: 0;  
}

.header {
  font-size: 2em;
  color: black;
}

.discrption {

}

.channel-inputBox span {
  color: #BE0002;
  font-family: fantasy;
}

.channel-btnBox {
  text-align: right;
}

</style>
