<template>
  <div class="dashboard">
    <h1>This is dashboard page</h1>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  created(){
    if (!this.getLoggedIn){
      this.$router.push('login')
    }
  },
  computed:{
    ...mapGetters([
      'getLoggedIn'
    ])
  },
  
}
</script>