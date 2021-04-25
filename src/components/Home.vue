<template>
    <div class="vertical-center">
        <div class="inner-block">
            <div v-if="user">hello, {{user.firstname}} {{user.lastname}} </div>
            <div v-if="!user">  
                <h5>You are not logged in! Please
                    <router-link to="/login">Login</router-link>
                </h5>
            </div>
        </div>
   </div>
</template>
<script>

import {mapGetters} from 'vuex'

export default {
  
    name: 'Home',
    computed: {
        ...mapGetters(['user'])
    }

}
</script>
