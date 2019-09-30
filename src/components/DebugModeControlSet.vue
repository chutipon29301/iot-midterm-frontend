<template>
  <div class="row-container">
    <div class="container">
      <Sensor :index="0" :allowManualOverride="true" />
      <Sensor :index="1" :allowManualOverride="true" />
    </div>
    <div class="container">
      <TrafficLightControl :index="0" />
      <TrafficLightControl :index="1" />
      <TrafficLightControl :index="2" />
      <TrafficLightControl :index="3" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.row-container {
  display: flex;
  flex-direction: column;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  min-height: 100px;
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TrafficLightControl from "@/components/TrafficLightControl.vue";
import Sensor from "@/components/Sensor.vue";

@Component({
  components: {
    TrafficLightControl,
    Sensor
  }
})
export default class DebugModeControlSet extends Vue {}
</script>