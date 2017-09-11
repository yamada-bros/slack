<template>
 <div class='modal-mask' @close="showModal = false"> 
    <div class='modal-wrapper'>
      <div class='modal-container'>
        <div class="esc-buttonBox">
          <div class="esc-button" @click="$emit('close')">
            <i class="el-icon-close"></i></br>
            esc
          </div>
        </div>
        <div v-if = "value1" class="header modal-inline">
          Create a channle
        </div>
        <div v-if = "!value1" class="header modal-inline">
          Create a private channle
        </div>
        <div class="discrption modal-inline">
          Channles are where your tem communicates.
          They're best when organized around a topic - #leads,</br> for example
        </div>
        <div class="channelBox modal-inline">
          <div class="channel-item">
            <el-switch
              v-model="value1"
              width="75"
              on-text="Public"
              off-text="Private"
              on-color="#13ce66"
              off-color="#ff4949">
            </el-switch>
            <p v-if = "value1">Anyone on your team can view and join this channel.</p>
            <p v-if = "!value1">This channel can only be joined or viewd by invite</p>
          </div>
        </div>
        <div class="channel-inputBox">
          <div class="modal-inline">
            <p class="modal-item">Name<span> Don't forget to name your channel</span></p>
            <input type="text" placeholder="#e.g.leads" v-model="channelName" class="input-decoration">
            <!-- <el-input size="large" placeholder="# e.g.leads" v-model="channelName" class="input-decoration"></el-input> -->
            <p class="discrption discrption-rule">Names must be lowercase, without spaces or periods,and shorter than 22 characters.</p>
          </div>
         <div class="modal-inline">
          <p class="modal-item">Purpose<span class="discrption">(optional)</span></p>
          <el-input size="large"></el-input></br>
          <p class="discrption discrption-rule">What's this channel about?</p>
         </div>
          <div class="modal-inline">
            <p class="modal-item">Send invites to:<span class="discrption">(optional)</span></p>
            <el-input size="large" placeholder="Search by name"></el-input></br>
          </div>
          <div class="channel-btnBox modal-inline">
            <el-button size="large" @click="$emit('close')">Cancel</el-button>
            <el-button size="large" @click="channelAdd(),modalClose()" :plain="true" type="danger">Create Channel</el-button>
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
      dialogTableVisible: true,
      private: false,
      value3: 'aaaa'
    }
  },
  methods: {
    channelAdd () {
      // var channelId = {id: this.generateUuid(), name: this.channelName}
      var id = this.generateUuid()
      var name = this.channelName
      var channelId = {
        id: id,
        name: name,
        messages: []
      }
      console.log(channelId)
      console.log(this.channelName)
      store.dispatch('channelAdd', channelId)
    },
    modalClose () {
      this.$emit('close')
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
  display: table;
  width: 50%;
  margin:0 auto; 
}

.modal-inline {
  padding: 15px 0;
}

.modal-item {
  font-weight: bold;
  padding: 0 0 5px 0
}

.esc-buttonBox {
  display: table;
  float: right;
  border-radius: 50%;
  text-align: center; 
  width:60px;
  height: 60px;
}

.esc-buttonBox:hover {
  background-color: #eeeeee;
}

.esc-button {
  display: table-cell;
  vertical-align: middle;
}
.el-icon-close {
  padding: 0;  
}

.header {
  font-size: 2.2em;
  color: black;
  font-weight: bold;
}

.discrption {
  color: #696969;
}

.discrption-rule {
  font-size: .8em;
  padding: 5px 0
}
.channel-item  {
  display: flex; 
  flex-direction: row; 
  align-items: center;
}
.channel-item p{
  padding-left: 10px;
}

.channel-inputBox span {
  color: #BE0002;
  font-family: fantasy;
}

.input-decoration {
  border: 1px solid orange;
  border-radius: 3px;
  outline: none;
  height: 42px;
  width: 100%;
  font-size: 1.1em;
  color: #696969;
}

.channel-btnBox {
  text-align: right;
}

</style>
