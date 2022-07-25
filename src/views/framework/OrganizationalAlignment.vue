<template>
  <image-map :image-map='this.imageMap()' src="/images/EA Framework.svg" style="height: 300px; width: 800px;"/>
  <div class="text-container">
    <p>Grouping the practice of architecture into
      <router-link :to="{name: 'FrameworkFiveDisciplines'}">five disciplines</router-link>
      does more than simply group like things together. It also provides a good model for creating an
      Enterprise Architecture office. Using this model, the Chief Architect would have key leaders in the
      organization for of the disciplines.
    </p>
    <p>
      Of course, that doesn't mean that you have to have five leads at the top level. Depending on the
      organization, some of the disciplines might be less active or performed by an external group.
      For example, many organizations have audit departments that are responsible for evaluating whether
      standard policies and procedures are being executed. In this world, the <i>Oversight</i> role
      might be more one of coordination with an audit team, and could be combined in an Operations
      role with the <i>Guidance</i> discipline. </p>
    <image-map alt="An example organization chart" :image-map='this.org1ImageMap()'>
      <svg style="width: 1000px; height: 200px;">
        <rect x="250" y="1" width="220" height="60" fill="none" stroke="black" stroke-width="2"/>
        <text x="280" y="38" style="font-size: 1.5rem;">Chief Architect</text>
        <line x1="360" x2="360" y1="60" y2="70" stroke="black" stroke-width="2"/>
        <line x1="90" x2="610" y1="70" y2="70" stroke="black" stroke-width="2"/>
        <line x1="90" x2="90" y1="70" y2="90" stroke="black" stroke-width="2"/>
        <line x1="263.33" x2="263.33" y1="70" y2="90" stroke="black" stroke-width="2"/>
        <line x1="436.66" x2="436.66" y1="70" y2="90" stroke="black" stroke-width="2"/>
        <line x1="610" x2="610" y1="70" y2="90" stroke="black" stroke-width="2"/>
        <rect x="20" y="90" width="140" height="40" fill="none" stroke="black" stroke-width="2"/>
        <rect x="193.33" y="90" width="140" height="40" fill="none" stroke="black" stroke-width="2"/>
        <rect x="366.66" y="90" width="140" height="40" fill="none" stroke="black" stroke-width="2"/>
        <rect x="540" y="90" width="140" height="40" fill="none" stroke="black" stroke-width="2"/>
        <text x="30" y="115" style="font-size: 0.8rem;">Business Architecture</text>
        <text x="200.33" y="115" style="font-size: 0.8rem;">Portfolio Management</text>
        <text x="374.66" y="115" style="font-size: 0.8rem;">Technical Architecture</text>
        <text x="576" y="115" style="font-size: 0.8rem;">Operations</text>
        <line x1="610" x2="610" y1="130" y2="140" stroke="black" stroke-width="2"/>
        <line x1="570" x2="650" y1="140" y2="140" stroke="black" stroke-width="2"/>
        <line x1="570" x2="570" y1="140" y2="155" stroke="black" stroke-width="2"/>
        <line x1="650" x2="650" y1="140" y2="155" stroke="black" stroke-width="2"/>
        <rect x="538" y="155" width="65" height="30" fill="none" stroke="black" stroke-width="2"/>
        <rect x="620" y="155" width="65" height="30" fill="none" stroke="black" stroke-width="2"/>
        <text x="546" y="174" style="font-size: 0.7rem;">Guidance</text>
        <text x="629" y="174" style="font-size: 0.7rem;">Oversight</text>
      </svg>
    </image-map>
    <p>
      Alternatively, you might have an organization that is largely focusing on the technology
      aspects of architecture and still maturing toward business alignment. That doesn't mean you
      should ignore the need to articulate business capabilities, but you might not put as much
      energy into that. In that case the <i>Business & Strategy</i> discipline might be rolled under
      and combined with the <i>Portfolio Management</i> discpline.</p>
    <image-map alt="Another example organization chart" :image-map='this.org2ImageMap()'>
      <svg style="width: 1000px; height: 200px;">
        <rect x="250" y="1" width="220" height="60" fill="none" stroke="black" stroke-width="2"/>
        <text x="280" y="38" style="font-size: 1.5rem;">Chief Architect</text>
        <line x1="360" x2="360" y1="60" y2="70" stroke="black" stroke-width="2"/>
        <line x1="142" x2="610" y1="70" y2="70" stroke="black" stroke-width="2"/>
        <line x1="142" x2="142" y1="70" y2="90" stroke="black" stroke-width="2"/>
        <line x1="300" x2="300" y1="70" y2="90" stroke="black" stroke-width="2"/>
        <line x1="452" x2="452" y1="70" y2="90" stroke="black" stroke-width="2"/>
        <line x1="610" x2="610" y1="70" y2="90" stroke="black" stroke-width="2"/>
        <rect x="72" y="90" width="140" height="40" fill="none" stroke="black" stroke-width="2"/>
        <rect x="228.33" y="90" width="140" height="40" fill="none" stroke="black" stroke-width="2"/>
        <rect x="384.66" y="90" width="140" height="40" fill="none" stroke="black" stroke-width="2"/>
        <rect x="540" y="90" width="140" height="40" fill="none" stroke="black" stroke-width="2"/>
        <text x="85" y="115" style="font-size: 0.8rem;">Asset Management</text>
        <text x="236.33" y="115" style="font-size: 0.8rem;">Technical Architecture</text>
        <text x="395" y="115" style="font-size: 0.8rem;">Standards & Policies</text>
        <text x="555" y="115" style="font-size: 0.8rem;">Audit & Compliance</text>
        <line x1="142" x2="142" y1="130" y2="140" stroke="black" stroke-width="2"/>
        <line x1="72.5" x2="214.5" y1="140" y2="140" stroke="black" stroke-width="2"/>
        <line x1="72.5" x2="72.5" y1="140" y2="155" stroke="black" stroke-width="2"/>
        <line x1="214.5" x2="214.5" y1="140" y2="155" stroke="black" stroke-width="2"/>
        <rect x="10" y="155" width="125" height="30" fill="none" stroke="black" stroke-width="2"/>
        <rect x="152" y="155" width="125" height="30" fill="none" stroke="black" stroke-width="2"/>
        <text x="19" y="174" style="font-size: 0.7rem;">Business Capabilities</text>
        <text x="160" y="174" style="font-size: 0.7rem;">Portfolio Management</text>
      </svg>
    </image-map>

  </div>
</template>

<script>

import ImageMap from "@/components/ImageMap"
import frameworkImageMap from "@/views/framework/FrameworkImageMap"

export default {
  name: "OrganizationalAlignment",
  components: {ImageMap},
  methods: {
    imageMap() {
      return frameworkImageMap
    },
    org1ImageMap() {
      return {
        height: 200,
        width: 1000,
        hotspots: [
          {coords: {x: 250, y: 1, w: 220, h: 60}, to: {name: 'ChiefArchitectJD'}, name: 'Chief Architect JD'},
        ]
      }
    },
    org2ImageMap() {
      return {
        height: 200,
        width: 1000,
        hotspots: [
          {coords: {x: 250, y: 1, w: 220, h: 60}, to: {name: 'ChiefArchitectJD'}, name: 'Chief Architect JD'},
        ]
      }
    }
  }
}

</script>

<style scoped>

</style>