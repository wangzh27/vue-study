<template>
  <div>
     <Num1 :dat="num" >
       <template slot="item" scope="props">
           <span>{{props.text}}</span>
       </template>

     </Num1>
    <div>我是父组件的数据------{{num}}</div>
    <button @click="add">+</button>
     <button @click="jianshao">-</button>

  </div>
</template>

<script>
import Num1 from './Num1'
export default {
  data () {
    return {
      num:0
    }
  },
  methods:{
    add(){
      this.num++;
    },
    jianshao(){
      this.num--;
    },
    getDat(dat){
       this.num=dat
    }
  },
  components:{
    Num1
  }
}
</script>

<style lang="scss">

</style>
