import { createStore } from 'vuex';

export default createStore({
  state: {
    initialized: true,
    user: 1,
    allBlogposts: [],
    allUsers: [],
    currentUser: {},
    isLoggedIn: true,
  },

  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
    initialized: (state) => state.initialized,
    user: (state) => state.user,
    getAllBlogposts: (state) => state.allBlogposts,
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
    setAllBlogposts: (state, data) => {
      console.log('😎all blogbosts mutated');
      state.allBlogposts = data;
    },
  },
  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true });
      console.log('login');
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
      console.log('logout');
    },
    setAllBlogposts(context, data) {
      console.log('action: store all blogposts in store');
      context.commit('setAllBlogposts', data);
    },
  },
  modules: {},
});
