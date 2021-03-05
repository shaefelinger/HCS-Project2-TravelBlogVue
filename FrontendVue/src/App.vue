<template>
  <div class="text-center">
    <div class="p-6" id="nav">
      <router-link class="font-bold text-gray-700" to="/">Home</router-link> |
      <router-link class="font-bold text-gray-700" to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
