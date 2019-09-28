<template>
  <div class="container">
    <TrafficLightControl :index="0"></TrafficLightControl>
    <TrafficLightControl :index="1"></TrafficLightControl>
    <TrafficLightControl :index="2"></TrafficLightControl>
    <TrafficLightControl :index="3"></TrafficLightControl>
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
import HelloWorld from "@/components/HelloWorld.vue";
import TrafficLightControl from "@/components/TrafficLightControl.vue";

@Component({
  components: {
    TrafficLightControl
  }
})
export default class Home extends Vue {}
</script>
