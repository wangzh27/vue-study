// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import vueResource from 'vue-resource'

Vue.use(vueResource)



Vue.use(Vuex)

const store=new Vuex.Store({
   state:{       //存储数据状态
     

   },  
   mutations:{
     
   },
   actions:{
      
   },
   getters:{
       
   }
   
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
