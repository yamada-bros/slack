<template>
  <div id="app">
    <slack></slack>
  </div>
</template>

<script>
import slack from '@/components/slack'
export default {
  name: 'app',
  components: {
    slack
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
