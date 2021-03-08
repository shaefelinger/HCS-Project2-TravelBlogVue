<template>
      <Banner :bannerImage="bannerImage" :bannerText="bannerText" :bannerButtonText="bannerButtonText" :bannerButtonLink="bannerButtonLink" />
  Login
</template>

<script>
  // import bannerImage from '@/assets/banner2.jpg'
  import Banner from '@/components/Banner.vue';


  export default {
    name: 'Login',
    components: {
      Banner,
    },
    data() {
      return {
        // bannerImage,
        bannerImage:
          'https://images.unsplash.com/photo-1473615695634-d284ec918736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80',
        bannerText: 'Login',
        bannerButtonText: 'About',
        bannerButtonLink: 'About',
      };
    },
  };
</script>

<style></style>
