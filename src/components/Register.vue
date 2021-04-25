<template>
  <div class="vertical-center">
        <div class="inner-block">
    <div class="vue-tempalte">
        <form @submit.prevent="handleSubmit">
              <error v-if="error" :error="error"/>
            <h3>Sign Up</h3>

            <div class="form-group">
                <label>First Name</label>
                <input type="text" v-model="firstname" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label>Last Name</label>
                <input type="text" v-model="lastname" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" v-model="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password"  class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password_confirm"  class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

            <p class="forgot-password text-right">
                Already registered 
                <router-link to="/login">sign in?</router-link>
            </p>
        </form>
    </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Error from './Error'
    export default {
       name: "Register",
       components:{
        Error
        },
       data(){
           return{
               firstname: '',
               lastname:'',
               email: '',
               password: '',
               password_confirm: '',
               error:''
           }
       },
       methods: {
          async handleSubmit(){
              try{
               const data = {
                    firstname: this.firstname,
                    lastname: this.lastname,
                    email: this.email,
                    password: this.password,
                   
               }
                //    console.log(data)
                await axios.post("http://localhost:8000/api/signup", data)

            //    console.log(response.id)
               this.$router.push('/login')
          }catch (err) {
            this.error = "Something Went Wrong"
            }
          }
        }
    }
    
</script>



