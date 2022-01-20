<template>
  <div class="flex flex-col justify-between h-screen">
    <Header class="flex-shrink-0" />
    <router-view />
    <Footer class="flex-shrink-0" />
  </div>
</template>

<script>
import axios from 'axios';

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  created() {
    console.log('app created');

    // check if user is logged in
    const userString = localStorage.getItem('user');
    if (userString) {
      const userData = JSON.parse(userString);
      this.$store.commit('SET_USER_DATA', userData);
    }
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          this.$store.dispatch('logout');
        }
        return Promise.reject(error);
      }
    );
  },
};
</script>
