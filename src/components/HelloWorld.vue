<template>
  <h1 class="text-center text-white bg-gray-800">Welcome to a fresh Vue 3 project with Tailwind.css 2.0 - {{msg}}! </h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
      msg: String
  }
}
</script>
