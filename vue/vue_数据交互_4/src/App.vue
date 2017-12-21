<template>
  <div id="app">
      <div>亮哥共有肯德基：{{$store.getters.getKfc}}</div>
       <div>亮哥的体重：{{$store.getters.getWeight}}</div>
      <div>
          <button @click="add">增加肯德基</button>
          <button @click="reduce">减少肯德基</button>
      </div>

    
      



  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  methods:{
    add(){
      this.$store.commit("zengjia");
      this.$store.dispatch("addWeight");
    },
    reduce(){
      this.$store.commit("jianshao");
    }
  },
  components: {
    HelloWorld
  }
}
</script>


