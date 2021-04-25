<template>
  <div id="App">
    <Nav />
    <router-view />
  </div>
  
</template>

<script>
import axios from 'axios'
import Nav from './components/Nav'
// import Home from './components/Home'
// import Login from './components/Login'


export default {
  name: 'App',
  components: {
    Nav
  },
    async created()
    {
        const userData = JSON.parse(localStorage.getItem('User'))

        const userID = userData.user._id
      
       
        const response = await axios.get(`http://localhost:8000/api/user/${userID}`, {
            headers: {
                Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('Token'))

            }
        })
        
         
       this.$store.dispatch('user', response.data)
       
    }
  }
</script>

