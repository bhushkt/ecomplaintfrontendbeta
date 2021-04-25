<template>
<div class="App">
  <div class="vertical-center">
    <div class="inner-block">
        <div class="vue-tempalte">
            <form @submit.prevent="handleLogin">
              <error v-if="error" :error="error"/>
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" v-model="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/Forgot">Forgot password ?</router-link>
            </p>

        </form>
    </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import Error from './Error'

export default {
    name: 'Login',
    components:{
        Error
    },
  data() {
    return {
      email: "",
      password: "",
      error:""
    };
  },
  methods: {

    async handleLogin() {
            try {
                const data = {
                        email : this.email,
                        password: this.password
                        }
                       const loginData = await axios.post("http://localhost:8000/api/signin/", data)
                       localStorage.setItem('Token', JSON.stringify(loginData.data.token))
                        localStorage.setItem('User', JSON.stringify(loginData.data))
                        this.$store.dispatch('user', loginData.data.user)
     

                        this.$router.push('/')

                    }catch (err) {
                        this.error = "Invalid Username/Password"
                    }
            }
        }
}
</script>