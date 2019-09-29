<template>
  <div class="traffic-light-container">
    <h2>Light {{index + 1}}</h2>
    <p>Countdown: {{counterString}}</p>
    <TrafficLight :index="index"></TrafficLight>
    <MaterialButton :click="onSetGreenBtnClick">Set green light</MaterialButton>
  </div>
</template>

<style lang="scss" scoped>
.traffic-light-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import TrafficLight from "@/components/TrafficLight.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import { mapGetters } from "vuex";

@Component({
  components: {
    TrafficLight,
    MaterialButton
  },
  computed: {
    ...mapGetters({
      trafficLightCounter: "trafficLightCounter"
    })
  }
})
export default class TrafficLightManual extends Vue {
  @Prop() private index!: number;
  private trafficLightCounter!: number[];

  private get counterString(): string {
    if (this.trafficLightCounter[this.index] === -1) {
      return "-";
    } else {
      return `${this.trafficLightCounter[this.index]}`;
    }
  }

  private onSetGreenBtnClick() {
    this.axios.post(`traffic-light/set-green/${this.index}`);
  }
}
</script>