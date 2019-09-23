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
  },
  getters: {
    trafficLights: (state) => state.trafficLights,
  },
  mutations: {
    updateTrafficLight(state, payload: TrafficLightColor[]) {
      state.trafficLights = payload;
    },
  },
  actions: {
    SOCKET_onTrafficLightChange({ commit }, message: TrafficLightColor[]) {
      commit('updateTrafficLight', message);
    },
  },
});
