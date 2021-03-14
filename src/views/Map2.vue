<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="blogposts.length">
    <div class="home">
      <!-- <GoogleMap :markers="blogposts" :center="center" /> -->
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
    <Spinner />
  </div>
</template>

<script>
  // import GoogleMap from '@/components/GoogleMap.vue';
  import getPosts from '@/composables/getPosts.js';

  export default {
    name: 'Home',
    components: {
      // GoogleMap,
    },
    setup() {
      const { blogposts, error, load } = getPosts();
      load();
      return { blogposts, error };
    },
    data() {
      return {
        center: { lat: 53.551086, lng: 9.993682 },
        markers: [
          {
            id: 'hello',
            coords: {
              lat: 51.093048,
              lng: 6.84212,
            },
          },
          {
            id: 'hamburg',
            coords: {
              lat: 53.551086,
              lng: 9.993682,
            },
          },
        ],
      };
    },
  };
</script>
