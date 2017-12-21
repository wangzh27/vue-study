<template>
  <div>
     {{msg}}

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  watch:{
     "$route"(){
         this.msg=this.$route.params.id;
     }
  },
  methods:{
  	
  }
}
</script>
