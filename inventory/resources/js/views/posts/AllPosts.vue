<template>
  <div>
        <div v-if="posts.length == 0" >
            No post available, please create a post
        </div>
        <div v-for="post,index in posts" v-bind:key="index" >
            <h3>
                <router-link :to="'/posts/' + post.id">{{ post.title }}</router-link>
            </h3>
            <p>{{ post.body }}</p>
            <hr>
        </div>
        
  </div>
</template>

<script>
import axios from 'axios'
export default {
    
    data(){
        return {
            posts:[],
        }
    },
    created()
    {
        axios.get('/api/posts').then(response => {
            this.posts=response.data;
            // this.$store.dispatch('setPosts',response.data)
            // console.log(response.data);
        }).catch(errors => {
            console.log(errors.response.data);
        })
    }
}
</script>

<style>
</style>