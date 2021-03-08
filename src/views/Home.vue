<template>
  <div>
    <Banner :bannerImage="bannerImage" :bannerText="bannerText" :bannerButtonText="bannerButtonText" :bannerButtonLink="bannerButtonLink" />
  </div>
  <!-- <div v-for="user in users" :key="user._id">
    <p>{{ user._id }}</p>
    <p>{{ user.name }}</p>
  </div> -->

  <div v-for="blogpost in blogposts" :key="blogpost._id">
    <p>{{ blogpost._id }}</p>
    <p>{{ blogpost.name }}</p>
    <p>{{ blogpost.longName }}</p>
    <p>{{ blogpost.title }}</p>
    <p>{{ blogpost.coords }}</p>
  </div>

  <!-- POSTS: {{ blogpost }} -->
  <!-- USERS: {{ users }} -->
</template>

<script>
  // @ is an alias to /src
  import bannerImage from '@/assets/banner1.jpg';
  import Banner from '@/components/Banner.vue';

  import { getBlogposts, getUsers, to } from '../utils/io.js';

  export default {
    name: 'Home',
    components: {
      Banner,
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
