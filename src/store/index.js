import { createStore } from 'vuex'

export default createStore({
  state: {
    initialized: true,
    user: 1,
    bannerImage: '@/assets/banner1.jpg',
  },

  getters: {
    initialized: state => state.initialized,
    user: state => state.user,
    bannerImage: state => state.bannerImage
  },

  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
