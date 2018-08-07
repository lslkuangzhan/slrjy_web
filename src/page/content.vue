<template>
 <div  id="app">
      <p>{{ message }}</p>
  </div>
</template>
<script>

import axios from 'axios'
export default {
    data(){
        return {
            showLogin:true,
            message: 'hello vue',
            user:'',
            homeContent: false,
        }
    },
   
};
    
</script>