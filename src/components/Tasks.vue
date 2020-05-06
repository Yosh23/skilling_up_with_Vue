<template>

    <div class="holder">
      <h1>Things you need to do</h1>
      <!-- this handels my form submission and prevents the page from refreshing and has hooked to my "addTask" method on line 56 -->
      <form class="flex" @submit.prevent="addTask">
      <!-- looks like v-model is letting me access my data object and directly change the task value string -->
      <input type="text" placeholder="enter task" v-model="task">
      {{ task }}
     <md-button class="grow md-raised md-primary" type="submit">Submit Task</md-button>
      </form>

      <ul class="list">
        <li class="flex" v-for="(data, index) in tasks" :key='index'>{{ data.task }}
           <!-- putting the button inside my list allows me to access my index of my tasks data which is why we are seeing it delete -->
           <md-button class="md-raised md-accent" @click="deleteTask(index)">Remove</md-button>

        </li>
      </ul>
      





      <!-- this is me playing with v-bind -->
      <div v-bind:class="alertObject" style="display: none;"></div>
      <div v-bind:style="{ backgroundColor: bgColor, width: bgWidth, height: bgHeight }" style="display: none;"></div>
    </div>
</template>

<script>
export default {
  name: 'Tasks',
  data() {
    // I'm linked here with the v-for on line 4 passing in the data as a parameter
    // I look for my taskss key in data object
    // I then use the index as the key
    // and display my tasks array along with index number
    return {
      // this task string is being hooked up by v-model
      task: '',
      tasks: [
        { "task": "Vue"},
        { "task": "Vue Material"},
        { "task": "Javascript"},
      ],
      // I linked to this object with the v-bind on line 7 
      // these are acting like a list of classes. 
      // if true they are displaying my css currently
      alertObject: {
        alert: true,
        anotherClass: true,
      },
      // kinda like inline styling with Vue
      bgColor: 'blue',
      bgWidth: '50%',
      bgHeight: '50px',
    }
  },
  methods: {
    //This method is being utilized on line 4
    addTask() {
      // here we are pushing our input text into our data() {} tasks array array with and setting the value of the new task key
      this.tasks.push({task: this.task})
      // when submitted we then are setting task back to an empty string
      this.task = '';
    },
    // honestly not entirely how this is working like why isn't it deleting what ever is a index one of the array
    // also what is the difference of this method 
    // deleteTask: function(index) {
    //   this.tasks.splice(index, 1);
    // } vs this one
    deleteTask(index) {
      this.tasks.splice(index,1);
    }
  }
}
</script>

<!-- when you add the  "scoped" attribute you limit CSS to this component only -->
<style src="../css/Tasks.css" scoped>
</style>
