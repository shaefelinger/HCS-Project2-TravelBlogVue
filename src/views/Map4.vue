<template>
  <!-- <div>{{ blogposts }}</div> -->
  <!-- <p>{{blogpostsFromStore}}</p> -->
  <div id="overviewMapContainer">
    <div id="overviewMap">
      <div id="map"></div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-undef */
  // import getPosts from '@/composables/getPosts.js';

  import { Loader } from '@googlemaps/js-api-loader';

  export default {
    computed: {
      blogpostsFromStore() {
        return this.$store.getters.getAllBlogposts;
      },
    },

    // setup() {

    //   const { blogposts, error, load } = getPosts();
    //   load();
    //   return { blogposts, error };
    // },
    mounted() {
      const markers =(this.blogpostsFromStore);
      // const markers = [
      //   {
      //     id: 'hello',
      //     coords: {
      //       lat: 51.093048,
      //       lng: 6.84212,
      //     },
      //   },
      //   {
      //     id: 'hamburg',
      //     coords: {
      //       lat: 53.551086,
      //       lng: 9.993682,
      //     },
      //   },
      //   {
      //     id: 'hamburg',
      //     coords: {
      //       lat: 43.551086,
      //       lng: 0.993682,
      //     },
      //   },
      // ];
      //   console.log(this.blogposts);

      const loader = new Loader({
        apiKey: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
        version: 'weekly',
        libraries: ['places'],
      });

      const mapOptions = {
        center: {
          lat: 0,
          lng: 0,
        },
        // zoom: 4,
        maxZoom: 10,
        minZoom: 2,
        mapTypeControl: false,
        streetViewControl: false,
      };
      // Promise
      //   loader
      //     .load()
      //     .then(() => {
      //       new google.maps.Map(document.getElementById('map'), mapOptions);
      //     })
      //     .then()
      //     .catch((e) => {
      //         console.log(e);
      //     });

      loader.loadCallback((e) => {
        if (e) {
          console.log(e);
        } else {
          //   new google.maps.Map(document.getElementById('map'), mapOptions);
          const overviewMap = new google.maps.Map(document.getElementById('map'), mapOptions);
          let bounds = new google.maps.LatLngBounds();

          markers.forEach((location, i) => {
            const marker = new google.maps.Marker({
              position: location.coords,
              map: overviewMap,
            });

            const infoWindow = new google.maps.InfoWindow({
                  content: `
                  <div class="infoWindow" style="width: 200px;">
                    <h3>${location.name}</h3>
                    <p>${location.title}</p>
                    <div class="infoWindowImage" style="background-image: url(${location.image1URL});"></div>
                    <a href="/details/${location._id}"> <button class="miniButton">read more</button></a>
                  </div>
                  `,
              // content: 'hallo',
            });
            marker.addListener('click', function() {
              infoWindow.open(overviewMap, marker);
            });

            bounds.extend(location.coords);
          });

          overviewMap.fitBounds(bounds);
        }
      });
    },
  };
</script>

<style>
  /* #map {
    width: 400px;
    height: 900px;
  } */
</style>
