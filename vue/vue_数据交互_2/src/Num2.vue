<template>
  <div style="border:1px solid blue;height:100px; line-height:100px; padding:10px; margin:0 0 30px">
     <div class="app">子组件2的数字：----{{wangliang2}}</div>
      
  </div>
</template>

<script>
export default {
  data () {
    return {
      dat:10
    }
  },
  props:["wangliang2"],
  methods:{

     getDat(s){   
        this.dat=s;     
        console.log(s)
      }
     
  },
  created(){
    //  this.$root.$on("evt",(s)=>{
    //      this.num=s;
    //  })
  }

}
</script>
<style>
.app{ text-align: center;font-size: 30px; font-weight: border}
.btn{ text-align: center}
</style>
