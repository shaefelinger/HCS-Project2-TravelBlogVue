<template>
  <Banner :bannerImage="bannerImage" :bannerText="bannerText" :bannerButtonText="bannerButtonText" :bannerButtonLink="bannerButtonLink" />
  New Post
  {{ status }}
  <!-- <p>Name: {{ user.name }}</p> -->
</template>

<script>
  import Banner from '@/components/Banner.vue';
  import bannerImage from '@/assets/banner2.jpg';

  import axios from 'axios';
  import router from '../router';

  export default {
    name: 'NewPost',
    components: {
      Banner,
    },
    data() {
      return {
        // bannerImage: '@/assets/banner2.jpg',
        bannerImage,
        bannerText: 'Add new Post...',
        bannerButtonText: 'Back',
        bannerButtonLink: 'Home',

        status: 'unklar',
        user: {
          name: 'no user',
        },
      };
    },

    methods: {
      getUserData: function() {
        let self = this;
        // const tempURL = 'http://localhost:3000';
        const tempURL = 'https://aroundtheworld-blog-server.herokuapp.com/';
        ç;
        // const tempURL = '';

        axios
          .get('auth/user')
          .then((response) => {
            console.log(this.user);
            console.log(response.data.user);
            this.user = response.data.user;
            console.log('success 😎');
            this.status = 'drin';
            // self.$set(this, 'user', response.data.user);
          })
          .catch((errors) => {
            console.log(errors);
            this.status = 'nööö';
            // router.push('/');
          });
      },
    },
    mounted() {
      this.getUserData();
    },
  };
</script>

<style></style>
