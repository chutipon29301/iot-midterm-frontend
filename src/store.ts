import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export enum TrafficLightColor {
  RED = 'RED',
  GREEN = 'GREEN',
  YELLOW = 'YELLOW',
}

export enum TrafficLightSystemMode {
  AUTO = 'AUTO',
  MANUAL = 'MANUAL',
  SENSOR = 'SENSOR',
}

export default new Vuex.Store({
  state: {
    trafficLights: [] as TrafficLightColor[],
    irSensorsState: [] as boolean[],
    trafficLightCounter: [] as number[],
    mode: TrafficLightSystemMode.MANUAL,
  },
  getters: {
    trafficLights: (state) => state.trafficLights,
    irSensorState: (state) => state.irSensorsState,
    trafficLightCounter: (state) => state.trafficLightCounter,
  },
  mutations: {
    updateTrafficLight(state, payload: TrafficLightColor[]) {
      state.trafficLights = payload;
    },
    updateIRSensorState(state, payload: boolean[]) {
      state.irSensorsState = payload;
    },
    updateTrafficLightCounter(state, payload: number[]) {
      state.trafficLightCounter = payload;
    },
    updateTrafficLightSystemMode(state, payload: TrafficLightSystemMode) {
      state.mode = payload;
    },
  },
  actions: {
    SOCKET_onTrafficLightChange({ commit }, message: TrafficLightColor[]) {
      commit('updateTrafficLight', message);
    },
    SOCKET_onIRSensorChange({ commit }, message: boolean[]) {
      commit('updateIRSensorState', message);
    },
    SOCKET_onCounterChange({ commit }, message: number[]) {
      commit('updateTrafficLightCounter', message);
    },
    SOCKET_onModeChange({ commit }, message: TrafficLightSystemMode) {
      commit('updateTrafficLightSystemMode', message);
    },
  },
});
