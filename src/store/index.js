import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    variable1: true,
    user: {},
  },
  mutations: {
    CAMBIOVALOR(state) {
      state.variable1 = !state.variable1;
    },
    SET_USER(state, newuser) {
      state.user = newuser;
    },
  },
  actions: {
    cambioValor({ commit }) {
      commit("CAMBIOVALOR");
    },

    llamarApi({ commit }) {
      axios.get("https://randomuser.me/api/").then((data) => {
        console.log(data.data);
        let user = data.data.results[0];

        let payload = {
          fullName: `${user.name.title} ${user.name.first} ${user.name.last} `,
          foto_url: user.picture.medium
        };
        commit("SET_USER", payload);
      });
    },
  },
  modules: {},
});
