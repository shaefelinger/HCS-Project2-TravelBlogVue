<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="blogposts.length">
    <div>
      <Banner :bannerImage="bannerImage" :bannerText="bannerText" :bannerButtonText="bannerButtonText" :bannerButtonLink="bannerButtonLink" />
    </div>
    <!-- <Login /> -->
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
  // import Login from '@/components/Login.vue';

  // import { getBlogposts, getUsers, to } from '../utils/io.js';

  export default {
    name: 'Home',
    components: {
      Banner,
      OverviewCard,
      Spinner,
      Map,
      // Login,
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
    setup() {
      const { blogposts, error, load } = getPosts();
      load();
      return { blogposts, error };
    },

    // load list of blogposts:
    // async mounted() {
    //   console.log('/home mounted');
    //   {
    //     const { data, error } = await to(getBlogposts());
    //     if (!error) {
    //       console.log('data:', data);
    //       this.blogposts = data;
    //       let array = data;
    //       this.$store.dispatch('setAllBlogposts', data);
    //       console.log('👍Got blogposts from Server');
    //     } else {
    //       console.log('🚫Error getting Blogpost-Data from Server');
    //     }
    //   }
    //   {
    //     const { data, error } = await to(getUsers());
    //     if (!error) {
    //       this.users = data;
    //       console.log('👍Got users from Server');
    //     } else {
    //       console.log('🚫Error getting user-Data from Server');
    //     }
    //   }
    // },

   
  };
</script>

<style>
  /* KANN WAHRSCHEINLICH WEG  */

  #blogContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* MAIN-PAGE RESPONSIVE */
  /* ========================================================================== */

  /* 640px */
  @media (min-width: 640px) {
    #blogContainer {
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
    }
  }
</style>
