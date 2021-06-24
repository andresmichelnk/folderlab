<template>

<div>
  <div class="row">
    <dl class="list-group" style="min-width: 300px;">
        <c-folder :bus="bus" :mook="mook"></c-folder>
    </dl>    
    <tree-folder  class="flex-grow" :bus=bus ref="componente" ></tree-folder>  
  </div>
     <div class="caja">
       <ul class="list-group">
         <h5>Registros</h5>
        <li v-for="log,i in bus.logs" :key="i">
         <h6>~ {{log}}</h6>
        </li>
      </ul>
     </div>
</div>
  
</template>

<script>
import TreeFolder from './components/TreeFolder.vue'
import Cfolder from './components/Cfolder.vue'
import {mook} from './utiles/tree'
import Vue from 'vue'

var bus = new Vue({
    data() {
        return {
            selecFolder:null,
            logs:[]
        }
    },

    methods: {
        selectFolder(folder){
            this.selecFolder = folder
            this.logs.push(
              this.selecFolder.namefolder
            )
        },
        
    },
})


export default {
  name: 'App',

  components: {
    'tree-folder': TreeFolder,
    'c-folder':Cfolder
  },
  data:function(){
    return {
      bus,
      mook,
      
    }
  }
}
</script>

<style>
.row {
    display: flex;
    flex-direction: row;;
  }
  
  .flex-grow{
    flex-grow: 1;
  }
  
  .caja{
     border:red 1px solid ;
     margin-top: 5%;
     margin-right: 80%;
     text-align: centers;
     
  }
  
</style>
