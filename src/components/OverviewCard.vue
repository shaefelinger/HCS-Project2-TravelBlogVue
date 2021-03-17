<template>
  <div
    class="  overflow-hidden m-2 rounded-lg w-11/12 max-w-screen-sm bg-white shadow-md transition duration-500 ease-in-out transform hover:bg-white hover:scale-102 hover:shadow-2xl cursor-pointer"
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

    <!-- <div class="blogImage" :style="{ backgroundImage: `url(${blogpost.image1URL})` }"></div> -->

    <img class="h-52 w-full object-cover  " v-bind:src="blogpost.image1URL" alt="character" />
    <div class=" h-60 overflow-hidden px-8 pb-10">
      <div class="mt-4 flex items-center">
        <StarRating :rating="blogpost.rating" />
        
        <p class="text-gray-400 text-sm ml-2">Visited in {{ blogpost.month }} {{ blogpost.year }}</p>
      </div>

      <h2 class="mt-1 text-base text-gray-600">{{ blogpost.longName }}</h2>

      <h3 class="text-2xl my-4">{{ blogpost.title }}</h3>
      <!-- <p class="font-light text-gray-600 text-base ">{{ blogpost.description || blogpost.wiki }}</p> -->
      <p class="font-light text-gray-600 text-base ">{{ snippet }}</p>
    </div>
    <div class=" pt-4 px-8 pb-8 ">
      <div>
        <div class="mt-5 flex items-center">
          <img class="rounded-full w-12 h-12 " :src="blogpost.authorPic" alt="" />
          <p class="ml-4 text-gray-500">{{ blogpost.author }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
        let snippet = this.blogpost.description || this.blogpost.wiki;
        const maxlength = 140;
        if (snippet.length > maxlength) {
          snippet = snippet.substring(0, maxlength) + '…';
        }
        return snippet;
      },
    },
  };
</script>

<style>
  /* .ratingContainer {
    height: 1rem;
    width: 85px;
  } */

  /* .cardBottom {
    padding: 1rem 2rem 2rem;
  } */
</style>
