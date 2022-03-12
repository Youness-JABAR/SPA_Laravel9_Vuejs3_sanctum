<template>
    <div>
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
            <hr>
            <div>
                <button class="btn btn-primary" @click="editPost">
                    Edit
                </button>
                <button class="btn btn-danger" @click="deletePost">
                    Delete
                </button>
            </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from 'axios'
export default {
    data()
    {
        return {
            post : []
        
        }
    },
    methods : {
        deletePost()
        {
            axios.delete(`/api/posts/${this.post.id}`).then(response => {
                this.$router.push('/posts')
            }).catch(errors => {
                console.log(errors.response.data);
            })
        },
        editPost()
        {
            this.$router.push({ name : 'editPost', params : {id : this.post.id} })
        }
    },
    created()
    {
        axios.get(`/api/posts/${this.$route.params.id}`).then(response =>{
                this.post=response.data;
            }).catch(errors => {
                console.log(errors.response.data);
            })
    }
}
</script>

<style>
</style>