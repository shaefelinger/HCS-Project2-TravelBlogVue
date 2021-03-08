<template>
  <div class="home">
    <Banner :bannerImage="bannerImage" :bannerButtonText="bannerButtonText" :bannerButtonLink="bannerButtonLink" />
    
  </div>
</template>

<script>
  // @ is an alias to /src
  import Banner from '@/components/Banner.vue';

  export default {
    name: 'Home',
    components: {
      Banner,
    },

    data() {
      return {
        bannerImage: 'https://picsum.photos/id/116/1000/535',
        bannerButtonText: 'About',
        bannerButtonLink: 'About'
      };
    },



    // computed: {
    //   bannerImage() {
    //     return this.$store.getters.bannerImage;
    //   },
    // },
    // methods: {
    //   BannerImage(imageURL) {
    //     this.$store.commit('setBannerImage', imageURL);
    //   },
    // },
  };
</script>
