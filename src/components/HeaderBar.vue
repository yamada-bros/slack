<template>
  <header class="main__header">
     <div class="loader"></div>
    <h1 class="main__h1">{{ titleName }}</h1>
    <searchbox></searchbox>
    </header>
</template>

<script src="https://unpkg.com/element-ui/lib/index.js"></script>

<script>
import store from '../store'
import searchbox from '@/components/SearchBox'

export default {
  name: 'headerbar',
  components: {
    searchbox
  },
  data () {
    return {
    }
  },
  computed: {
    channelchange () {
      return store.getters.changeTitle
    },
    titleName () {
      return store.getters.channelSwitch
    },
    titlePush () {
      return store.getters.title
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url("https://unpkg.com/element-ui/lib/theme-default/index.css");

.main__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.headerBar {
  position: relative;
  height:6%;
  border-bottom: 1px solid #c0c0c0;
}

h1, h2 {
  font-weight: normal;
  margin:0;
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

.loader {
   position: relative;
  width: 2.5em;
  height: 2.5em;
  transform: rotate(165deg); 
}
.loader:before, .loader:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0.5em;
  height: 0.5em;
  border-radius: 0.25em;
  transform: translate(-50%, -50%);
}
.loader:before {
  animation: before 2s infinite;
}
.loader:after {
  animation: after 2s infinite;
}

@keyframes before {
  0% {
    width: 0.5em;
    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
  }
  35% {
    width: 2.5em;
    box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);
  }
  70% {
    width: 0.5em;
    box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);
  }
  100% {
    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
  }
}
@keyframes after {
  0% {
    height: 0.5em;
    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
  }
  35% {
    height: 2.5em;
    box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);
  }
  70% {
    height: 0.5em;
    box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);
  }
  100% {
    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
  }
}
/**
 * Attempt to center the whole thing!
 */
html,
body {
  height: 100%;
}

/* .loader {
   position: absolute;
  left: calc(11% - 1.25em); 
} */
</style>
