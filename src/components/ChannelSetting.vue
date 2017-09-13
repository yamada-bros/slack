<template >
      <div class="editBox">
        <ul class="edit-pop">
          <li class="inner-color">
            <button class="inner-color">Jump to date...</button>
          </li>
          <li class="inner-color">
            <button class="inner-color">Invite new members to join...</button>
          </li>
          <li class="inner-color">
            <button class="inner-color">View channle details</button>
          </li>
          <li class="inner-color">
            <button class="inner-color">Additional options...</button>
          </li>
          <li class="inner-color">
            <button class="inner-color">Notification preference</button> 
          </li>
          <li class="inner-color">
            <button class="inner-color">Mute #channel_name</button>
          </li>
          <li class="inner-color">
            <button class="inner-color">Add an app</button>
          </li>
          <li class="deleteBtn">
            <button class="deleteBtn" @click="leave(), $emit('panretMessage')">Leave #channel</button> 
          </li>
        </ul>
      </div>
</template>
<script>
import store from '../store'

export default {
  name: 'ChannelSetting',
  data () {
    return {
      showEdit: true,
      showRemind: false
    }
  },
  methods: {
    leave () {
      store.dispatch('leave')
    },
    panretMessage () {
      this.showEdit = false
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.editBox {
  position: relative;
  z-index: 1;
}

.edit-pop {
  box-shadow:0px 0px 10px;
  background: #fff;
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
