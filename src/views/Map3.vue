<template>
  <div id="overviewMapContainer">
    <div id="overviewMap" ref="mapDiv"></div>
  </div>
</template>

<script>
  /* eslint-disable no-undef */
  import { ref, onMounted } from 'vue';
  import { useStore } from 'vuex';

  import { Loader } from '@googlemaps/js-api-loader';

  export default {
    name: 'Map',
    data() {
      return {};
    },
    mounted() {
      const GOOGLE_MAPS_API_KEY = process.env.VUE_APP_GOOGLE_MAPS_API_KEY;

      const currPos = { lat: 53.5510846, lng: 9.9936818 };

      const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
      // const mapDiv = ref(null);
      const mapDiv = ref(null);
      const options = {
        zoom: 6,
        center: currPos,
        mapTypeId: 'hybrid',
        disableDefaultUI: true,
      };

      async () => {
        await loader.load();
        const map = new google.maps.Map(mapDiv.value, options);
        const marker = new google.maps.Marker({
          position: currPos,
          map: map,
        });
      };

      // return { mapDiv };
    },

    // setup() {
    //   const GOOGLE_MAPS_API_KEY = process.env.VUE_APP_GOOGLE_MAPS_API_KEY;

    //   const currPos = { lat: 53.5510846, lng: 9.9936818 };

    //   const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
    //   const mapDiv = ref(null);
    //   const options = {
    //     zoom: 6,
    //     center: currPos,
    //     mapTypeId: 'hybrid',
    //     disableDefaultUI: true,
    //   };

    //   onMounted(async () => {
    //     await loader.load();
    //     const map = new google.maps.Map(mapDiv.value, options);
    //     const marker = new google.maps.Marker({
    //       position: currPos,
    //       map: map,
    //     });
    //   });

    //   return { mapDiv };
    // },
  };
</script>

<!-- ======================================================= -->

<style>
  #overviewMap {
    height: 700px;
    width: 100%;
  }

  #overviewMapContainer {
    display: flex;
    justify-content: center;
  }

  .infoWindow:hover {
    cursor: pointer;
  }

  .infoWindow:hover * {
    opacity: 0.85;
  }

  .infoWindow * {
    transition: all 500ms ease;
  }

  .infoWindow {
    /* height: 220px; */
    padding: 0 10px;
  }

  .miniButton {
    font-size: 0.6rem;
    height: 2rem;
    /* padding: 10px; */

    color: #555;
  }

  .infoWindowImage {
    width: 100%;
    height: 110px;
    margin: 15px auto 0;
    border-radius: 5px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.5);
  }
</style>
