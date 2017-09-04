<template>
  <div class="slack">
    <sidebar class="sidebar"></sidebar>
    <feed class="feed"></feed>
  </div>
</template>

<script>
import sidebar from '@/components/Sidebar'
import feed from '@/components/Feed'

export default {
  name: 'slack',
  components: {
    sidebar, feed
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.slack {
  width:100%;
  height:100%;
}

.feed {
  height:100%;
}

.sidebar {
  width:200%;
  float: left;
  height:100%;
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

</style>
