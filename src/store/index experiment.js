import { createStore } from 'vuex';

export default createStore({
  modules: {},
  state: {
    // user: 1,
    currentUser: {
      name: 'Logged Out',
    },
    user: null, // temp aus vue mastery
    isLoggedIn: true,
  },

  getters: {
    userIsLoggedIn: (state) => state.isLoggedIn,
    getCurrentUser: (state) => state.currentUser,
  },

  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem('user', JSON.stringify(userData));
    },
    setCurrentUser: (state, data) => {
      state.currentUser = data;
    },
    setLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
  },
  actions: {
    register({ commit }, credentials) {
      return axios
        .post('//localhost:3000/auth/login', credentials)
        .then(({ data }) => {
          console.log('user data is', data);
          commit('SET_USER_DATA', data);
        });
    },
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
