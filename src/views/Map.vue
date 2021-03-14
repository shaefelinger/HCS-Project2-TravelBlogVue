<template>
  <!-- POSTS: {{ allBlogposts }} -->
  <div id="overviewMapContainer">
    <div id="overviewMap" ref="mapDiv"></div>
  </div>
</template>

<script>
  /* eslint-disable no-undef */
  import { ref, onMounted, computed } from 'vue';
  import { useStore } from 'vuex';

  import { Loader } from '@googlemaps/js-api-loader';

  export default {
    name: 'App',
    components: {
      // OverviewCard,
    },
    // computed: {
    //   allBlogposts() {
    //     return this.$store.getters.getAllBlogposts;
    //   },
    // },

    setup() {
      const GOOGLE_MAPS_API_KEY = process.env.VUE_APP_GOOGLE_MAPS_API_KEY;

      const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
      const mapDiv = ref(null);

      const store = useStore();
      const markers = store.getters.getAllBlogposts;

      onMounted(async () => {
        await loader.load();
        const options = {
          maxZoom: 10,
          minZoom: 2,
          mapTypeControl: false,
          streetViewControl: false,
        };
        const overviewMap = new google.maps.Map(mapDiv.value, options);
        let bounds = new google.maps.LatLngBounds();

        function addMarker(location, i) {
          const marker = new google.maps.Marker({
            position: location.coords,
            map: overviewMap,
          });

          const infoWindow = new google.maps.InfoWindow({
            content: `
      <div class="infoWindow" onclick="gotoDetailsPage(${i})" style="width: 200px;">
        <h3>${location.name}</h3>
        <p>${location.title}</p>
        <div class="infoWindowImage" style="background-image: url(${location.image1URL});"></div>
        <a href="/details/${location._id}"> <button class="miniButton">read more</button></a>
      </div>
      `,
          });
          marker.addListener('click', function() {
            infoWindow.open(overviewMap, marker);
          });

          bounds.extend(location.coords);
        }

        markers.forEach(addMarker);
        overviewMap.fitBounds(bounds);
      });

      return { mapDiv };
    },
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
