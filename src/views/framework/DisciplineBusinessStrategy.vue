<template>
  <ImageMap :image-map='this.imageMap()' src="/images/EA Framework.svg" class="imageMap" on="Business & Strategy"/>
  <div class="text-container">
    <p>Business Strategy...</p>
  </div>
</template>

<script>

import ImageMap from "@/components/ImageMap"
import frameworkImageMap from "@/views/framework/FrameworkImageMap"

export default {
  name: "DisciplineBusinessStrategy",
  components: { ImageMap },
  methods: {
    imageMap() { return frameworkImageMap }
  }
}


</script>

<style scoped>

.imageMap {
  height: 300px;
  width: 800px;
}

</style>