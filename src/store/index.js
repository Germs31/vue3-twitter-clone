import { createStore } from 'vuex'
import { UserModule } from './User'

export default createStore({
  state: {},
  // mutations change state
  mutations: {},
  // functions called thru app that call mutations
  actions: {},
  modules: {
    User: UserModule
  }
})
