import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Index from './component/Index.vue'
import New from './component/New.vue'
import New2 from './component/New1.vue'
import Page1 from './component/page1.vue'
import Page2 from './component/page2.vue'


Vue.use(VueRouter)

const routes=[
  {
  	path:"/",
  	component:Index
  },
  {
  	path:"/new/",
  	component:New,
    children:[
      {
        path:":id",
        component:Page1
      }
    ]
  },
  {
  	path:"*",
  	redirect:"/"
  }
];

const router=new VueRouter({
	routes,
	linkActiveClass:"current",
	mode:"history",
  scrollBehavior:()=>{
    return {selector:".box"}
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
