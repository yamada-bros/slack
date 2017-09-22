<template>
  <div class="sign-in">
    <div class="sign-in-box">
      <p class="sign-in-title">
        Sign in
      </p>
      <div class="sign-in-desc">
        <p>
          Enter your email address and password.
        </p>
      </div>
      <div class="sign-in-formBox">
        <el-input size="large" placeholder="email" icon="message" class="sign-in-form" v-model="email"></el-input>
      </div>
      <div class="sign-in-formBox">
        <el-input size="large" placeholder="password" icon="setting" class="sign-in-form" v-model="password"></el-input>
      </div>
      <div class="buttonBox">
        <el-button 
          type="danger" 
          size="large" 
          class="sign-in-button"
          @click="signIn">
          Continue
        </el-button>
      </div>
    </div>

    <div class="sign-in-textBox">
      <p>
        Do not have an account? Please create an account from 
        <el-button type="text" size="large">
          <router-link :to="'SignUp'">here.</router-link>
        </el-button>
      </p>
    </div>

    <router-link :to="'Slack'">slack</router-link>
  </div>
</template>

<script>
import { firebaseModel } from '@/firebaseModel'
export default {
  name: 'signin',
  data () {
    return {
      msg: 'Sign in',
      password: '',
      email: ''
    }
  },
  methods: {
    signIn () {
      firebaseModel.signIn(this.email, this.password)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sign-in {
  width: 100%;
  padding-top: 5%;
}

.sign-in-box {
  background: #fff; 
  width: 35%; 
  padding: 5%;
  margin: auto;
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.4);
}

.sign-in-title {
  font-family: fantasy;
  font-size: 2rem;
  margin: 0;
  padding: 0;
  text-align: center;
}

.sign-in-desc {
  color: #BE0002;
  font-family: fantasy;
  text-align: center;
}

.sign-in-formBox {
  display: flex;
}
.sign-in-form {
  margin: 0 0 5% 0;
}

.buttonBox {
  text-align: right;
}

.el-button--danger {
  font-family: fantasy;
  font-size: 1rem;  
}

.sign-in-textBox {
  margin-top: 3%;
  text-align: center;
  font-family: fantasy;
}

a {
  color: #42b983;
}
</style>
