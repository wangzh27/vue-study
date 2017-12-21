<template>
  <div >
    <Num :wangliang1="dat" v-on:evt="getDat"></Num>

    <Num2 :wangliang2="dat" v-on:evt="getDat"></Num2>
    
    <div class="btn" >
      <button v-on:click="add">增加</button>
      <button @click="jianshao">减少</button>
      <div>我是父组件----{{dat}}</div>
     
    </div>

  </div>
</template>

<script>
import Num from './Num'
import Num2 from './Num2'
export default {
  data () {
    return {
      dat:""
    }
  },
  methods:{
      add(){
         this.dat++;
      },
      jianshao(){
         this.dat--;
      },
      getDat(s){   
        this.dat=s;     
        console.log(s)
      }
     
  },
  created(){
    //  this.$on("evt",(s)=>{
    //    console.log(s)
    //    this.dat=s;
    //  })
  },
  components:{Num,Num2}
}
</script>
<style>
.app{ text-align: center;font-size: 100px; font-weight: border}
.btn{ text-align: center}
button{ width: 100px; height: 50px; font-size: 30px}
</style>
