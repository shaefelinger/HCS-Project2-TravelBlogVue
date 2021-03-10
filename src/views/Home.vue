<template>
  <div>
    <Banner :bannerImage="bannerImage" :bannerText="bannerText" :bannerButtonText="bannerButtonText" :bannerButtonLink="bannerButtonLink" />
  </div>
  <!-- <div v-for="user in users" :key="user._id">
    <p>{{ user._id }}</p>
    <p>{{ user.name }}</p>
  </div> -->
  <!-- id="blogContainer" -->
  <div class="flex flex-col items-center  sm:flex-wrap sm:flex-row sm:justify-center">
    <div class="" v-for="blogpost in blogposts" :key="blogpost._id" @click="selectBlogpost(blogpost)">
      <OverviewCard :blogpost="blogpost" />
    </div>
  </div>

  POSTS: {{ allBlogposts }}
  <!-- USERS: {{ users }} -->
</template>

<script>
  // @ is an alias to /src
  import bannerImage from '@/assets/banner1.jpg';
  import Banner from '@/components/Banner.vue';
  import OverviewCard from '@/components/OverviewCard.vue';

  import { getBlogposts, getUsers, to } from '../utils/io.js';

  import { mapGetters } from 'vuex';

  export default {
    name: 'Home',
    components: {
      Banner,
      OverviewCard,
    },

    data() {
      return {
        // bannerImage: 'https://picsum.photos/id/116/1000/535',
        bannerImage,
        bannerText: 'The Travel Blog',
        bannerButtonText: 'About',
        bannerButtonLink: 'About',

        blogposts: [],
        users: [],
      };
    },

    methods: {
      selectBlogpost(blogpost) {
        console.log('selectCharacter was clicked: ' + blogpost.name);
        const link = '/details/' + blogpost._id;
        console.log(link);
        // console.log(blogpost);
        this.$emit('selectionChanged', blogpost);
        this.$router.push(link);
      },
    },

    async mounted() {
      // load  list of blogposts
      console.log('/home mounted');
      {
        const { data, error } = await to(getBlogposts());
        if (!error) {
          this.blogposts = data;
          this.$store.dispatch('setAllBlogposts', data);
          console.log('👍Got blogposts from Server');
        } else {
          console.log('🚫Error getting Blogpost-Data from Server');
        }
      }
      {
        const { data, error } = await to(getUsers());
        if (!error) {
          this.users = data;
          console.log('👍Got users from Server');
        } else {
          console.log('🚫Error getting user-Data from Server');
        }
      }
    },

    computed: {
      allBlogposts() {
        return this.$store.getters.getAllBlogposts;
      },
    },
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
