<template>
  <div class="ui vertical segment" style="display : flex; justify-content : space-between;">
    <div class="ui checkbox">
      <input type="checkbox" tabindex="0" :checked="taskDone"  @change="emitTaskDone" >
      <label :class="completed">{{taskName}}</label> 
    </div>
    <div style="margin-right : 20px; cursor: pointer;">
    <i class="ui close icon"  @click="emitCloseTask" ></i>  
    </div>
    
    
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    taskName: String,
    taskDone : Boolean,
    
  },
  computed :{
    completed(){
      return this.taskDone===true ? 'completed' : ''
    }
  },
  methods :{
    emitTaskDone(){
      console.log("Evenement emit")
        this.$emit('changeTaskdone')
    },

    emitCloseTask(){
      console.log("Evenement emit")
        this.$emit('closeTask')
    }
  }
}
</script>
<style src="../assets/semantic/semantic.min.css"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.completed {
  text-decoration: line-through;
 ;
}
</style>
