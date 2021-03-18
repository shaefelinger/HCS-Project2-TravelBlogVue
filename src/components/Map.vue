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
      const markers = this.locations;

      const loader = new Loader({
        apiKey: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
        version: 'weekly',
        libraries: ['places'],
      });

      const mapOptions = {
        maxZoom: 10,
        minZoom: 1,
        mapTypeControl: false,
        streetViewControl: false,
        backgroundColor: '#FFFFFF',
      };

      loader.loadCallback((err) => {
        if (err) {
          console.log('🚫', err);
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
                <div class=" w-44">
                  <h3 class="text-xl">${location.name}</h3>
                  <p class="my-2">${location.title}</p>
                  <p class="my-2 text-xs text-gray-500">Visited in ${location.month} ${location.year}</p>

                   <div class="my-3 flex items-center justify-evenly ">
                      <img class="rounded-full w-8 h-8" src="${location.authorPic}" alt="" />
                      <p class=" text-xs text-gray-500">${location.author}</p>
                  </div>

                  <a href="/#/details/${location._id}"> <button class=" text-gray-500 h-6">read more</button></a> 
                </div>
                <MapInfoWindow />
                `,
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
  #mapComponent {
    height: 400px;
  }

  /* #overviewMap {
    height: 700px;
    width: 100%;
  } */

  /* #overviewMapContainer {
    display: flex;
    justify-content: center;
  } */

  /* 

  .miniButton {
    font-size: 0.6rem;
    height: 2rem;
    color: #555;
  }

 */
</style>
