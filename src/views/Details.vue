<template>
  <h1>Details Page</h1>
  <p>The ID is: {{ id }}</p>
  {{ getAllBlogposts.find((el) => el._id === id) }}
  <!-- {{blogpost[0]}} -->
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    // inject: ['blogposts'],
    // props: ['selectionChanged'],

    data() {
      return {
        id: this.$route.params.id,
      };
    },

    created() {
      // const blogID = this.$route.params.id
      // const selectedBlog = this.blo
      // console.log(blogposts);
      // const currentBlogpost = getAllBlogposts.find((el) => el._id === id);
    },

    computed: {
      ...mapGetters(['getAllBlogposts']),
      // current() {
      //   return this.$store.getters.getAllBlogposts;
      // },
    },
  };

  // console.log(this.$route);
</script>

<style></style>
