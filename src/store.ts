import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export enum TrafficLightColor {
  RED = 'RED',
  GREEN = 'GREEN',
  YELLOW = 'YELLOW',
}

export default new Vuex.Store({
  state: {
    trafficLights: [] as TrafficLightColor[],
    irSensorsState: [] as boolean[],
    trafficLightCounter: [] as number[],
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
  },
});
