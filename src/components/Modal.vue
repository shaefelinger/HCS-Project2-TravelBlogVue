<template>
  <div class="backdrop" @click.self="closeModal">
    <div class=" w-96 p-8 m-10 rounded-xl shadow-2xl absolute z-50 bg-white right-16 border-2 border-gray-200  ">
      <input class="h-6 py-6 px-3  my-2 w-full text-sm border-2 border-gray-200 rounded " type="email" placeholder="email " />
      <input class="h-6 py-6 px-3  my-2 w-full text-sm border-2 border-gray-200 rounded" type="password" placeholder="password " />
      <button class="primaryButton uppercase">Log In</button>

      <hr />
      <p>or</p>
      <button class="secondaryButton uppercase">register</button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      closeModal() {
        this.$emit('closeModal');
      },
    },
    props: ['header', 'text'],
  };
</script>
