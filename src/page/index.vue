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
     mounted:function(){
        this.created();
    },
    methods:{
         created () {
        axios.get('api/login/show').then((response) => {
        this.message= response.data;
        console.log(response);
      })
       }
    }
  // created () {

  //   // this.$api.get('login/show').then(res => console.log(res));
  //   axios.get('api/login/show').then(function(response){
  //      message = response.data;
  //     })

  // }

   
};
    
</script>