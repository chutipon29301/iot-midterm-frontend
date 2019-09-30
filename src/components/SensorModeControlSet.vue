<template>
  <div class="row-container">
    <div class="container">
      <Sensor :index="0" />
      <Sensor :index="1" />
    </div>
    <div class="container">
      <TrafficLightSensor :index="0" />
      <TrafficLightSensor :index="1" />
      <TrafficLightSensor :index="2" />
      <TrafficLightSensor :index="3" />
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
import TrafficLightSensor from "@/components/TrafficLightSensor.vue";
import Sensor from "@/components/Sensor.vue";
@Component({
  components: {
    TrafficLightSensor,
    Sensor
  }
})
export default class SensorModeControlSet extends Vue {}
</script>