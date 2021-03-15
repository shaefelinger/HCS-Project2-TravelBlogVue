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
    methods: {
      makeSingleMap: function() {
          // const markers = this.currentBlogpostFromStore;
  //  const markers = this.$store.getters.getCurrentBlogpost;

      // console.log('im siglemap', markers);
      

      // console.log('single-map prop', this.location);
      const markers = [
        {
          name: 'hello',
          coords: {
            lat: 51.093048,
            lng: 120.84212,
          },
        }

      ];
      const currPos = markers.coords;
      // const currPos = markers[0].coords;
      // const currPos = this.location

      const loader = new Loader({
        apiKey: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
        version: 'weekly',
        libraries: ['places'],
      });

      const mapOptions = {
        // center: {
        //   lat: 0,
        //   lng: 0,
        // },
        // zoom: 4,
        zoom: 6,
        center: currPos,
        mapTypeId: 'hybrid',
        disableDefaultUI: true,
      };

      loader.loadCallback((e) => {
        if (e) {
          console.log(e);
        } else {
          const map = new google.maps.Map(document.getElementById('singleMapComponent'), mapOptions);

          const marker = new google.maps.Marker({
            position: currPos,
            map: map,
          });
        }
      });
      }
    },

    
    mounted() {
      this.makeSingleMap()
    },
  };
</script>

<style>
  #singleMapComponent {
    /* width: 100vw; */
    height: 400px;
  }
</style>
