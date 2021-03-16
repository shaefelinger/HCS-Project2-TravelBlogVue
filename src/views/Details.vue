<template>
  <div v-if="error">😱Error: {{ error }}</div>
  <div v-if="post">
    <Banner :bannerImage="post.image1URL" :bannerText="post.name" :bannerButtonText="bannerButtonText" :bannerButtonLink="bannerButtonLink" />
    <div class="flex justify-center">
      <div class="detailsArticle relative text-gray-500 w-11/12 sm:w-3/5">
        <div>
          <div class="detailsImgContainer shadow-lg flex ">
            <img class="detailsImg2 md:mt-8 w-full object-cover rounded-md " :src="post.image2URL" alt="" />
          </div>
        </div>
        <div>
          <h2 class="mt-8 text-gray-600 text-4xl">{{ post.longName }}</h2>
          <div class="flex flex-row items-center  py-4">
            <StarRating :rating="post.rating" />
            <p class="ml-4 text-gray-500">Visited in {{ post.month }} {{ post.year }}</p>
          </div>
          <h3 class="text-2xl text-gray-700">{{ post.title }}</h3>
          <p class="mt-4">{{ post.description }}</p>
          <p class="mt-4">{{ post.wiki }}</p>
        </div>
        <div class="mt-5 flex items-center">
          <img class="rounded-full w-11" src="@/assets/Steffen_square.png" alt="" />
          <p class="ml-4 text-gray-500">Steffen Häfelinger</p>
        </div>
        <!-- <div id="overviewMap" ref="mapDiv" class="mt-4"></div> -->
        <!-- <div id="overviewMap" class="mt-4"></div> -->

        <SingleMap :location="post.coords" />

        <button class="secondaryButton" onclick="eraseEntryFromLocalStorage()">DELETE POST</button>
        <button class="primaryButton" onclick="gotoOverviewPage()">&lt; BACK</button>
      </div>
    </div>
  </div>
  <div v-else>
    <p class="txt-xl text-center">Loading...</p>
    <Spinner />
  </div>

  <!-- <div class="detailsInfoContainer">
          <div id="weatherContainer"></div>
          <div id="watchContainer">
            <p>Local Time</br>
              <span class="watchDisplay">--:--:--</span>
            </p>
          </div>
        </div> -->
</template>

<script>
  /* eslint-disable no-undef */

  import SingleMap from '@/components/SingleMap.vue';

  import getPost from '@/composables/getPost';

  // import { getOneBlogpost, to } from '../utils/io.js';

  import Spinner from '@/components/Spinner.vue';

  import Banner from '@/components/Banner.vue';
  import StarRating from '@/components/StarRating.vue';
  // import { useRouter, useRoute } from 'vue-router';

  // import { computed, ref, onMounted } from 'vue';
  // import { useStore } from 'vuex';

  // import { Loader } from '@googlemaps/js-api-loader';
  // import router from '../router';
  // const GOOGLE_MAPS_API_KEY = process.env.VUE_APP_GOOGLE_MAPS_API_KEY;

  export default {
    name: 'Details',
    components: {
      Banner,
      StarRating,
      Spinner,
      SingleMap,
      // GoogleMap,
    },
    props: ['id'],
    data() {
      return {
        // id: this.$route.params.id,
        bannerButtonText: 'back',
        bannerButtonLink: 'About',

        // post: {},
        // blogposts: [],
        // users: [],
      };
    },

    // computed: {
    //   allBlogposts() {
    //     return this.$store.getters.getAllBlogposts;
    //   },
    // },

    // async mounted() {
    //   console.log('/details mounted', this.$route.params.id);
    //   {
    //     const { data, error } = await to(getOneBlogpost(this.$route.params.id));
    //     if (!error) {
    //       this.post = data;
    //       // this.$store.dispatch({
    //       //   type: 'setCurrentBlogpost', // name of the mutation
    //       //   value: data,
    //       // });
    //       console.log('👍Got one blogposts from Server');
    //     } else {
    //       console.log('🚫Error getting ONE Blogpost-Data from Server');
    //     }
    //   }
    // },

    setup(props) {
      console.log(' details props', props);
      // const route = useRoute();
      // const currentID = route.params.id;

      const { post, error, load } = getPost(props.id);
      load();
      return { post, error };
    },

    // mounted() {
    //   console.log('details mounted', this.post);
    // }

    // setup() {

    //   const store = useStore();
    //   const route = useRoute();
    //   const allPosts = store.getters.getAllBlogposts;
    //   console.log('all', allPosts);
    //   const currentID = route.params.id;
    //   const currentPost = allPosts.find((el) => el._id === currentID);

    //   const currPos = currentPost.coords;

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
    // // return { mapDiv, allPosts, currentPost };
    // },
  };
</script>

<style>
  /* ========================================================================== */
  /* PAGE: DETAILS-PAGE  */
  /* ========================================================================== */


  .detailsImgContainer {
    height: 440px;
  }

  

  /* .detailsImg2 {
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; */
    box-shadow: 0 2px 20px 2px rgba(0, 0, 0, 0.3);
  } */

  /* .detailsArticle {
    width: 90%;
    color: #333;
    position: relative;
  } */

  /* .detailsArticle p {
    color: #666;
    margin-bottom: 4px;
    margin-top: 30px;
  } */

  /* .detailsArticle h2 {
    font-size: 2.4rem;
    color: #333;
  } */

  /* .detailsArticle h3 {
    color: #444;
  } */

  /* watch & weather  */

  .detailsInfoContainer {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;
  }

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
  /* #map {
    height: 420px;
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 1rem;
  } */

  /* DETAILS-PAGE RESPONSIVE */
  /* ========================================================================== */
  /* @media (min-width: 640px) {
    .detailsArticle {
      width: 60%;
    }
  } */

  /* @media (min-width: 800px) {
    .detailsImg2 {
      margin-top: 2rem;
    }
  } */
</style>
