<template>
  <div class="signUp">
    <div class="sign-up-box">
      <p class="sign-up-title">
        Sign up
      </p>
      <div class="sign-up-sub">
        <p>
          Join slack today.
        </p>
      </div>
      <div class="sign-up-formBox">
        <el-input size="large" placeholder="Full name" icon="information" class="sign-up-form"></el-input>
      </div>
      <div class="sign-up-formBox">
        <el-input size="large" 
                  placeholder="Email"
                  icon="message" 
                  class="sign-up-form"
                  v-model="email">
        </el-input>
      </div>
      <div class="sign-up-formBox">
        <el-input 
          size="large" 
          placeholder="Password" 
          icon="setting" 
          class="sign-up-form"
          v-model="password">
        </el-input>
      </div>
      <p class="sign-up-desc">
        <el-checkbox v-model="checked" size="small"></el-checkbox>
        Personalize Slack based on where you've seen Slack content on the web.
      </p>
      <div class="buttonBox">
        <el-button 
          type="danger" 
          size="large" 
          class="sign-up-button"
          @click="sign_up">
          sign up
        </el-button>
      </div>
      <p class="sign-up-desc">
        By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use. 
        Others will be able to find you by email or phone number when provided.
      </p>
      <el-button type="text">Advanced options</el-button>
    </div>

    <div class="sign-up-textBox">
        Already have an account? Sign in from 
        <el-button type="text" size="large">
          <router-link :to="'/SignIn'">here.</router-link>
        </el-button>
    </div>
    <router-link :to="'Slack'">slack</router-link>
  </div>
</template>

<script>
import { firebaseModel } from '@/firebaseModel'
export default {
  name: 'Sign_up',
  data () {
    return {
      checked: true,
      password: '',
      email: ''
    }
  },
  methods: {
    sign_up () {
      console.log(firebaseModel.signUp)
      firebaseModel.signUp(this.email, this.password)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.signUp {
  width: 100%;
  padding-top: 5%;
}

.sign-up-box {
  background: #fff; 
  width: 35%; 
  padding:  2% 5%;
  margin: auto;
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.4);
}

.sign-up-title {
  font-family: fantasy;
  font-size: 2rem;
  margin: 0;
  padding: 0;
  text-align: center;
}

.sign-up-desc {
 font-size: .8em;
}
.sign-up-sub {
  color: #BE0002;
  font-family: fantasy;
  text-align: center;
}

.sign-up-formBox {
  display: flex;
}
.sign-up-form {
  margin: 0 0 5% 0;
}

.buttonBox {
  text-align: right;
}

.el-button--danger {
  font-family: fantasy;
  font-size: 1rem;  
}

.sign-up-textBox {
  margin-top: 2%;
  text-align: center;
  font-family: fantasy;
}

a {
  color: #42b983;
}
</style>
