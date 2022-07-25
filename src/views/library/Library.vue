<template>
  <div class="panel-container">
    <panel-menu :model="topics" class="navigation"/>
    <divider layout="vertical"/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "ArchitectureLibrary",
  data() {
    return {
      topics: [
        { label:'Overview', to: { name: 'LibraryOverview'}},
        { label:'Job Descriptions', to: { name: 'JobDescriptionList'}, items: [
            {label: 'Chief Architect', to: {name: 'ChiefArchitectJD'}},
          ]
        },
      ]
    }
  }

}
</script>

<style scoped>

</style>

{ path: '/library', name: 'Library', component: Library,
children: [
{ path: '', name: 'FrameworkIntroduction', component: LibraryScaffold },
{ path: 'overview', name: 'FrameworkOverview', component: LibraryOverview },
{ path: 'jd', name: 'FrameworkFiveDisciplines', component: LibraryJobDescriptions },
]
},
