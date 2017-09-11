<template>
  <header class="main__header">
    <div class="main__name">
      <p>#{{ titleName }}</p></br>
      <el-tooltip content="Star this channel" placement="top">
        <el-button><i class="el-icon-star-off">|</i></el-button>
      </el-tooltip>
      <el-tooltip content="View member list"placement="top">
        <el-button><i class="el-icon-share"> 6 |</i></el-button>
      </el-tooltip>
      <el-tooltip content="View pinned items" placement="top">
        <el-button><i class="el-icon-d-arrow-left"> 0 |</i></el-button>
      </el-tooltip>
      <el-button icon="edit" size="mini">Add a topic</el-button>
    </div>
    <searchbox openDelay="200"></searchbox>
  </header>
</template>


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

/* @import url("https://unpkg.com/element-ui/lib/theme-default/index.css"); */

.main__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.main__name {
  padding-left: 15px;
  line-height: .5em;
}
.main__name p {
  font-weight: bold;
  font-size: 1.2em;
}

 .main__name button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
} 

.headerBar {
  position: relative;
  height:5%;
  padding: 1% 0;
  border-bottom: 1px solid #c0c0c0;
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

</style>
