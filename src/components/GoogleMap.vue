<template>
  <div class="about">
    <GMapMap 
    :center="center" 
    :zoom="3" 
    map-type-id="terrain" 
    style="width: 100vw; height: 600px"
    :disableDefaultUI="true"
    :options="{
                      zoomControl: false,
                      mapTypeControl: false,
                      scaleControl: true,
                      streetViewControl: false,
                      rotateControl: false,
                      fullscreenControl: false,
                 }"
     >
      <GMapMarker 
        :key="index" 
        v-for="(marker, index) in markers" 
        :position="marker.coords" 
        :clickable="true"
        @click="openInfoWindow(marker.id)"
      >
         <GMapInfoWindow
          :opened="false"
          :options=" {
              pixelOffset: {
                width: 10, height: 0
              },
              maxWidth: 320,
              maxHeight: 320,

        }">
             
               <div class="infoWindow" style="width: 200px;">
              <h3>{{marker.name}}</h3>
              <p>{{marker.title}}</p>
              <!-- <img :src="marker.image1URL" alt=""> -->
              <a class="" href="/details/${location._id}"> <button class="miniButton">read more</button></a>
            </div>
        <div>{{marker.longName}} {{index}}</div> <MapInfoWindow />
      </GMapInfoWindow>
      </GMapMarker>
    </GMapMap>
  </div>
</template>
<script>
import MapInfoWindow from '@/components/MapInfoWindow.vue'

  export default {
    name: 'GoogleMap',
    components: {
      MapInfoWindow
    },
    props: {
      markers: Array,
      center: Object,
    },
    methods: {
      openInfo() {
        console.log('openInfo');
        // const link = '/details/' + id;
        // this.$router.push(link);
      }
    }
    //   data() {
    //     return {
    //       center: { lat: 53.551086, lng: 9.993682 },
    //     }
    //   }
  };
</script>
