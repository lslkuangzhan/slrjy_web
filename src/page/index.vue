<template>
 <div  id="app">
      <p>{{ message }}</p>
  </div>
</template>
<script>

import axios from 'axios'
export default {
    data () {
     return {
       message:"asddasdasd"
     }

   },
  // created () {

  //   // this.$api.get('login/show').then(res => console.log(res));
  //   axios.get('api/login/show').then(function(response){
  //      message = response.data;
  //     })

  // }

   abc () {
      message:"123456789"
    }
};
    
</script>