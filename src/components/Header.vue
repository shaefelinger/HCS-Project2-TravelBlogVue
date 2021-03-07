<template>
  <p>Headerr</p>
  <div class="p-6" id="nav">
      <router-link class="font-bold text-gray-700" to="/">Home</router-link> |
      <router-link class="font-bold text-gray-700" to="/about">About</router-link>
    </div>
  <router-view />
</template>

<script>
export default {

}
</script>

<style>

</style>