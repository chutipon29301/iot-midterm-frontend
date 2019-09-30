<template>
  <div class="container">
    <TrafficLightManual :index="0" />
    <TrafficLightManual :index="1" />
    <TrafficLightManual :index="2" />
    <TrafficLightManual :index="3" />
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
import TrafficLightManual from "@/components/TrafficLightManual.vue";

@Component({
  components: {
    TrafficLightManual
  }
})
export default class ManualModeControllerSet extends Vue {}
</script>