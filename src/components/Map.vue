<template>
  <div id="mapComponent" class="mt-8 mb-12 mx-0 sm:mx-8 flex flex-col justify-evenly items-center flex-shrink-0"></div>
</template>

<script>
  /* eslint-disable no-undef */

  import { Loader } from '@googlemaps/js-api-loader';

  export default {
      props: ['locations'],
    computed: {
      blogpostsFromStore() {
        return this.$store.getters.getAllBlogposts;
      },
    },

    mounted() {
      const markers = this.blogpostsFromStore;
    //   const markers = [
    //     {
    //       id: 'hello',
    //       coords: {
    //         lat: 51.093048,
    //         lng: 120.84212,
    //       },
    //     },
    //     {
    //       id: 'test',
    //       coords: {
    //         lat: 53.551086,
    //         lng: 9.993682,
    //       },
    //     },
    //     {
    //       id: 'test',
    //       coords: {
    //         lat: 43.551086,
    //         lng: 0.993682,
    //       },
    //     },
    //   ];
    // const markers = this.locations

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
        maxZoom: 10,
        minZoom: 2,
        mapTypeControl: false,
        streetViewControl: false,
      };

      loader.loadCallback((e) => {
        if (e) {
          console.log(e);
        } else {
          const overviewMap = new google.maps.Map(document.getElementById('mapComponent'), mapOptions);
          let bounds = new google.maps.LatLngBounds();

          markers.forEach((location, i) => {
            const marker = new google.maps.Marker({
              position: location.coords,
              map: overviewMap,
            });

            const infoWindow = new google.maps.InfoWindow({
                content: `
                <div class="infoWindow" style="width: 200px; OnClick="clickInfoWindow(${location.name})">
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

            function clickInfoWindow(id) {
                console.log(id);
            }
            bounds.extend(location.coords);
          });

          overviewMap.fitBounds(bounds);
        }
      });
    },
  };
</script>

<style>
  #mapComponent {
    /* width: 100vw; */
    height: 400px;
  }
</style>
