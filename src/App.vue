<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Top from '@/components/Top'
export default {
  name: 'app',
  components: {
    Top
  }
}
</script>

<style>
html, body {
  height: 100%;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;  
   -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

</style>
