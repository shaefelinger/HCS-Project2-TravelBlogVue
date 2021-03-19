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

