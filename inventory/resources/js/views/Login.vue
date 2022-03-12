<template>

   <div class="container">
       <form @submit.prevent="loginUser" >
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <ul>
                <li v-for="error,index in errors" v-bind:key="index" >
                    {{ error[0] }}
                </li>
            </ul>

            <div class="form-floating">
                <input type="email" class="form-control"  id="floatingInput" v-model="form.email" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
                
            </div>
            <br>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" v-model="form.password" placeholder="Password">
                <label for="floatingPassword">Password</label>
    
            </div>

            <div class="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"> Remember me
            </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            
        </form>
    </div>
</template>
<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
    name : 'login',
    data(){
        return {
            form : {
                email : null,
                password : null
            },
            errors : {}

        }
    },
    computed:{
        ...mapGetters([
        'getLoggedIn'
        ])
    },
    created(){
        console.log("created");
        console.log(this.getLoggedIn);
        if (this.getLoggedIn){
           this.$router.push('/dashboard')
        }
        else{
            axios.get('/sanctum/csrf-cookie').then(response => {
                console.log(response.data);
            });
        }
        
    },
    methods:{
        loginUser(){
            axios.post('/login',this.form).then(response => {
                // this.errors = {}
                this.$store.dispatch('setLoggedIn',true)
                // this.getUser()
                console.log(this.$store.state.loggedIn);
                this.$router.push('/dashboard')
            }).catch(errors => {
                this.errors = errors.response.data.errors
            })        }
    }
}
</script>
