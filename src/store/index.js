import { createStore } from 'vuex';


export default createStore({
  modules: {
  },
  state: {
    // user: 1,
    currentUser: {
      name: 'Logged Out'
    },
    isLoggedIn: false,
  },

  getters: {
    userIsLoggedIn: (state) => state.isLoggedIn,
    getCurrentUser: (state) => state.currentUser,
  },

  mutations: {
    setCurrentUser: (state, data) => {
      state.currentUser = data;
      },
    setLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
  },
  actions: {
   // login(context) {
        //   context.commit('setAuth', { isAuth: true });
        //   console.log('login');
        // },
        // logout(context) {
        //   context.commit('setAuth', { isAuth: false });
        //   console.log('logout');
        // },
  },
});
