<template>
 <div  id="app">
      <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
    data () {
     return {
       message:[]
     }
   },
  created () {
    this.$api.get('login/show', null, r => {
        this.message=r
       } )
  }
}
</script>