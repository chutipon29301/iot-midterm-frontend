<template>
  <div class="traffic-light-row">
    <div class="traffic-light-column">
      <h1>Light 1</h1>
      <TrafficLight :index="0"></TrafficLight>
    </div>
    <div class="traffic-light-column">
      <h1>Light 2</h1>
      <TrafficLight :index="1"></TrafficLight>
    </div>
    <div class="traffic-light-column">
      <h1>Light 3</h1>
      <TrafficLight :index="2"></TrafficLight>
    </div>
    <div class="traffic-light-column">
      <h1>Light 4</h1>
      <TrafficLight :index="3"></TrafficLight>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.traffic-light-column {
  display: flex;
  flex-direction: column;
}
.traffic-light-row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  min-height: 100px;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
import TrafficLight from "@/components/TrafficLight.vue";

@Component({
  components: {
    TrafficLight
  }
})
export default class Home extends Vue {}
</script>
