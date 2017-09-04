<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link :to="'Hello'">sign in</router-link>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Sign up...user name, e-mail, password'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
