<template>
  <div>
     <p>这是新闻页内容</p>

      <p><button @click="buttonPushFun">点击跳转push</button></p>
      <p><button @click="buttonReplaceFun">点击跳转replace</button></p>
      
      
      <div class="">
          <ul>    
            <li v-for="(item,key) in [3333,4444,5555,66666]"><router-link :to="{path:'/new/'+item}">子路由内容{{item}}</router-link></li>
            
          </ul>
          
          <div class="childBox">
              <router-view></router-view>
          </div>
        
      </div>
    
      <br />
      <br />
      <br />
      <br />
      <br />
      <p class="box">最底端</p>
      

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'fgdfgfd'
    }
  },
  methods:{
  	 buttonPushFun(){
  	 	this.$router.push({path:"/"});
  	 },
  	  buttonReplaceFun(){
  	 	this.$router.replace({path:"/"});
    }
    
  },

  beforeRouteEnter(to,from,next){
     console.log("进入路由");
     console.log(to);
     next();
  },
  beforeRouteUpdate(to,from,next){
    console.log("路由改变",to);
    next();
  },
  beforeRouteLeave(to,from,next){
    console.log("离开路由");
    next();
  }
}
</script>
