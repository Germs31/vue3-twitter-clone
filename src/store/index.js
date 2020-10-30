import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null
  },
  // mutations change state
  mutations: {
    SET_USER(state, user){
      state.user = user;
    }
  },
  // functions called thru app that call mutations
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user)
    }
  },

  modules: {

  }
})
