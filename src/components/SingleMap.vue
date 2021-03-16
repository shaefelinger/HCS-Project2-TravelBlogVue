<template>
  Prop: {{ location }}
  <div id="singleMapComponent" class="mt-8 mb-12 mx-0 sm:mx-8 flex flex-col justify-evenly items-center flex-shrink-0"></div>
</template>

<script>
  /* eslint-disable no-undef */
  import { Loader } from '@googlemaps/js-api-loader';

  export default {
    computed: {
      currentBlogpostFromStore() {
        return this.$store.getters.getCurrentBlogpost;
      },
    },
    props: ['location'],
    mounted() {
      console.log('props versuch single', this.location);
      const markers = { 
        coords: this.location
        } 
        

      // const markers = {
      //   coords: { lat: 53.5510846, lng: 9.9936818 },
      // };

      const currPos = markers.coords;

      const loader = new Loader({
        apiKey: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
        version: 'weekly',
        libraries: ['places'],
      });

      const mapOptions = {
        zoom: 7,
        center: currPos,
        mapTypeId: 'hybrid',
        disableDefaultUI: true,
      };

      loader.loadCallback((err) => {
        if (err) {
          console.log(err);
        } else {
          const map = new google.maps.Map(document.getElementById('singleMapComponent'), mapOptions);
          const marker = new google.maps.Marker({
            position: currPos,
            map: map,
          });
        }
      });
    },
  };
</script>

<style>
  #singleMapComponent {
    /* width: 100vw; */
    height: 400px;
  }
</style>
