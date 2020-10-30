 export const UserModule = {
     //allowd use to refereance the module first ex. store.state.User.user
     namespaced: true,
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
      } 
 }