import Vue from 'vue'
import Vuex from 'vuex'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element, {locale})
Vue.use(Vuex)
Vue.component('searchbox', {
  props: {
    openDelay: {
      type: Number,
      required: true
    }
  }
})

export default new Vuex.Store({
  state: {
    editNumber: '',
    title: 'channel name',
    channel: [
      // {
      //   id: 'id',
      //   name: 'name',
      //   messages: []
      // },
      // {
      //   id: 'idasdfasdfasfdasdfasdf',
      //   name: 'name2',
      //   messages: []
      // },
      // {
      //   id: 'idasdfargq3gqgrtyj7989l',
      //   name: 'name3',
      //   messages: []
      // }
      // {
      //   id: 'techIc',
      //   name: 'fto'
      // },
    ]
  },
  mutations: {  // stateの中身を書き換える
    push (state, msg) {
      console.log(state.channel[0].fto.messages)
      state.channel[0].fto.messages.push(msg)
    },
    channelAdd (state, payload) {
      console.log(payload)
      state.channel.push(payload)
    },
    time (state, time) {
      state.time.push(time)
    },
    deleat (state, msg) {
      var deleatNumber = null
      for (var i in state.messages) {
        if (state.messages[i].id === msg.id) {
          deleatNumber = i
        }
      }
      if (deleatNumber === null) return
      state.messages.splice(deleatNumber, 1)
    },
    editStart (state, editer) {
      var editNumber = null
      console.log(editer.id)
      for (var i in state.messages) {
        if (state.messages[i].id === editer.id) {
          editNumber = i
        }
      }
      state.messages[editNumber].edit = true
      state.editNumber = editNumber
    },
    editDone (state) {
      state.messages.edit = false
    },
    editMsg (state, editMsg) {
      console.log(editMsg)
      var editNumber = null
      for (var i in state.messages) {
        if (state.messages[i].id === editMsg.id) {
          editNumber = i
        }
      }
      state.messages[editNumber].message = editMsg.message
    },
    title (state, title) {
      console.log(title)
      state.title = title.name
    },
    channelChange (state, chId) {
      var currentId = null
      for (var i in state.channel) {
        if (i === chId) {
          currentId = i
        }
      }
      return currentId
    }
  },
  actions: { // 非同期処理をする
    push (context, msg) {
      console.log(msg)
      context.commit('push', msg)    // commit(関数名,値) ミューテーションが呼び出される
    },
    remove (context, msg) {
      context.commit('deleat', msg)
    },
    title (context, title) {
      context.commit('title', title)
    },
    channelAdd (context, ch) {
      context.commit('channelAdd', ch)
    },
    channelChange (context, chChange) {
      console.log(chChange)
      context.commit('channelChange', chChange)
    },
    editOn (context, editId) {
      console.log(editId.id)
      var editer = editId
      context.commit('editStart', editer)
    },
    editOff (context) {
      context.commit('editDone')
    },
    editMsg (context, editMsg) {
      console.log(editMsg)
      context.commit('editMsg', editMsg)
    }
  },
  getters: {
    messagePush: state => {
      // console.log(state.channel)
      return state.channel
    },
    timePush: state => {
      return state.time
    },
    channel_id: state => {
      return state.channel
    },
    editMsg: state => {
      console.log(state.editNumber)
      return state.editNumber
    },
    channelSwitch: state => {
      return state.title
    },
    channelChange: state => {
      console.log(state.channel.channelChange().messages)
      return state.channel.channelChange().messages
    },
    channelAdd: state => {
      console.log(state.channel)
      return state.channel
    }
  }
})
// function commit (kansumei,data) {
//   mutations.kansumei(state,data)
// }
