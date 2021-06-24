<template>
  <div style="border:blue 1px solid">
    <template v-if="!(bus.selecFolder === null)">
      <ul>
        <li @click="bus.selectFolder(c)" class="folder" v-for="c of bus.selecFolder.folders" :key="c.namefolder">
          <h3>+ {{c.namefolder}}</h3>
        </li>
      </ul>
      <ul>
        <li class="file" v-for="ite of bus.selecFolder.files" :key="ite.name">
          <h4>- {{ite.name}}</h4>
        </li>
      </ul>
    </template>
  </div>
</template>


<script>
export default {
  name: 'TreeFolder',

  
  props:{
    bus: {},
    
    
  },

  data() {
      return {
        
      }
  },

  methods: {
     
  },
}


</script>
<style>
.folder{
  border:1px solid red;
}
.file{
  border: 1px solid blue  ;
}

</style>