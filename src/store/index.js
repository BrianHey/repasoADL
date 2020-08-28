import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    variable1: true,
    user: {},
    horoscopos: [],
  },
  mutations: {
    CAMBIOVALOR(state) {
      state.variable1 = !state.variable1
    },
    SET_USER(state, newuser) {
      state.user = newuser
    },
    SET_HOROSCOPOS(state, horoscopos) {
      state.horoscopos = horoscopos
    },
  },
  actions: {
    cambioValor({ commit }) {
      commit('CAMBIOVALOR')
    },

    llamarApi({ commit }) {
      axios.get('https://randomuser.me/api/').then((data) => {
        console.log(data.data)
        let user = data.data.results[0]

        let payload = {
          fullName: `${user.name.title} ${user.name.first} ${user.name.last} `,
          foto_url: user.picture.large,
        }
        commit('SET_USER', payload)
      })
    },

    llamarHoroscopos({ commit }) {
      axios.get('https://api.xor.cl/tyaas/').then((data) => {
        console.log(data.data)
        let res = data.data.horoscopo
        let miDataHoroscopo = Object.values(res)
        commit('SET_HOROSCOPOS', miDataHoroscopo)
      })
    },
  },
  modules: {},
})
