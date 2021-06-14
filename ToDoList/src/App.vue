<template>
<div id="app" >
	<h1>Todo List</h1>
    <div class="ui raised segments" style="margin : 50px auto; width :75%; text-align: left; padding-left :20px;">
		<div class="ui vertical segment">
			<div class="ui transparent input">
				<i class="chevron down icon" @click="allDoneTasks()" style="cursor: pointer;"></i>
				<input type="text" @keyup.enter="addTask()" v-model="newTask" placeholder="Ajouter une nouvelle tâche" style="width : 100%; margin-left : 30px; ">
			</div>
		</div>
		<ToDo 
		v-for="task in filtered"
		:taskName="task.taskName"
		:taskDone="task.taskDone"
		:key="task.taskName"
		@change="modifyTaskDone(task)"
		@closeTask="closeTask(task)"
		/>


		<div class="ui vertical segment">
			<div class="inline">
				<p>{{toDoTasks}} tâches à faire </p>
				<div class="ui button" :class="{primary : filter=='all'}"  @click="filter = 'all'">Toutes</div>
				<div class="ui button" :class="{primary : filter=='todo'}" @click="filter = 'todo'">A faire</div>
				<div class="ui button" :class="{primary : filter=='completed'}" @click="filter = 'completed'">Faites</div>
				<div class="ui button"  @click="deleteDoneTasks()">Supprimer les tâches terminées</div>
			</div>
		</div>
	</div>
</div>

</template>

<script>
import ToDo from "./components/ToDo.vue";

export default {
  name: "App",
  components: {
	ToDo,
   
  },
	data () {
    return {
		tasks : [
			{
				taskName : "Aller au marché",
				taskDone : false,
			},
			{
				taskName : "Boire",
				taskDone : true,
			},
			{
				taskName : "Dormir à 6h00",
				taskDone : false,
			}
		],

		newTask : "",

		filter : "all",
		}
				
	},
    computed: {
		toDoTasks () {
			return this.tasks.filter(item => !item.taskDone).length;
		},

		filtered () {
			if (this.filter == "todo") return this.tasks.filter(item => !item.taskDone );
			else if(this.filter == "completed") return this.tasks.filter(item => item.taskDone);
			else return this.tasks

		}

					
	},
	methods: {
		addTask (){
			this.tasks.unshift(
				{
					taskName : this.newTask,
					taskDone : false
				}
			);
			this.newTask=""
		},
		deleteDoneTasks(){
			
			this.tasks= this.tasks.filter(item => !item.taskDone); 
			
		},
		modifyTaskDone(task){
			if (task.taskDone==true) task.taskDone=false;
			else task.taskDone=true;		
		},
		allDoneTasks(){
			for(var i=0; i<this.tasks.length; i++)
			{
				this.tasks[i].taskDone=true;
			}
			
		},	
		closeTask(task){
			this.tasks= this.tasks.filter(item => item !=task)
		}	

    }
					

};
</script>
<style src="./assets/semantic/semantic.min.css"></style>
<style lang="scss" >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.focused {
	background-color:#2c3e50;
	color : blanchedalmond;
	border: 1px solid;
}
</style>
