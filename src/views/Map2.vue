<template>
  <!-- Lat: {{ currPos.lat.toFixed(2) }}, Long: {{ currPos.lng.toFixed(2) }} -->
  <div id="overviewMapContainer">
    <div id="overviewMap" ref="mapDiv"></div>
  </div>
  <!-- POSTS: {{ allBlogposts }} -->
</template>

<script>
  /* eslint-disable no-undef */
  import { computed, ref, onMounted } from 'vue';
  import { Loader } from '@googlemaps/js-api-loader';
  const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

  export default {
    name: 'App',
    computed: {
      allBlogposts() {
        return this.$store.getters.getAllBlogposts;
      },
    },
    setup() {
      const currPos = computed(() => ({
        lat: 47.3768866,
        lng: 8.541694,
      }));

      const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
      const mapDiv = ref(null);
      const options = {
        zoom: 6,
        center: currPos.value,
        mapTypeId: 'hybrid',
        disableDefaultUI: true,
      };
      onMounted(async () => {
        await loader.load();
        const map = new google.maps.Map(mapDiv.value, options);
        const marker = new google.maps.Marker({
          position: currPos.value,
          map: map,
        });
        console.log(marker);
      });

      return { mapDiv };
    },
  };
</script>

<!-- ======================================================= -->

<style></style>
