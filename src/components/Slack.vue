<template>
  <div class="slack">
    <!-- <h1>{{ msg }}</h1> -->
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

* {
  box-sizing: border-box;
} 

html,
body {
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 17px;
  font-family: "Lato", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #555459;
  overflow: hidden;
}

h1,
h2,
h3,
h4 {
  color: #2C2D30;
}

strong {
  font-weight: 700;
}

.slack {
  /*border: 2px solid #000;*/
  width:100%;
  height:100%;
}

.feed {
  height:100%;
}

.sidebar {
  width:20%;
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
