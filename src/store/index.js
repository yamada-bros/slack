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
    currentChannelId: '',
    currentChannel: [],
    channel: [
      {
        id: 'id',
        name: '2017_engineer',
        messages: []
      },
      {
        id: 'idasdfasdfasfdasdfasdf',
        name: 'fto_front',
        messages: []
      },
      {
        id: 'idasdfargq3gqgrtyj7989l',
        name: 'techIc',
        messages: []
      },
      {
        id: 'eyjeyryjreryeryertetr',
        name: 'general',
        messages: []
      }
    ]
  },
  mutations: {  // stateの中身を書き換える
    push (state, msg) {
      console.log(msg)
      var channelNumber = null
      for (var i in state.channel) {
        if (state.channel[i].id === state.currentChannelId) {
          channelNumber = i
        }
      }
      state.channel[channelNumber].messages.push(msg)
    },
    channelChange (state, chId) {
      console.log(chId)
      var currentId = null
      for (var i in state.channel) {
        if (state.channel[i].id === chId.id) {
          currentId = i
        }
      }
      state.currentChannel = state.channel[currentId].messages
    },
    channelAdd (state, payload) {
      console.log(payload)
      state.channel.push(payload)
    },
    time (state, time) {
      state.time.push(time)
    },
    deleat (state, msg) {
      var channelNumber = null
      for (var n in state.channel) {
        if (state.channel[n].id === state.currentChannelId) {
          channelNumber = n
        }
      }
      var deleatNumber = null
      for (var i in state.channel[channelNumber].messages) {
        if (state.channel[channelNumber].messages[i].messageId === msg.messageId) {
          deleatNumber = i
        }
      }
      console.log(state.channel)
      if (deleatNumber === null) return
      state.channel[channelNumber].messages.splice(deleatNumber, 1)
    },
    editMsg (state, editMsg) {
      console.log(editMsg)
      var channelNumber = null
      for (var n in state.channel) {
        if (state.channel[n].id === state.currentChannelId) {
          channelNumber = n
        }
      }
      var editNumber = null
      for (var i in state.channel[channelNumber].messages) {
        console.log(state.channel[channelNumber].messages)
        if (state.channel[channelNumber].messages[i].messageId === editMsg.messageId) {
          editNumber = i
        }
      }
      state.channel[channelNumber].messages[editNumber].comment = editMsg.message
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
    title (state, title) {
      console.log(title.id)
      state.title = title.name
      state.currentChannelId = title.id
    },
    leave (state) {
      console.log(state.channel)
      console.log(state.currentChannelId)
      var channelNumber = null
      for (var n in state.channel) {
        if (state.channel[n].id === state.currentChannelId) {
          channelNumber = n
        }
      }
      state.channel.splice(channelNumber, 1)
      state.title = 'You left this channel!!'
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
    },
    leave (context) {
      context.commit('leave')
    }
  },
  getters: {
    messagePush: state => {
      console.log(state.currentChannel)
      return state.currentChannel
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
    channelAdd: state => {
      console.log(state.channel)
      return state.channel
    }
  }
})
// function commit (kansumei,data) {
//   mutations.kansumei(state,data)
// }
