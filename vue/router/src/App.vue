<template>
  <div id="app" class="box">
     <ul>
       <li>
          <router-link to="/" exact>首页</router-link>
       </li>
        <li>
           <router-link to="/new/" >新闻页</router-link>
        </li>
     </ul>
     <div class="mainBox">
        <router-view>
          
          
          
        </router-view>
     </div>           
    
   
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
     console.log(this.$route.params);
  }
}
</script>
