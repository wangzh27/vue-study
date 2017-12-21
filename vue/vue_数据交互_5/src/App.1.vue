<template>
  <div id="app">
     <div class="img-box">
        <img :src="dat.CoverImage" alt=" " />
        {{dat.CoverImage}}
     </div>


  </div>
</template>

<script>
export default {
  methods:{
    dat:""
  },
  created(){
     this.$http.jsonp("http://api.car.bitauto.com/Exhibition/GetExhibitionSerial.ashx?eid=243&sid=1991").then((res)=>{   
          console.log(res.body.data)   
          this.dat={...res.body.data}        
     })
  },
  components: {
   
  }
}
</script>
<style>
.img-box{ width: 500px; height: 300px;}
.img-box img{ width: 100%; display: block}
</style>



