<template>
    <h1>Details Page</h1>
  <p>The  ID is: {{ id }}</p>  
  <!-- {{blogpost[0]}} -->
</template>

<script>
export default {
  inject: ['blogposts'],
  
   data() {
        return {
            id: this.$route.params.id
        }
    },

    created() {
      // const blogID = this.$route.params.id
      // const selectedBlog = this.blo
      // console.log(blogposts);
    }
}

// console.log(this.$route);
</script>


<style>

</style>