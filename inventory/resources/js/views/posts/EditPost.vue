<template>
    <div class="container ">
       <form @submit.prevent="updatePost" >
            <ul>
                <li v-for="error,index in errors" v-bind:key="index" >
                    {{ error[0] }}
                </li>
            </ul>

            <div class="form-group mb-2">
                <input type="text" class="form-control" v-model="form.title" placeholder="Title">
            </div>
            <div class="form-group mb-2">
                <textarea class="form-control" rows="3" v-model="form.body" placeholder="Body"></textarea>
            </div>

            <button class="w-100 btn btn-lg btn-primary" type="submit">update</button>
            
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data()
    {
      return {
        form : {
          title : null,
          body : null
        },
        post : null,
      }
    },
    created()
    {
        axios.get(`/api/posts/${this.$route.params.id}`).then(response =>{
                this.post=response.data;
                this.form.title =this.post.title;
                this.form.body =this.post.body;
                // console.log(this.post);

            }).catch(errors => {
                console.log(errors.response.data);
            });
        
        
    //   this.form.title = this.getOnePost(this.$route.params.id).title
    //   this.form.body = this.getOnePost(this.$route.params.id).body
    //   this.post = this.getOnePost(this.$route.params.id)
    //   if(this.post.user_id != this.getAuthId)
    //   {
    //     this.$router.push('/posts')
    //   }
    },
    methods : {
      updatePost()
      {
        axios.put(`/api/posts/${this.post.id}`,this.form).then(response => {
            
        //   this.$router.push(`/posts/${updatePost.id}`)
            this.$router.push('/posts')
        }).catch(err => {
            this.errors = err.response.data.errors
          console.log(err.response.data);
        })
      }
    }
}
</script>

<style>
</style>