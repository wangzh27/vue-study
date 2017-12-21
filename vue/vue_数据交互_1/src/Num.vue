<template>
  <div >
     <div class="app">数字：{{num}}</div>

  </div>
</template>

<script>
export default {
  data () {
    return {
       
    }
  },
  props:{
    "num":{
      type:Number,
      default:10
    }
  },
  methods:{
     
  }
}
</script>
<style>
.app{ text-align: center;font-size: 50px; font-weight: border}
.btn{ text-align: center}

</style>
