<template>
    <div class="holder">
      <ul class="list">
        <li v-for="(data, index) in skills" :key='index'>{{ index }}. {{ data.skill }}</li>
      </ul>

      <div v-bind:class="alertObject"></div>
    </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skills: [
        { "skill": "Vue.js"},
        { "skill": "React.js"},
        { "skill": "FrontEnd"},
        { "skill": "FrontEnd"}
      ],
      alertObject: {
        alert: true,
        anotherClass: true,
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../css/Skills.css" scoped>
</style>
