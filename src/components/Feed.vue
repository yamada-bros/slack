<template>
  <div class="feed">
  <headerBar class="headerBar"></headerBar>
  <message></message>
  <formbox class="formbox"></formbox>
  </div>
</template>

<script>
import headerBar from '@/components/HeaderBar'
import message from '@/components/Message'
import formbox from '@/components/FormBox'

export default {
  name: 'feed',
  components: {
    headerBar, message, formbox
  },
  data () {
    return {
      msg: 'this is feed'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.feed {
  width:80%;
  float:left;
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
