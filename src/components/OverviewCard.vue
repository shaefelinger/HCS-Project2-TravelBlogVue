<template>
  <div
    class=" blogPost overflow-hidden m-2 rounded-lg w-11/12 max-w-screen-sm bg-white shadow-md transition duration-500 ease-in-out transform hover:bg-white hover:scale-102 hover:shadow-2xl cursor-pointer"
  >
    <!-- <div class="blogImage" style="background-image: url(${element.postImage1URL});"></div> -->
    <!-- <div class="blogImage" style="background-image: url('https://images.unsplash.com/photo-1473615695634-d284ec918736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80');"></div> -->
    <!-- <img class="blogImage" :src="blogpost.image1URL" alt=""> -->

    <!-- <div
      class="cursor-pointer w-80 bg-gray-50 text-gray-900 m-8  rounded-lg overflow-hidden shadow-lg  opacity-100 hover:opacity-90 hover:shadow-2xl hover:bg-white transform duration-200"
    >
      <div class="p-6">
        <h2 class="font-semibold text-xl text-gray-900">{{ blogpost.name }}</h2>
        <h3 class="text-gray-500 uppercase text-sm font-semibold tracking-wide mt-1">{{ blogpost.longName }}</h3>
      </div>
    </div> -->

    <img class="h-60 w-full object-cover  " v-bind:src="blogpost.image1URL" alt="character" />
    <!-- <div class="blogImage" :style="{ backgroundImage: `url(${blogpost.image1URL})` }"></div> -->
    <div class="blogTextWrapper h-60 overflow-hidden px-8 pb-10">
      <div class="mt-4 flex items-center">
        <StarRating :rating="blogpost.rating" />
        <!-- <svg
          v-for="i in 5"
          :key="i"
          :class="i <= blogpost.rating ? 'text-yellow-500' : 'text-gray-300'"
          class="h-4 w-4 fill-current  "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg> -->
        <p class="text-gray-400 text-sm ml-2">Visited in {{ blogpost.month }} {{ blogpost.year }}</p>
      </div>

      <h2 class="mt-1 text-base text-gray-600">{{ blogpost.longName }}</h2>

      <h3 class="text-2xl my-4">{{ blogpost.title }}</h3>
      <!-- <p class="font-light text-gray-600 text-base ">{{ blogpost.description || blogpost.wiki }}</p> -->
      <p class="font-light text-gray-600 text-base ">{{ snippet }}</p>
    </div>
    <div class="cardBottom">
      <div>
        <div class="mt-5 flex items-center">
          <img class="rounded-full w-11" src="@/assets/Steffen_square.png" alt="" />
          <p class="ml-4 text-gray-500">Steffen Häfelinger</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* OverviewCard Component

  Purpose:  displays information about a single blogpost, card style, with image, name ...
  Requires: the full data object of a single character, passed via props
  Events:   CharacterSelected payload: char_id (number) ???
*/

  import StarRating from '@/components/StarRating.vue';

  export default {
    name: 'OverviewCard',
    components: {
      StarRating,
    },
    props: {
      blogpost: Object,
    },
    computed: {
      snippet() {
        console.log(this.blogpost);
        let snippet = this.blogpost.description || this.blogpost.wiki;
        const maxlength = 140;
        if (snippet.length > maxlength) {
          snippet = snippet.substring(0, maxlength) + '…';
        }
        return snippet;
      },
    },

    //   methods: {
    //     blogpostSelected(char_id) {
    //       this.$emit('BlogpostSelected', _id);
    //     }
    //   },
  };
</script>

<style>
  /* warum ist das nicht zentriert ???? */
  /* ========================================================================== */
  /* PAGE: Overview CARDS */
  /* ========================================================================== */

  /* .overlayButton {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 20000;
  } */

  /* Blog Card */
  /* ========================================================================== */

  /* .blogPost {
    margin: 0.5rem;
    border-radius: 4px;
    overflow: hidden;
    width: 80%;
    width: 400px;
    background-color: #fefefe;
    box-shadow: 0 2px 20px 2px rgba(0, 0, 0, 0.1);
    transition: all 300ms ease-in-out;
    position: relative;
  } */

  /* .blogPost:hover {
    background-color: #fff;
    transform: scale(1.02);
    box-shadow: 0 10px 20px 3px rgba(0, 0, 0, 0.15);
    cursor: pointer; 
  } */

  /* .blogImage {
    width: 100%;
    height: 200px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  } */

  /* .blogTextWrapper {
    padding: 0 2rem 2.5rem; */
  /* height: 10.3rem; */
  /* overflow: hidden;
  } */

  /* .blogTextWrapper h2 {
    font-size: 14px;
    font-weight: 400;
    color: #888;
  } */

  /* .blogTextWrapper p {
    font-size: 16px;
    font-weight: 300;
    color: #4a5568;
  } */

  .ratingContainer {
    height: 1rem;
    width: 85px;
  }

  .cardBottom {
    padding: 1rem 2rem 2rem;
  }

  /* Overview-Page Responsive */
  /* ========================================================================== */

  /* md  */
  /* @media (min-width: 760px) {
    .blogPost {
      width: 40%;
      max-width: 600px;
    }
  } */
</style>
