<template>
  <div>
   <div>我是子组件1的数据-----{{dat}}</div>
   <div>
       <slot name="item" :text=" '这是作用域插槽' "></slot>
   </div>


  </div>
</template>

<script>
export default {
  data () {
    return {
      num:1000
    }
  },
  props:["dat"],
  methods:{
     sendDat(){
         //this.$emit("s",this.num)
     }
  },
  created(){
      this.sendDat()
  }
}
</script>


