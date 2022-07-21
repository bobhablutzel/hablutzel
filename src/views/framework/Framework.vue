<template>
  <div class="panel-container">
    <panel-menu :model="items"/>
    <divider layout="vertical"/>
    <div style="display: block">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "FrameworkHome",
  data() {
    return {
      items: [
        { label:'Introduction', to: {name: 'FrameworkIntroduction' }},
        { label:'Overview', to: {name: 'FrameworkOverview' }, items: [
            { label: 'The Five Disciplines', to: { name: 'FrameworkFiveDisciplines' }},
            { label: 'Organizational Alignment', to: { name: 'UnderConstruction' }},
            { label: 'Federation', to: { name: 'UnderConstruction' }},
          ]
        },
        {
          label: 'Business & Strategy', items: [
            { label: 'Overview', to: { name: 'UnderConstruction' }},
            { label: 'Strategy and Tactics', to: { name: 'UnderConstruction' }},
            { label: 'Business Capabilities', to: { name: 'UnderConstruction' }},
            { label: 'Differentiation', to: { name: 'UnderConstruction' }},
            { label: 'Naming Conventions', to: { name: 'UnderConstruction' }},
            { label: 'Technology Capabilities', to: { name: 'UnderConstruction' }},
          ]
        },
        { label:'Product & Platform', items: [
            { label: 'Overview', to: { name: 'UnderConstruction' }}
          ]
        },
        { label:'Implementation', items: [
            { label: 'Overview', to: { name: 'UnderConstruction' }}
          ]
        },
        { label:'Guidance', items: [
            { label: 'Overview', to: { name: 'UnderConstruction' }}
          ]
        },
        { label:'Overview', items: [
          { label: 'Overview', to: { name: 'UnderConstruction' }}
        ]
        },
      ]
    }
  }

}
</script>

<style scoped>

</style>