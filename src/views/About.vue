<template>
  <Banner
    :bannerImage="bannerImage"
    :bannerText="bannerText"
    :bannerButtonText="bannerButtonText"
    :bannerButtonLink="bannerButtonLink"
  />

  <div class="flex justify-center w-full sm:flex-row flex-wrap">
    <div class=" sm:w-3/5  w-11/12 text-gray-600 ">
      <h2 class="text-gray-800 text-2xl mb-8 ">Project 2 - Travel Blog v2</h2>

      <h3>
        This is my contribution for the final Project for the Full-Stack Web
        Development-Course at the
        <a
          class="underline"
          target="_blank"
          href="https://hamburgcodingschool.com/"
          >Hamburg Coding School.</a
        >
      </h3>

      <div class="mt-4">
        <p>
          - The frontend is using Vue.js (incl. Router and Vuex) and Tailwind
          CSS
        </p>
        <p>
          - The backend is a Node/Express server running on
          Caprover/Digitalocean
        </p>
        <p>
          - The data is stored in a Mongo DB-Atlas Cloud Database - handled by
          the Server
        </p>
        <p>- The Server provides a REST API for the Blog-Posts and User-Data</p>
        <p>
          - Authentification is handled by the Server using JWT-Tokens and
          bcrypt
        </p>
      </div>

      <div class="mt-4">
        <a
          href="https://github.com/shaefelinger/HCS-Project2-TravelBlogVue"
          target="_blank"
        >
          <i class="fab fa-github"> </i>
          <span class="underline"
            >View this project and the documentation on Github</span
          >
        </a>
      </div>
      <div class="mt-4 ">
        <a
          href="https://github.com/shaefelinger/HCS-Project2-Backend"
          target="_blank"
        >
          <i class="fab fa-github"> </i>
          <span class="underline">View the backend-code on Github</span>
        </a>
      </div>
    </div>
  </div>

  <div class="  mt-12 flex  justify-center items-center">
    <div>
      <img
        class="rounded-full h-28 float-left mt-1 mr-4 mb-0 ml-0 bottom-0"
        src="@/assets/Steffen_square.png"
      />
    </div>
    <div class=" flex">
      <p class=" mt-2 text-gray-700 text-xl ">Steffen Häfelinger</p>
    </div>
  </div>
  <p class="aboutAuthorText text-sm text-gray-500 mt-4 text-center px-12">
    Steffen Häfelinger is a software developer located in Hamburg, Germany. He
    is also working as a professional songwriter, producer and musician.
  </p>
</template>

<script>
import bannerImage from '@/assets/banner3.jpg';
import Banner from '@/components/Banner.vue';

export default {
  name: 'About',
  components: {
    Banner,
  },

  data() {
    return {
      bannerImage,
      bannerText: 'About this Project',
      bannerButtonText: 'Back',
      bannerButtonLink: 'home',
    };
  },
};
</script>

<style scoped>
@media (min-width: 640px) {
  .aboutAuthorText {
    padding-left: 30%;
    padding-right: 30%;
  }
}
</style>
