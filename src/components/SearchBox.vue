<template>
  <div class="header-el">
    <el-tooltip content="Start a mail" placement="top">
      <el-button>
        <i class="el-icon-message"></i>
      </el-button>
    </el-tooltip>
    <el-tooltip content="Show Channle Details" placement="top">
      <el-button>
        <i class="el-icon-information"></i>
      </el-button>
    </el-tooltip>
    <el-tooltip content="Channel Settings" placement="top">
      <el-button>
        <i class="el-icon-setting"></i>
      </el-button>
    </el-tooltip>

    <div class="searchBox">
      <el-input
        placeholder="Search"
        icon="search"
        v-model="input2"
        :on-icon-click="handleIconClick">
      </el-input>
    </div>

    <el-tooltip content="Show Starred Items" placement="top">
      <el-button>
        <i class="el-icon-star-off"></i>
      </el-button>
    </el-tooltip>

    <el-tooltip content="More Items" placement="top">
      <el-button>
        <i class="el-icon-more"></i>
      </el-button>
    </el-tooltip>
  </div>
  
</template>

<script>

export default {
  name: 'searchbox',
  data () {
    return {
      msg: '',
      input2: ''
    }
  },
  methods: {
    handleIconClick (ev) {
      console.log(ev)
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
  width:40%;
  padding: 0 20px 0 0;
}

.header-el i {
  padding: 0 10px;
}

.header-el button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}

.searchBox {
  width:50%;
  padding: 0 10px;
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
