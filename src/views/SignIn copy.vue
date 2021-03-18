<template>
  <Banner :bannerImage="bannerImage" :bannerText="bannerText" :bannerButtonText="bannerButtonText" :bannerButtonLink="bannerButtonLink" />

  <h1 class="mt-2 text-5xl text-center text-gray-500">coming soon...</h1>
  <div class="text-center text-gray-600">
      <h3 class="text-xl mt-6">Until then, use:</h3>
      <p>Login: testuser@test.com</p>
      <p>Password: test123</p>
      <!-- <p>Current User: {{currentUser}} </p> -->
  </div>
  <img class="w-96 m-auto mt-10" src="@/assets/underconstruction.jpg" alt="">
  <div>
    <form>
        
    </form>
  </div>
</template>


<script>
  import Banner from '@/components/Banner.vue';
  import bannerImage from '@/assets/banner2.jpg';
 export default {
    name: 'SignIn',
    components: {
      Banner,
    },
    data() {
      return {
        bannerImage,
        bannerText: 'Sign In...',
        bannerButtonText: 'Back',
        bannerButtonLink: 'Home',

   
      };
    },
 }
</script>