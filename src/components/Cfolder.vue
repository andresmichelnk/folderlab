<template>

 <dt>
   <!--<button @click="abrircarpeta" class="row flex-grow" >+</button>-->
  <h3 @click="abrircarpeta">+ {{mook.namefolder}}</h3>
    <div v-if="abrir">
    <ul>
      <c-folder v-for="f of mook.folders"
        :bus="bus"
        :mook="f"
        :key="f.namefolder"/>
    </ul>
    </div>
 </dt>


</template>



<script>


export default {
  name: 'c-folder',

 
  props:{
    mook: {},
    bus: {}
  },

   data() {
    return {
       abrir:false
    }
  },
 
  methods: {
     abrircarpeta() {
        this.bus.selectFolder(this.mook);
        this.abrir = !this.abrir;
      }
  }, 
}



 
  




</script>