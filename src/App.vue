<template>
  <div class="flex flex-col justify-between h-screen">
    <Header class="flex-shrink-0" />
    <router-view />

    <Footer class="flex-shrink-0" />
  </div>
</template>

<script>
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
  };
</script>



<!-- ============================================================== -->
<style>
 

 

  /* .hidden {
    display: none !important;
  } */



  /* ========================================================================== */
  /* MAIN-PAGE LAYOUT */
  /* ========================================================================== */

  /* .container {
    display: grid;
    grid-template-areas:
      'hd '
      'main'
      'ft ';
  } */

/* 
  .main {
    grid-area: main;
    min-height: 800px;
    margin-top: 7rem;
    background-color: #fff;
  } */


</style>
