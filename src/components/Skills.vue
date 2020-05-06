<template>
    <div class="holder">
      <!-- this handels my form submission and prevents the page from refreshing and has hooked to my "addSkill" method on line 56 -->
      <form @submit.prevent="addSkill">
      <!-- looks like v-model is letting me access my data object and directly change the skill key -->
      <input type="text" placeholder="enter skill" v-model="skill">
      {{ skill }}
     <button type="submit">Submit Skill</button>
      </form>

      <ul class="list">
        <li v-for="(data, index) in skills" :key='index'>{{ data.skill }}
           <!-- putting the button inside my list allows me to access my index of my skills data which is why we are seeing it delete -->
           <button @click="deleteSkill(index)">X</button>

        </li>
      </ul>
      <p>Your Skills</p>






      <div v-bind:class="alertObject"></div>
      <div v-bind:style="{ backgroundColor: bgColor, width: bgWidth, height: bgHeight }"></div>
    </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    // I'm linked here with the v-for on line 4 passing in the data as a parameter
    // I look for my skills key in data object
    // I then use the index as the key
    // and display my skills array along with index number
    return {
      // this skill string is being hooked up by v-model
      skill: '',
      skills: [
        { "skill": "Vue.js"},
        { "skill": "React.js"},
        { "skill": "FrontEnd"},
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
    addSkill() {
      // here we are pushing our input text into our data() {} skills array array with and setting the value of the new skill key
      this.skills.push({skill: this.skill})
      // when submitted we then are setting skill back to an empty string
      this.skill = '';
    },
    // honestly not entirely how this is working like why isn't it deleting what ever is a index one of the array
    // also what is the difference of this method 
    // deleteSkill: function(index) {
    //   this.skills.splice(index, 1);
    // } vs this one
    deleteSkill(index) {
      this.skills.splice(index,1);
    }
  }
}
</script>

<!-- when you add the  "scoped" attribute you limit CSS to this component only -->
<style src="../css/Skills.css" scoped>
</style>
