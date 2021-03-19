<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="blogposts.length">
    <div>
      <Banner :bannerImage="bannerImage" :bannerText="bannerText" :bannerButtonText="bannerButtonText" :bannerButtonLink="bannerButtonLink" />
    </div>
  <div v-show="false">{{ sortedBlogposts }}</div>
    
    <Map :locations="blogposts" />

    <div class="flex ">
      <div class="flex flex-col items-center  sm:flex-wrap sm:flex-row sm:justify-center">
        <div class="" v-for="blogpost in blogposts" :key="blogpost._id" @click="selectBlogpost(blogpost)">
          <OverviewCard :blogpost="blogpost" />
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p class="txt-xl text-center">Loading...</p>
    <Spinner />
  </div>
</template>

<script>
  import getPosts from '@/composables/getPosts.js';

  import bannerImage from '@/assets/banner1.jpg';
  import Banner from '@/components/Banner.vue';
  import OverviewCard from '@/components/OverviewCard.vue';
  import Map from '@/components/Map.vue';
  import Spinner from '@/components/Spinner.vue';

  // import { getBlogposts, getUsers, to } from '../utils/io.js';

  export default {
    name: 'Home',
    components: {
      Banner,
      OverviewCard,
      Spinner,
      Map,
    },

    data() {
      return {
        bannerImage,
        bannerText: 'The Travel Blog',
        bannerButtonText: 'About',
        bannerButtonLink: 'about',
      };
    },

    methods: {
      selectBlogpost(blogpost) {
        const link = '/details/' + blogpost._id;
        this.$router.push(link);
      },
    },

    computed: {
      userIsLoggedIn() {
        return this.$store.getters.userIsLoggedIn;
      },
      currentUser() {
        return this.$store.getters.getCurrentUser;
      },
      sortedBlogposts() {
        const arr = this.blogposts;
        arr.sort(function(a, b) {
          var keyA = a.year,
            keyB = b.year;
          // Compare the 2 dates
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        });
        return arr;
        // sorted by year only... dirty quick last minute hack with v-show=false
      },
    },
    // get all blogposts
    setup() {
      const { blogposts, error, load } = getPosts();
      load();
      return { blogposts, error };
    },
   
    
  };
</script>

<style>

</style>
