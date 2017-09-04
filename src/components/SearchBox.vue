<template>
  <div class="header-el">
        <i class="el-icon-message"></i>
        <i class="el-icon-information"></i>
        <i class="el-icon-setting"></i>
        <i class="el-icon-search"></i>
      <div class="searchBox">
        <i class="el-icon-search"></i>
        <input 
          id="share-colors" 
          name="share_colors"  
          class="main__share-input"
          placeholder="Search" />
      </div>
        @
        <i class="el-icon-star-off"></i>
        <i class="el-icon-more"></i>
  </div>
   
</template>

<script>

export default {
  name: 'searchbox',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header-el {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width:30%;
}

.searchBox {
  border: 1px solid #000;
  border-radius: .25rem;
  height: 30px;
  display: flex; 
  padding:1%;
}

.search-button {
  align-items: center; 
  background: #fff;
  cursor: pointer;
  border:none;
}

.main__share-input {
  align-items: center; 
  display: block;
  width: 100%; 
  border: none;
  resize: none;
  height: 29px;
  line-height: 30px; 
}
.main__share-input:hover, .main__share-input:focus, .main__share-input:active {
  border-color: #2780F8;
  outline: none;
}
.main__share-input:focus {
  box-shadow: 0 0 7px rgba(39, 128, 248, 0.15);
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
</style>
