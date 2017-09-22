<template>
  <div class="formbox">
    <div>
      <!-- <img-modal v-show=""></img-modal> -->
      <button class="form-button" @click="showImgModal=true"><i class="el-icon-plus"></i></button>
    </div>
    <textarea 
      placeholder="#channlename"
      v-model="msg"
      type="text"
      required
      id="share-colors" 
      name="share_colors" 
      @keyup.enter.shift="push()" 
      class="main__share-input" />

    <button class="face-icon"><i class="el-icon-more"></i></button>

  </div>
</template>
<script>
import store from '../store'
import ImgModal from '@/components/ImgModal'
var Validator = require('validatorjs')
Validator.useLang('ja')

export default {
  name: 'formbox',
  componetns: {
    ImgModal
  },
  data () {
    return {
      msg: '',
      showImgModal: false
    }
  },
  methods: {
    push () {
      var moment = require('moment')
      var time = moment().format('h:mm a')
      var message = this.msg
      var timeMessage = {
        messageId: this.generateUuid(),
        comment: message,
        time: time,
        edit: false
      }
      var validation = new Validator({
        comment: this.msg
      }, {
        comment: 'required'
      })
      var val = validation.passes()
      if (val === true) {
        store.dispatch('push', timeMessage)
        this.msg = ''
      } else {
        console.log(validation.errors.first('comment'))
      }
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
  },
  computed: {
    titleName () {
      return store.getters.channelSwitch
    }
  },
  updated: function goBottom () {
    var scrollheight = document.getElementById('scroller').scrollHeight
    document.getElementById('scroller').scrollTop = scrollheight
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.formbox { 
  width: 90%; 
  margin-left: 5%;
  display: flex;
  height: 40px;
  border: 2px solid #000;
  border-radius: .25rem;
}



.form-button {
  align-items: center; 
  background: #fff;
  cursor: pointer;
  height: 40px; 
  width: 40px;
  border: none;
}
.form-button:hover {
  background-color:red;
  color: #fff;
}
.form-button i {
  font-size: 1.1vw;
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

.main__share-input {
  display: block;
  width: 100%; 
  font-size: 1vw;
  height: 36px;
  line-height: 40px; 
  border: 2px solid #000; 
  border-right: none; 
  margin-top: -2px;
  resize: none;
}
.main__share-input:hover, .main__share-input:focus, .main__share-input:active {
  /* border-color: #2780F8; */
  outline: none;
}
.main__share-input:focus {
  box-shadow: 0 0 7px rgba(39, 128, 248, 0.15);
}

.face-icon {
  align-items: center; 
  background: #fff;
  cursor: pointer;
  height: 40px; 
  border:none;
  padding-right: 15px;
}

/* modal */

 
#open01 {
    top: 0;
    left: 0;
     width: 100%; 
    height: 100%;
    display: none;
    position: absolute;
}
 
.close_overlay {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    text-indent: -9999px;
    position: absolute;
    z-index: 1;
}
 
.modal_window {
    top: 80%;
    left: 38%;
    margin: -150px 0 0 -200px;
    width: 300px;
    height: 200px;
    text-align: left;
    display: block;
    background: #fff;
    position: absolute;
    z-index: 10;
    border: 1px solid #000;
    border-radius: .25rem;
    flex-direction: column;
    padding: 1%;
}
 
.modal_window p {
  padding: 5%;
  cursor: pointer;
}
 
 
/* CSS3 ModalWindow SET
-------------------------- */
@-webkit-keyframes modalFadeIn {
    0% {opacity:0;display:block;}
    100% {opacity:1;}
}
 
div#modal div:target {
    -webkit-animation-name: modalFadeIn; 
    -webkit-animation-duration: .5s;
    -webkit-animation-iteration-count: 1;
    opacity: 1;
    display:block;
}

div#modal-snippet div:target {
    -webkit-animation-name: modalFadeIn; 
    -webkit-animation-duration: .5s;
    -webkit-animation-iteration-count: 1;
    opacity: 1;
    display:block;
}

</style>

