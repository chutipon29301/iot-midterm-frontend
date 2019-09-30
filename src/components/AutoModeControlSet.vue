<template>
  <div class="container">
    <TrafficLightAuto :index="0" />
    <TrafficLightAuto :index="1" />
    <TrafficLightAuto :index="2" />
    <TrafficLightAuto :index="3" />
  </div>
</template>
<style lang="scss" scoped>
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
import TrafficLightAuto from "@/components/TrafficLightAuto.vue";

@Component({
  components: {
    TrafficLightAuto
  }
})
export default class AutoModeControlSet extends Vue {}
</script>