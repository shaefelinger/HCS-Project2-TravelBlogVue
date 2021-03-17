import { createStore } from 'vuex';


export default createStore({
  modules: {
    // auth: authModule,
  },
  state: {
    user: 1,
    currentUser: {},
    isLoggedIn: true,
  },

  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
    user: (state) => state.user,
  },

  mutations: {
      // user: (state, data) => {
        //   state.user = data;
        // },
        setAuth(state, payload) {
          state.isLoggedIn = payload.isAuth;
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
