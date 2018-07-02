import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    usuario: {
      nombre: '',
      token: ''
    }
  },
  mutations: {
    login: (state, payload) => {
      state.usuario.token = payload.token
      state.usuario.nombre = payload.username
    },
    logout: state => {
      state.usuario.token = ''
      state.usuario.nombre = ''
    }
  }
})
