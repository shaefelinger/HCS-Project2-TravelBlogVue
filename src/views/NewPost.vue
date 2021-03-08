<template>
      <Banner :bannerImage="bannerImage" :bannerText="bannerText" :bannerButtonText="bannerButtonText" :bannerButtonLink="bannerButtonLink" />
  New Post
</template>



<script>
  import Banner from '@/components/Banner.vue';
  import bannerImage from '@/assets/banner2.jpg'

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
        bannerButtonLink: 'Home'
      };
    },
  };
</script>

<style>

</style>