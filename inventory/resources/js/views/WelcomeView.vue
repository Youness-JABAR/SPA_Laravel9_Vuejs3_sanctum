<template>
  <div class="">
    <h1>This is welcome page</h1>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed:{
    ...mapGetters([
      'getLoggedIn'
    ])
  },

  created(){
      console.log(this.getLoggedIn)
  }
}
</script>