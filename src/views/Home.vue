<template>
  <div class="home">
    <HelloWorld msg="now with router and vuex"/>
    <!-- <Header /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    // Header
  }
}
</script>
