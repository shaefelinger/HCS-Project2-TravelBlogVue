<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal w-80 p-8 m-10 rounded-xl shadow-2xl bg-white fixed z-50 right-16 border-2">
      <slot>Default content if no data was passed</slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
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

<style>
  .modal {
    /* width: 400px; */
    /* padding: 20px; */
    /* margin: 100px auto; */
    /* background: white; */
    /* border-radius: 10px; */
  }
  /* .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  } */
  .modal .actions {
    text-align: center;
    margin: 30px 0 20px 0;
  }
  .modal .actions a {
    color: #333;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
  }
</style>
