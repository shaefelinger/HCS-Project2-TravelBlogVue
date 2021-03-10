<template>
  <div
    class="bannerPanel bg-cover bg-center mt-8 mb-12 mx-0 sm:mx-8 flex flex-col justify-evenly items-center flex-shrink-0"
    id="bannerImage"
    :style="{ backgroundImage: `url(${bannerImage})` }"
  >
    <p class="bannerText text-3xl sm:text-5xl lg:text-6xl font-extralight text-white z-40 " id="bannerTitle">{{ bannerText }}</p>
    <button class="" onclick="gotoAboutPage()" id="bannerButton">{{ bannerButtonText }}</button>
  </div>
  <!-- {{ bannerImage }}
  {{ bannerText }}
  {{ bannerButtonText }}
  {{ bannerButtonLink }} -->
  <!-- <img src="@/assets/banner1.jpg"> -->
  <!-- <img :src="ImageURL" /> -->
</template>
<!-- v-bind:style="{ backgroundImage: url('bannerImage') }" -->

<!-- v-bind:style="{ backgroundImage: url('@/assets/' + bannerImage) }" -->

<script>
  export default {
    props: ['bannerImage', 'bannerText', 'bannerButtonText', 'bannerButtonLink'],
    data() {
      return {
        // ImageURL:
        //   'https://images.unsplash.com/photo-1473615695634-d284ec918736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80',
        // ImageURL: '@/assets/banner1.jpg',
      };
      // computed: {
      //   bannerImage() {
      //     return this.$store.getters.bannerImage;
      //   },
      // },
    },
  };
</script>

<style>
  .bannerPanel {
    height: 200px;
    /* background-size: cover; */
    /* background-position: center; */
    /* margin: 2rem 0 3rem; */
    /* display: flex; */
    /* flex-direction: column;
    justify-content: center; */
    /* align-items: center; */
  }

  .bannerText {
    /* font-size: 2rem; */
    /* font-weight: 200; */
    /* color: white; */
    /* z-index: 1001; */
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-shadow: 0 0 10px black;
  }

  /* BANNER RESPONSIVE 
/* ========================================================================== */
  /* sm 640px */
  @media (min-width: 640px) {
    /* .bannerText {
      font-size: 3rem;
    } */

    .bannerPanel {
      height: 335px;
      /* margin: 2rem 2rem 3rem; */
    }
  }

  /* large 1024px */
  @media (min-width: 1024px) {
    /* .bannerPanel {
      height: 335px;
    } */

    /* .bannerText {
      font-size: 4rem;
    } */
  }
</style>
