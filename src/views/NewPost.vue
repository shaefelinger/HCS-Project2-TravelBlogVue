<template>
    <Banner bannerImage="banner2.jpg"/>
  New Post
</template>



<script>
  import Banner from '@/components/Banner.vue';

  export default {
    name: 'NewPost',
    components: {
      Banner,
    },
     data() {
      return {
        bannerImage: '',
      };
    },
  };
</script>

<style>

</style>