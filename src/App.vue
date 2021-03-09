<template>
  <!-- <div class="container">
    <div class="p-6" id="nav">
      <router-link class="font-bold text-gray-700" to="/">Home</router-link> |
      <router-link class="font-bold text-gray-700" to="/about">About</router-link>
    </div>
    <router-view />
  </div> -->

  <div class="flex flex-col justify-between h-screen">
    <Header class="flex-shrink-0" />
    <router-view class="mb-80" />
    <Footer class="flex-shrink-0" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';

  export default {
    name: 'app',
    components: {
      Header,
      Footer,
    },

    computed: {
      // initialized() {
      //   return this.$store.getters.initialized;
      // },

      user() {
        return this.$store.getters.user;
      },
    },
  };
</script>

<style>
  /* old default  */
  #nav a.router-link-exact-active {
    /* color: #42b983; */
    color: #111;
    transform: scale(1.1) translateY(-1px);
  }
  /* =====  */
  html {
    position: relative;
    min-height: 100%;
  }
  /* ========================================================================== */
  /* BASIC STYLING */
  /* ========================================================================== */

  /* h1,
  h2,
  h3,
  p {
    color: #1f2937;
  }

  h4 {
    color: #666;
    font-size: 1.4rem;
  } */

  .hidden {
    display: none !important;
  }

  /* Buttons 
/* ========================================================================== */

  button {
    padding: 0.6rem 2rem;
    margin: 0.4rem 0;
    width: 100%;
    height: 50px;
    font-size: 0.8rem;
    letter-spacing: 0.3em;
    font-weight: 700;
    text-transform: uppercase;
    transition: all 100ms ease;
  }

  button:hover {
    cursor: pointer;
  }

  .primaryButton {
    color: white;
    background-color: hsl(150, 63%, 23%);
    border: 2px solid hsl(150, 63%, 23%);
  }

  .primaryButton:hover {
    background-color: hsl(150, 63%, 15%);
  }

  .secondaryButton {
    background-color: #white;
    border: 2px solid hsl(150, 63%, 23%);
    color: #155e39;
  }

  .secondaryButton:hover {
    background-color: hsla(0, 0%, 93%, 0.5);
  }

  .resetButton {
    color: #777;
  }

  .resetButton:hover {
    color: #777;
    background-color: hsla(0, 0%, 93%, 0.5);
  }

  .bannerPanel button {
    width: 160px;
    height: 40px;
    color: white;
    background-color: rgba(0, 0, 0, 0.4);
    border: solid 2px white;
    text-shadow: 0 0 20px black;
    letter-spacing: 0.3em;
    font-weight: 700;
    transition: all 800ms ease;
  }

  .bannerPanel button:hover {
    color: #111;
    background-color: #fefefe;
  }

  /* ========================================================================== */
  /* MAIN-PAGE LAYOUT */
  /* ========================================================================== */

  .container {
    display: grid;
    grid-template-areas:
      'hd '
      'main'
      'ft ';
  }

  /* .header {
    grid-area: hd;
  } */

  .main {
    grid-area: main;
    min-height: 800px;
    margin-top: 7rem;
    background-color: #fff;
  }

  /* .footer {
    grid-area: ft; 
     min-height: 200px;
  } */
</style>
