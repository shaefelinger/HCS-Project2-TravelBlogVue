<template>
  <div class="home">
    <Banner  />
    <!-- <Banner /> -->
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

    computed: {
      bannerImage() {
        return this.$store.getters.bannerImage;
      },
    },
    methods: {
      BannerImage(imageURL) {
        this.$store.commit('setBannerImage', imageURL);
      },
    },
  };
</script>
