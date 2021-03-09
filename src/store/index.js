import { createStore } from 'vuex';

export default createStore({
  state: {
    initialized: true,
    user: 1,
    allBlogposts: [],
    allUsers: [],
    currentBlogpost: {},
    currentUser: {},
    isLoggedIn: false,
    // bannerImage: '@/assets/banner1.jpg',
  },

  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
    initialized: (state) => state.initialized,
    user: (state) => state.user,
    allBlogposts: (state) => state.allBlogposts,
    // bannerImage: state => state.bannerImage
  },

  mutations: {
    initialized: (state, data) => {
      state.initialized = data;
    },
    user: (state, data) => {
      state.user = data;
    },
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },

    // bannerImage: (state, data) => {
    //   state.bannerImage = data;
    // },
  },
  actions: {
    //  async init({ state, commit }) {
    //   if (state.initialized) {
    //     console.log('👍init called but already initialized')
    //     return;
    //   }
    login(context) {
      context.commit('setAuth', { isAuth: true });
      console.log('login');
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
      console.log('logout');
    },
  },
  modules: {},
});
