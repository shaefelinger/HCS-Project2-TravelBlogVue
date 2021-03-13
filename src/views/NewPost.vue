<template>
  <Banner :bannerImage="bannerImage" :bannerText="bannerText" :bannerButtonText="bannerButtonText" :bannerButtonLink="bannerButtonLink" />
  New Post
  {{ status }}
  <p>Name: {{ user.name }}</p>
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

        axios
          .get('auth/user')
          .then((response) => {
            this.user = response.data.user;
            this.status = 'drin';
            // self.$set(this, 'user', response.data.user);
          })
          .catch((errors) => {
            console.log(errors);
            this.status = 'nööö';
            router.push('/');
          });
      },
    },
    mounted() {
      this.getUserData();
    },
  };
</script>

<style></style>
