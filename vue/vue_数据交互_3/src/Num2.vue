<template>
  <div>
   <div>我是子组件2的数据-----{{num}}</div>


  </div>
</template>

<script>
export default {
  data () {
    return {
      num:1000
    }
  },
  methods:{
     sendDat(){
         this.$emit("s",this.num)
     }
  },
  created(){
      this.sendDat()
  }
}
</script>


