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
        maxZoom: 10,
        minZoom: 2,
        mapTypeControl: false,
        streetViewControl: false,
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
                <div class="infoWindow" style="width: 200px;">
                  <h3 class="text-xl">${location.name}</h3>
                  <p class="my-2">${location.title}</p>
                  <img class="h-32 w-full object-cover" src="${location.image1URL}">

                  <a href="/details/${location._id}"> <button class="miniButton">read more</button></a> 
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
    /* width: 100vw; */
    height: 400px;
  }

  #overviewMap {
    height: 700px;
    width: 100%;
  }

  #overviewMapContainer {
    display: flex;
    justify-content: center;
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
