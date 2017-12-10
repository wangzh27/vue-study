<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <com2></com2>
    <com3></com3>
  </div>
  
</template>

<script>
import com2 from './components/com2'
import com3 from './components/com3'
export default {
  name: 'app',
  components:{
  	com2,com3
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
