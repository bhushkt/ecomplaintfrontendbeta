<template>
    <div class="vertical-center">
    <div class="inner-block">
    <form @submit.prevent="handleSubmit">
        <h3>
            Forgot Password
        </h3>
        <div class="form-group">
            <label>Email</label>
            <input type="email" v-model="email" class="form-control" placeholder="Email " />
        </div>

        <button class="btn btn-primary btn-block">Submit</button>
    </form>
    </div>
    </div>
</template>
<script>
    export default {
        name: 'Forgot',
        data() {
            return {email: ''}
        },
        methods:{
            async handleSubmit(){
                console.log("reset password route")
            }
        }
    }
</script>