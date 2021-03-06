import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    variable1: true,
    user: {},
    cursos: [],
  },
  mutations: {
    CAMBIOVALOR(state) {
      state.variable1 = !state.variable1
    },
    SET_USER(state, newuser) {
      state.user = newuser
    },
    SET_CURSOS(state, cursos) {
      state.cursos = cursos
    },
  },
  actions: {
    cambioValor({ commit }) {
      commit('CAMBIOVALOR')
    },

    // llamarApi({ commit }) {
    //   axios.get('https://randomuser.me/api/').then((data) => {
    //     console.log(data.data)
    //     let user = data.data.results[0]

    //     let payload = {
    //       fullName: `${user.name.title} ${user.name.first} ${user.name.last} `,
    //       foto_url: user.picture.large,
    //     }
    //     commit('SET_USER', payload)
    //   })
    // },

    llamarHoroscopos({ commit }) {
      axios.get('https://api.xor.cl/tyaas/').then((data) => {
        console.log(data.data)
        let res = data.data.horoscopo
        let miDataHoroscopo = Object.values(res)
        commit('SET_HOROSCOPOS', miDataHoroscopo)
      })
    },

    llamarCursos({ commit }) {
      let cursos = []
      axios
        .get('https://cors-anywhere.herokuapp.com/https://pruebafrontend.desafiolatam.com/api/v1/courses')
        .then((data) => {
          data.data.data.forEach((e) => {
            cursos.push({ nombre: e.attributes.name, slug: e.attributes.slug, cover: e.attributes.cover })
          })
        })
        .then((data) => {
          axios
            .get('https://cors-anywhere.herokuapp.com/https://pruebafrontend.desafiolatam.com/api/v1/users/me')
            .then((data) => {
              let detalleCursos = data.data.included
              console.log(detalleCursos)
              console.log(cursos)

              cursos.forEach((c, i) => {
                detalleCursos.forEach((d) => {
                  d.attributes.slug == c.slug ? (cursos[i].unidades = d.attributes.learning) : false
                })
              })
              commit('SET_CURSOS', cursos)
            })
        })
      // console.log(cursos);
    },
  },
  modules: {},
})
