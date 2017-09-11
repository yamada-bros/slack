<template>
  <p>aaaaaaaa</p>
</template>
<script>
export default {
  name: 'ImgModal',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.editBox {
  position: relative;
  z-index: 1;
}

.remind {
  width: 80%;
  padding: 1% 0;
  position: absolute; 
  top: 200%;
  right: 160%;
}
.remind li button {
  padding-left: 10px;
}


.edit-pop {
  box-shadow:0px 0px 10px;
  border-radius: 5px;
  width: 250px;
  position: absolute;
  top: 0;
  right: 40%;
  padding: 5%;
}
.edit-pop li {
  border-radius: 5px;
  padding: 1% 0;
}
.edit-pop button {
  font-size: .9em;
  text-align: left;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  padding: 1%;
  appearance: none;
}
.followMessage-inner {
  font-size: .5em;
}

.inner-color:hover {
  background:#58B7FF;
  color: #fff;
}
.el-icon-caret-right {
  padding-left: 45px;
}

.deleteBtn {
  color: #FF4949;
}
.deleteBtn:hover {
  background: #FF4949;
  color: #fff;
}
</style>
