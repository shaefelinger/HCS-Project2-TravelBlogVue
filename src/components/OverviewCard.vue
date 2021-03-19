<template>
  <div
    class="  overflow-hidden m-2 rounded-lg w-11/12 max-w-screen-sm bg-white shadow-md transition duration-500 ease-in-out transform hover:bg-white hover:scale-102 hover:shadow-2xl cursor-pointer"
  >
  

    <img class="h-52 w-full object-cover  " v-bind:src="blogpost.image1URL" alt="character" />
    <div class=" h-60 overflow-hidden px-8 pb-10">
      <div class="mt-4 flex items-center">
        <StarRating :rating="blogpost.rating" />
        
        <p class="text-gray-400 text-sm ml-2">Visited in {{ blogpost.month }} {{ blogpost.year }}</p>
      </div>

      <h2 class="mt-1 text-base text-gray-600">{{ blogpost.longName }}</h2>

      <h3 class="text-2xl my-4">{{ blogpost.title }}</h3>
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
