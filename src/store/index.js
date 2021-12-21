// import Vue from 'vue';
// import Vuex from 'vuex';

import axios from 'axios';

import { createStore } from 'vuex';
const url = process.env.VUE_APP_BACKENDURL;

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      console.log('SET_USER_DATA', userData);
      state.user = userData;

      // const localUser = (({ name, token, profilePic }) => ({
      //   name,
      //   token,
      //   profilePic,
      // }))(userData);

      // const localUser = {
      //   name: userData.name,
      //   token: userData.token,
      //   profilePic: userData.profilePic,
      // };

      localStorage.setItem('user', JSON.stringify(userData));
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${userData.token}`;
    },
    LOGOUT(state) {
      localStorage.removeItem('user');
      location.reload();
    },
  },
  actions: {
    register({ commit }, credentials) {
      console.log(url, credentials);
      return axios.put(url + 'auth/signup', credentials).then(({ data }) => {
        console.log('user data is', data);
        commit('SET_USER_DATA', data);
      });
    },
    login({ commit }, credentials) {
      const url = process.env.VUE_APP_BACKENDURL;
      console.log('commit login', url);
      return axios.post(url + 'auth/login', credentials).then(({ data }) => {
        console.log(data);
        commit('SET_USER_DATA', data);
      });
    },
    logout({ commit }) {
      commit('LOGOUT');
    },
  },
  getters: {
    userIsLoggedIn(state) {
      return !!state.user;
    },
    getCurrentUser: (state) => state.user,
  },
});
