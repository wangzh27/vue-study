<template>
  <div id="app">
        <div class="img-box">
            <input type="text" value="" v-model="keywords" class="" @input="getDat"  />
        </div>
        <ul class="list">
           <li v-for="(item,key) in dat" :key="key">{{item}}</li>

        </ul>

  </div>
</template>

<script>
export default {
  data(){
    return {
      dat:"",
      keywords:""
    }

  },
  methods:{
     getDat(){
        this.$http.jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?sugmode=2&json=1&p=3",{"jsonp":"cb",params:{"wd":this.keywords}}).then((res)=>{   
          console.log(res,"-----");
          this.dat=[...res.data.s];     
       })
     }
    
  },
  created(){
      this.getDat();
  },
  components: {
   
  }
}
</script>
<style>
.inp{ width: 300px; border:1px solid #999999}
.list{ width: 300px; margin: 0 auto;list-style: none; padding: 0}
.list li{ height: 25px; line-height: 25px; font-size: 14px; color: #999999; list-style: none; text-align: left;}
</style>



