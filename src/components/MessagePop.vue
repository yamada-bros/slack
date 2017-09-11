<template>
  <div>
    <el-button-group>
      <el-button type="primary" icon="warning"></el-button>
      <el-button type="primary" icon="date"></el-button>
      <el-tooltip content="Show message actions" placement="top">
        <el-button type="primary" icon="more" @click="showEdit=true"></el-button>
      </el-tooltip>
      <el-button type="primary" icon="close" @click="showEdit=false, showRemind=false"></el-button>
    </el-button-group>

    <div v-show="showEdit">
      <div class="editBox">
        <ul class="edit-pop">
          <li class="inner-color">
            <button class="inner-color">Follow message</br><span class="followMessage-inner">Any replies will show up in All Threads</span></button>
          </li>
          <li class="inner-color">
            <button class="inner-color">share message...</button>
          </li>
          <li class="inner-color">
            <button class="inner-color">Copy link</button>
          </li>
          <li class="inner-color" @click="showRemind=true">
            <button class="inner-color">Remind me about this</button>
            <i class="el-icon-caret-right"></i>
          </li>
          <li class="inner-color">
            <button class="inner-color">Add reaction</button> 
          </li>
          <li class="inner-color">
            <button class="inner-color">Pin to #channel_name</button>
          </li>
          <li class="inner-color">
            <button class="inner-color" @click="msg.edit = true">Edit message</button>
          </li>
          <li class="deleteBtn">
            <button class="deleteBtn">Delete message</button> 
          </li>
        </ul>
      </div>
    </div>
    <!-- Remind modal -->
    <div class="editBox remind" v-show="showRemind">
        <ul class="edit-pop">
          <li class="inner-color">
            <button class="inner-color">in 20 minutes</button>
          </li>
          <li class="inner-color">
            <button class="inner-color">in 1 hour</button>
          </li>
          <li class="inner-color">
            <button class="inner-color">in 3 hour</button>
          </li>
          <li class="inner-color">
            <button class="inner-color">Tomorrow</button>
          </li>
          <li class="inner-color">
            <button class="inner-color">Next Week</button>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
// import store from '../store'
import store from '../store'
export default {
  name: 'message',
  data () {
    return {
      showEdit: false,
      showRemind: false
    }
  },
  methods: {
  },
  computed: {
    push () {
      console.log(store.getters.messagePush)
      return store.getters.messagePush
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.editBox {
  position: relative;
  z-index: 1;
}

.remind {
  width: 80%;
  padding: 1% 0;
  position: absolute; 
  top: 200%;
  right: 160%;
}
.remind li button {
  padding-left: 10px;
}


.edit-pop {
  box-shadow:0px 0px 10px;
  border-radius: 5px;
  width: 250px;
  position: absolute;
  top: 0;
  right: 40%;
  padding: 5%;
}
.edit-pop li {
  border-radius: 5px;
  padding: 1% 0;
}
.edit-pop button {
  font-size: .9em;
  text-align: left;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  padding: 1%;
  appearance: none;
}
.followMessage-inner {
  font-size: .5em;
}

.inner-color:hover {
  background:#58B7FF;
  color: #fff;
}
.el-icon-caret-right {
  padding-left: 45px;
}

.deleteBtn {
  color: #FF4949;
}
.deleteBtn:hover {
  background: #FF4949;
  color: #fff;
}

</style>
