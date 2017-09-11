<template>
  <div class="sidebar">
    <modal v-if="showModal" @close="showModal = false"></modal>
    <button class="team-menu">
      <div class="team-menu__info">
        <h1 class="team-menu__name">CAMOBILE,LTD.</h1>
        <div class="team-menu__status">
          <span class="team-menu__username">yamada_t</span>
        </div>
      </div>
      <span class="team-menu__alarm ion-ios-bell-outline"></span>
    </button>

<div class="threads">
      <span class="ion-chatbubble-working threads__icon"></span> All Threads
    </div>
    <div class="channels">
      <h2 class="channels__heading">
        <span>Channels <span class="channels__number">(16)</span>
        </span>

      <el-tooltip content="Create new channel" placement="top">
        <el-button>
          <button 
          @click="showModal = true"
          class="ion-ios-plus-outline channels__add"
          ></button>
        </el-button>
      </el-tooltip>
      </h2>
      <ul class="channels__list">
        <li 
          v-for="e in channel"
          @click="handleChanel(e), channelChange(e)">
            <button 
              class="channels__button"><span id="title_name">{{ e.name }}</span></button>
        </li>
      </ul>
    </div>
    <div class="dm">
      <h2 class="dm__heading">
        <span>Direct messages <span class="dm__number">(29)</span>
        </span>
        <button class="ion-ios-plus-outline dm__add"></button>
      </h2>
      <ul class="dm__list">
        <li 
          class="dm__item"
          v-for="e in channel">
          <button class="dm__button dm__button--slackbot"><span>{{ e.name }}</span></button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from '../store'
import modal from '@/components/Modal'

export default {
  name: 'sidebar',
  components: {
    modal
  },
  data () {
    return {
      msg: 'Team name',
      title: 'techIc',
      id: this._uid,
      showModal: false
    }
  },
  methods: {
    handleChanel (value) {
      store.dispatch('title', value)
      console.log(value)
    },
    channelChange (value) {
      console.log(value)
      store.dispatch('channelChange', value)
    },
    channelAdd () {
      var channelId = {id: this.generateUuid(), name: '111'}
      console.log(channelId)
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
  },
  computed: {
    push () {
      console.log(store.getters.messagePush)
      return store.getters.messagePush
    },
    channel () {
      console.log(store.getters.channelAdd)
      return store.getters.channel_id
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://unpkg.com/element-ui/lib/theme-default/index.css");


.sidebar {
  color:#fff;
  text-align: left; 
  position: relative;  
  float:left;
  z-index: 1; 
  width: 20%;  
  background: var(--column-bg, #ae0001);
  color: var(--text-color, #fff); 
  overflow: scroll;
}

 @import url("https://fonts.googleapis.com/css?family=Lato:300,400,700,900");
@import url("https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css");
@import url("https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css");

.team-menu {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 18px 18px 0;
}
.team-menu:hover {
  background: var(--menu-bg-hover, #680001);
}
.team-menu__name {
  font-size: 18px;
  font-weight: 900;
  color: var(--text-color, #fff);
}
.team-menu__status {
  font-size: 15px;
  line-height: 1.8;
  color: var(--text-color, #fff);
}
.team-menu__status:before {
  content: "";
  display: inline-block;
  margin-right: 0.2rem;
  width: 9px;
  height: 9px;
  background: var(--active-presence, #00FFBA);
  border-radius: 50%;
}
.team-menu__username {
  opacity: 0.6;
}
.team-menu__alarm {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 25px;
  color: var(--text-color, #fff);
}

 .threads {
  margin: 0.6rem 0;
  padding: 0 18px;
  opacity: 0.7;
} 
.threads__icon {
  margin-right: 3px;
}

.channels,
.dm {
  margin: 0.5rem 0 1.5rem;
  padding-right: 18px;
}
.channels__button, .channels__heading,
.dm__button,
.dm__heading {
  padding: 0 0 0 18px;
  width: 100%;
  color: var(--text-color, #fff);
}
.channels__number,
.dm__number {
  display: inline-block;
  position: relative;
  top: -1px;
  margin-left: 2px;
  font-size: 13px;
  opacity: 0.5;
}
.channels__add,
.dm__add {
  font-size: 20px;
  color: var(--text-color, #fff);
}
.channels__heading,
.dm__heading {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 2.1;
  text-transform: uppercase;
  opacity: 0.6;
}
.channels__button,
.dm__button {
  padding: 4px 0 4px 18px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.channels__button span,
.dm__button span {
  opacity: 0.7;
}
.channels__button:before,
.dm__button:before {
  padding: 0 0.3rem;
}
.channels__button:hover,
.dm__button:hover {
  background: var(--hover-item, #BE0002);
}
.channels__button--active, .channels__button--active:hover,
.dm__button--active,
.dm__button--active:hover {
  background: var(--active-item, #D3A625);
  color: var(--active-item-text, #680001);
}

.channels__button:before {
  content: "#";
  opacity: 0.5;
}
.channels__button--unread {
  font-weight: bold;
}

.dm__button:before {
  content: "\f401";
  margin-right: 3px;
   font-family: "Ionicons"; 
  font-size: 0.6rem;
}
.dm__button--online:before {
  content: "\f21b";
  color: var(--active-presence, #00FFBA);
}
.dm__button--slackbot:before {
  content: "\f141";
  color: var(--active-presence, #00FFBA);
  font-size: 0.75rem;
}
.dm__button--active.dm__button--online:before, .dm__button--active.dm__button--slackbot:before {
  color: var(--active-item-text, #680001);
}

 * {
  box-sizing: border-box;
} 

button {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  font-size: inherit;
    font-family: inherit;  
  text-align: left;
  cursor: pointer;
}
button:focus, button:hover, button:active {
  outline: none;
} 


</style>
