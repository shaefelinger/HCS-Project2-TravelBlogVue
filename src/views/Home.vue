<template>
  <div class="home">
    <Banner msg="now with router and vuex"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'

export default {
  name: 'Home',
  components: {
    Banner,
  }
}
</script>
