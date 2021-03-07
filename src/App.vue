<template>
  <div class="text-center">
    <!-- <div class="p-6" id="nav">
      <router-link class="font-bold text-gray-700" to="/">Home</router-link> |
      <router-link class="font-bold text-gray-700" to="/about">About</router-link>
    </div> -->
    <!-- <router-view /> -->
    <Header />
  </div>



</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}

</script>


<style>
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
