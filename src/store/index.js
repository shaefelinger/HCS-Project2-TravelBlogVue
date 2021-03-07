import { createStore } from 'vuex'

export default createStore({
  state: {
    initialized: true,
    user: 1
  },

  getters: {
    initialized: state => state.initialized,
    user: state => state.user
  },

  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
