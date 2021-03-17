<template>
  <div
    class="bannerPanel bg-cover bg-center mt-8 mb-12 mx-0 sm:mx-8 flex flex-col justify-evenly items-center flex-shrink-0"
    id="bannerImage"
    :style="{ backgroundImage: `url(${bannerImage})` }"
  >
    <p class="bannerText text-3xl sm:text-5xl lg:text-6xl font-extralight text-white  " id="bannerTitle">{{ bannerText }}</p>
      <router-link :to="`/${bannerButtonLink}`">
        <button class=" uppercase "  id="bannerButton">{{ bannerButtonText }}</button>
      </router-link>
  </div>
</template>

<script>
  export default {
    props: ['bannerImage', 'bannerText', 'bannerButtonText', 'bannerButtonLink'],
  };
</script>

<style scoped>
  .bannerPanel {
    height: 200px;
  }

  .bannerText {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-shadow: 0 0 10px black;
  }

  /* sm 640px */
  @media (min-width: 640px) {
    .bannerPanel {
      height: 335px;
    }
  }
</style>
