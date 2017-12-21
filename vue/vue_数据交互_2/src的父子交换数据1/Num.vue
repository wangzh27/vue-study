<template>
  <div style="border:1px solid red; height:100px; margin:0 0 30px; text-align:center; padding:10px">
     <div class="app">子组件1的数字：----{{wangliang1}}</div>
      
    <button @click="fachu">发出</button>

  </div>
</template>

<script>
export default {
  data () {
    return {
      num:1000
    }
  },
  props:["wangliang1"],
  methods:{
     fachu(){
       console.log(this);
       this.$emit("evt",this.num);
     }
  },
  created(){
  
    //this.fachu()   
  }

}
</script>
<style>
.app{ text-align: center;font-size: 30px; font-weight: border}
.btn{ text-align: center}
</style>
