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
      console.log(msg)
      var channelNumber = null
      for (var n in state.channel) {
        if (state.channel[n].id === state.currentChannelId) {
          channelNumber = n
        }
      }
      var deleatNumber = null
      for (var i in state.channle[channelNumber].messages) {
        if (state.messages[i].messageId === msg.id) {
          deleatNumber = i
        }
      }
      if (deleatNumber === null) return
      state.channel[channelNumber].messages[deleatNumber].splice(deleatNumber, 1)
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
      console.log(title.id)
      state.title = title.name
      state.currentChannelId = title.id
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
