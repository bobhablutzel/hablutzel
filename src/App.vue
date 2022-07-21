<template>
  <menu-bar :model="items">
    <template #start>
      <img style="padding-right: 10px" alt="logo" :src="'/images/EA Framework Abstract.svg'" height="40" class="mr-2">
    </template>
    <template #end>
      <menu-bar :model="about"/>
    </template>
  </menu-bar>
  <router-view></router-view>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      items: [
        { label:'Home', to: {name: 'Home' }},
        { label:'Academy', to: {name: 'AcademyOverview' }},
        { label:'Framework', to: {name: 'FrameworkIntroduction'}},
      ],
      about: [
        { label:'About', to: {name: 'About'}},
      ]
    }
  }
}
</script>

<style>

:root {
  --font-family: Avenir, Helvetica, Arial, sans-serif;
  --image-map-hover: lightgray;
  --image-map-on: lightgreen;
}


#app {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}


.text-container {
  max-width: 1000px;
  display: block;
}

.panel-container {
  display: flex;
  padding: 15px 15px 15px 15px;
}

.p-tieredmenu ul {
  white-space: nowrap;
}

.p-panelmenu .p-menuitem-text {
  white-space: nowrap;
}

.caption {
  display: block;
  font-size: 0.8rem;
  text-align: center;
}

html {
  height: 100%;
  width: 100%;
}

body {
  margin: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: var(--surface-a);
  font-family: var(--font-family);
  font-weight: 400;
  color: var(--text-color);
}

</style>
