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
  },
  getters: {
    trafficLights: (state) => state.trafficLights,
    irSensorState: (state) => state.irSensorsState,
  },
  mutations: {
    updateTrafficLight(state, payload: TrafficLightColor[]) {
      state.trafficLights = payload;
    },
    updateIRSensorState(state, payload: boolean[]) {
      state.irSensorsState = payload;
    }
  },
  actions: {
    SOCKET_onTrafficLightChange({ commit }, message: TrafficLightColor[]) {
      commit('updateTrafficLight', message);
    },
    SOCKET_onIRSensorChange({ commit }, message: boolean[]) {
      commit('updateIRSensorState', message);
    },
  },
});
