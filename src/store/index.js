import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    variable1: "Hola Soy Seba",
  },
  mutations: {
    CAMBIOVALOR(state) {
      state.variable1 = "HOla soy seba 2";
    },
  },
  actions: {
    cambioValor({ commit }) {
      commit("CAMBIOVALOR");
    },
  },
  modules: {},
});
