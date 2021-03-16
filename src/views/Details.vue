<template>
  <div v-if="error">😱Error getting the details: {{ error }}</div>
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

  import { useRoute } from 'vue-router';

  import Spinner from '@/components/Spinner.vue';

  import Banner from '@/components/Banner.vue';
  import StarRating from '@/components/StarRating.vue';

  export default {
    name: 'Details',
    components: {
      Banner,
      StarRating,
      Spinner,
      SingleMap,
    },
    props: ['id'],
    data() {
      return {
        bannerButtonText: 'back',
        bannerButtonLink: 'home',
      };
    },
  
   
    setup(props) {
      // console.log(' details props', props);
      const route = useRoute();
      const currentID = route.params.id;
      // console.log('details from router', currentID)
      // const { post, error, load } = getPost(props.id);
      const { post, error, load } = getPost(currentID);
      load();
      console.log('error aus details', error);
      // if (error) {
      //   alert(JSON.stringify(error))
      // }
      return { post, error };
    },

  };
</script>

<style>
  .detailsImgContainer {
    height: 440px;
  }


  /* .detailsImg2 {
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; 
    box-shadow: 0 2px 20px 2px rgba(0, 0, 0, 0.3);
  } */


  /* watch & weather  */
  /* .detailsInfoContainer {
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
  } */



</style>
