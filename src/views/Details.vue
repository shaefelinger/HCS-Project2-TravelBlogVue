<template>
  <Banner :bannerImage="currentBlogpost.image1URL" :bannerText="currentBlogpost.name" :bannerButtonText="bannerButtonText" :bannerButtonLink="bannerButtonLink" />

  <div class="flex justify-center">
    <div class="detailsArticle ">
      <div>
        <div class="detailsTopContainer">
          <!-- <div class="detailsImg2" :style="{ backgroundImage: `url(${currentBlogpost.image2URL})` }" > -->
          <img class="detailsImg2" :src="currentBlogpost.image2URL" alt="" />
        </div>
      </div>
      <div>
        <h2>{{ currentBlogpost.longName }}</h2>
        <StarRating :rating="currentBlogpost.rating" />
        <p>Visited in {{ currentBlogpost.month }} {{ currentBlogpost.year }}</p>
        <h3>{{ currentBlogpost.postTitle }}</h3>
        <p>{{ currentBlogpost.postDescription }}</p>
        <p>{{ currentBlogpost.wiki }}</p>
      </div>
      <!-- <div class="detailsInfoContainer">
          <div id="weatherContainer"></div>
          <div id="watchContainer">
            <p>Local Time</br>
              <span class="watchDisplay">--:--:--</span>
            </p>
          </div>
        </div> -->
      <!-- <div id="map">map</div> -->
      <div id="overviewMap" ref="mapDiv"></div>

      <button class="secondaryButton" onclick="eraseEntryFromLocalStorage()">DELETE POST</button>
      <button class="primaryButton" onclick="gotoOverviewPage()">&lt; BACK</button>
    </div>
  </div>
</template>

<script>
  import Banner from '@/components/Banner.vue';
  import StarRating from '@/components/StarRating.vue';

  /* eslint-disable no-undef */
  import { computed, ref, onMounted } from 'vue';
  import { Loader } from '@googlemaps/js-api-loader';
  const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

  export default {
    name: 'Details',
    components: {
      Banner,
      StarRating,
    },
    data() {
      return {
        // id: this.$route.params.id,
        bannerButtonText: 'back',
        bannerButtonLink: 'About',

        blogposts: [],
        users: [],
      };
    },

    computed: {
      allBlogposts() {
        return this.$store.getters.getAllBlogposts;
      },
      currentBlogpost() {
        return this.$store.getters.getAllBlogposts.find((el) => el._id === this.$route.params.id);
      },
    },

    setup() {
      const currPos = computed(() => ({
        lat: 47.3768866,
        lng: 8.541694,
      }));

      const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
      const mapDiv = ref(null);
      const options = {
        zoom: 6,
        center: currPos.value,
        mapTypeId: 'hybrid',
        disableDefaultUI: true,
      };
      onMounted(async () => {
        await loader.load();
        const map = new google.maps.Map(mapDiv.value, options);
        const marker = new google.maps.Marker({
          position: currPos.value,
          map: map,
        });
        console.log(marker);
      });

      return { mapDiv };
    },
  };
</script>

<style>
  /* ========================================================================== */
  /* PAGE: DETAILS-PAGE  */
  /* ========================================================================== */

  #detailsContainer {
    display: flex;
    justify-content: center;
    max-width: 600px;
    background-color: #222;
  }

  .detailsTopContainer {
    display: flex;
    justify-content: space-between;
    height: 440px;
  }

  .detailsInfoContainer {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;
  }

  .detailsImg2 {
    border-radius: 5px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: 0 2px 20px 2px rgba(0, 0, 0, 0.3);
  }

  .detailsArticle {
    width: 90%;
    color: #333;
    position: relative;
  }

  .detailsArticle p {
    color: #666;
    margin-bottom: 4px;
    margin-top: 30px;
  }

  .detailsArticle h2 {
    font-size: 2.4rem;
    color: #333;
  }

  .detailsArticle h3 {
    color: #444;
  }

  /* watch & weather  */
  #watchContainer {
    font-size: 0.7rem;
    height: 100px;
  }

  .watchDisplay {
    font-size: 1.4rem;
    color: #333;
  }

  #weatherContainer {
    font-size: 0.7rem;
    height: 100px;
  }

  #weatherContainer p {
    margin-bottom: -12px;
  }

  /* map (on Details-page) */
  #map {
    height: 420px;
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  /* DETAILS-PAGE RESPONSIVE */
  /* ========================================================================== */
  @media (min-width: 640px) {
    .detailsArticle {
      width: 60%;
    }
  }

  @media (min-width: 800px) {
    .detailsImg2 {
      margin-top: 2rem;
    }
  }
</style>
