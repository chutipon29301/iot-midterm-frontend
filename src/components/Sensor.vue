<template>
  <div class="sensor-container">
    <div class="led-box">
      <div :class="className"></div>
    </div>
    <h2 class="sensor-name">Sensor {{index + 1}}</h2>
    <MaterialButton v-if="allowManualOverride" :click="toggle">Toggle</MaterialButton>
  </div>
</template>

<style lang="scss" scoped>
.sensor-container {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}
.led-box {
  height: 30px;
  width: 25%;
  float: left;
}
.led-green {
  margin: 0 auto;
  width: 24px;
  height: 24px;
  background-color: #abff00;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px,
    #89ff00 0 2px 12px;
  &-off {
    margin: 0 auto;
    width: 24px;
    height: 24px;
    background-color: #568100;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px,
      #4f9203 0 2px 12px;
  }
}
.sensor-name {
  margin: 0 2em;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import MaterialButton from "@/components/MaterialButton.vue";
import { mapGetters } from "vuex";

@Component({
  components: {
    MaterialButton
  },
  computed: {
    ...mapGetters({
      irSensorsState: "irSensorsState"
    })
  }
})
export default class Sensor extends Vue {
  @Prop() private index!: number;
  @Prop({ required: false, default: false })
  private allowManualOverride!: boolean;
  private irSensorsState!: boolean[];

  public get className(): string {
    return this.irSensorsState[this.index] ? "led-green" : "led-green-off";
  }

  public toggle() {
    this.axios.post(`traffic-light/change-ir-state/${this.index}`, {
      state: !this.irSensorsState[this.index]
    });
  }
}
</script>