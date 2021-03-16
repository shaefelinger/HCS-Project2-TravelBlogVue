import { createStore } from 'vuex';

import authModule from './auth/index.js'

export default createStore({
  modules: {
    auth: authModule,
  }
  state: {
    user: 1,
    currentUser: {},
    isLoggedIn: false,
  },

  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
    user: (state) => state.user,
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
  },
  modules: {},
});
