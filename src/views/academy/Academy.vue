<template>
  <div class="panel-container">
    <panel-menu :model="topics" class="navigation"/>
    <divider layout="vertical"/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "ArchitectureAcademy",
  data() {
    return {
      topics: [
        { label:'What is Architecture?', to: {name: 'ArchitectureIntro' }},
        { label:'Becoming an Architect', to: { name: 'BecomingAnArchitect'}},
        { label:'ARSCIV', to: {name: 'ARSCIV-X' }}
      ]
    }
  }

}
</script>

<style scoped>

</style>