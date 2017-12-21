// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'

Vue.use(Vuex)

const store=new Vuex.Store({
   state:{     //存储数据状态
      kfc:10,    //亮哥的肯德基
      weight:92 //亮哥体重

   },  
   mutations:{
      zengjia(state){
          state.kfc+=1;
      },
      jianshao(state){
        state.kfc-=1;
      },
      zengjiatizhong(state){
          state.weight+=5;
      }
   },
   actions:{
       addWeight({commit}){
         setTimeout(function(){
            commit("zengjiatizhong")
         },5000);    
       }
   },
   getters:{
        getKfc(state){
            return  state.kfc +"顿"; 
        },
        getWeight(state){
            return state.weight + "kg";
        }
   }

    
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
