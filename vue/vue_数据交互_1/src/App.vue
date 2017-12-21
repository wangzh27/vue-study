<template>
  <div id="app">

    <Num :num="dat"></Num>
    <div class="btn">
      <button v-on:click="add">增加</button>
      <button @click="jianshao">减少</button>
    </div>

  </div>
</template>

<script>
  import Num from './Num'
  export default {
    data () {
      return {
        dat: 0
      }
    },
    methods: {
      add(){
        this.dat++;
      },
      jianshao(){
        this.dat--;
      }
    },
    components: {
      Num
    }
    // 下节课：子组件有初始数据，父组件在子组件的基础上增加或减少
  }
</script>
<style>
  .app {
    text-align: center;
    font-size: 100px;
    font-weight: border
  }

  .btn {
    text-align: center
  }

  button {
    width: 100px;
    height: 50px;
    font-size: 30px
  }
</style>
