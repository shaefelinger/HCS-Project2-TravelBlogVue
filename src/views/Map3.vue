<template>
  aha
  <div id="map" class="w-96 h-96 "></div>
</template>

<script>
  /* eslint-disable no-undef */
  import { Loader } from '@googlemaps/js-api-loader';
  export default {
    mounted() {
      console.log('mounted');
      const loader = new Loader({
        apiKey: process.env.GOOGLE_MAPS_API_KEY,
        version: 'weekly',
        libraries: ['places'],
      });

      const mapOptions = {
        center: {
          lat: 0,
          lng: 0,
        },
        zoom: 4,
      };

      const currPos = {
        lat: 47.3768866,
        lng: 8.541694,
      };

      loader
        .load()
        .then(() => {
          new google.maps.Map(document.getElementById('map'), mapOptions);
        })
        // .then(() => {
        //   const marker = new google.maps.Marker({
        //     position: currPos,
        //     map: map,
        //   });
        // })
        .catch((e) => {
          console.log(e);
        });
    },
  };
</script>

<style></style>
