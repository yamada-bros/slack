import Vue from 'vue'
import Vuex from 'vuex'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element, {locale})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [],
    editNumber: '',
    title: 'channel name',
    channel: [
      {
        id: 'rookies',
        name: 'rookies'
      },
      {
        id: 'techIc',
        name: 'fto'
      },
      {
        id: '003',
        name: 'techIc'
      },
      {
        id: 'techIc',
        name: 'fto-server-info'
      },
      {
        id: 'techIc',
        name: 'github'
      },
      {
        id: 'techIc',
        name: 'fto_sys'
      },
      {
        id: '9c1a876d-98ae-4297-822e-fb470693a220',
        name: '1111@'
      }
    ],
    chat: {
      'rookies': [
        {
          'id': '1',
          'user': {
            'name': 'daison',
            'dev': 'techIc'
          },
          'comment': 'node',
          'created_at': '2017/08/30'
        },
        {
          'id': '2',
          'user': {
            'name': 'daison',
            'dev': 'techIc'
          },
          'comment': 'aaaa'
        },
        {
          'id': '3',
          'user': {
            'name': 'daison',
            'dev': 'techIc'
          },
          'comment': 'メッセ'
        }
      ],
      'techIc': [
        {
          'id': '1',
          'user': {
            'name': 'daison',
            'dev': 'techIc'
          },
          'comment': 'node'
        },
        {
          'id': '1',
          'user': {
            'name': 'daison',
            'dev': 'techIc'
          },
          'comment': '打ち上げ花火'
        },
        {
          'id': '1',
          'user': {
            'name': 'daison',
            'dev': 'techIc'
          },
          'comment': 'node'
        },
        {
          'id': '1',
          'user': {
            'name': 'daison',
            'dev': 'techIc'
          },
          'comment': 'node'
        }
      ],
      'a': [
        {
          'id': '1',
          'user': {
            'name': 'daison',
            'dev': 'techIc'
          },
          'comment': 'nodeやで'
        }
      ]
    }
  },
  mutations: {  // stateの中身を書き換える
    push (state, msg) {
      state.messages.push(msg)
    },
    channelAdd (state, payload) {
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
    title (state, title) {
      console.log(title)
      state.title = title.name
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
    editOn (context, editId) {
      console.log(editId.id)
      var editer = editId
      context.commit('editStart', editer)
    },
    editOff (context) {
      context.commit('editDone')
    }
  },
  getters: {
    messagePush: state => {
      return state.messages
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
    headerTitle: state => {
      return state.channel.name
    },
    channelAdd: state => {
      return state.channel
    }
  }
})
// function commit (kansumei,data) {
//   mutations.kansumei(state,data)
// }
