<template>
  <div>
    <Banner :bannerImage="bannerImage" :bannerText="bannerText" :bannerButtonText="bannerButtonText" :bannerButtonLink="bannerButtonLink" />
  </div>
  <!-- <div v-for="user in users" :key="user._id">
    <p>{{ user._id }}</p>
    <p>{{ user.name }}</p>
  </div> -->

  <div id="blogContainer">
    <div v-for="blogpost in blogposts" :key="blogpost._id" @click="selectBlogpost(blogpost)">
      <!-- <router-link :to="{ name: 'BlogpostDetails', params: { title: blogpost.title } }"> -->
      <!-- <router-link :to="{ name: `About/${blogpost._id}`, params: { blogpost: blogpost._id }} ">
        <h2>testlink:  {{ blogpost.name }}</h2>
        <p>{{ blogpost._id }}</p>
      </router-link> -->

      <!-- <p>{{ blogpost._id }}</p>
      <p>{{ blogpost.name }}</p>
      <p>{{ blogpost.longName }}</p>
      <p>{{ blogpost.title }}</p>
      <p>{{ blogpost.coords }}</p> -->
      <OverviewCard :blogpost="blogpost" />
    </div>
  </div>

  <!-- POSTS: {{ blogpost }} -->
  <!-- USERS: {{ users }} -->
</template>

<script>
  // @ is an alias to /src
  import bannerImage from '@/assets/banner1.jpg';
  import Banner from '@/components/Banner.vue';
  import OverviewCard from '@/components/OverviewCard.vue';

  import { getBlogposts, getUsers, to } from '../utils/io.js';

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

        this.$router.push(link);
        // this.$emit('selectionChanged', blogpost_id);
      },
    },

    // methods: {
    //   blogSelected(blog_id) {
    //     console.log('In App  Selected ', blog_id);
    //   },
    // },

    async mounted() {
      // load  list of blogposts
      console.log('/home mounted');
      {
        const { data, error } = await to(getBlogposts());
        if (!error) {
          this.blogposts = data;
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

    // computed: {
    //   bannerImage() {
    //     return this.$store.getters.bannerImage;
    //   },
    // },
    // methods: {
    //   BannerImage(imageURL) {
    //     this.$store.commit('setBannerImage', imageURL);
    //   },
    // },
  };
</script>

<style>
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
