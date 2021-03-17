<template>
  <div>
    <form action="">
      <input required id="searchTextField" type="text" size="50" placeholder="Enter a location" autocomplete="on" />
    </form>
  </div>
</template>

<script>
  /* eslint-disable no-undef */

  export default {
    mounted() {
      function initialize() {
        var options = {
          types: ['(regions)'],
        };
        var input = document.getElementById('searchTextField');
        var autocomplete = new google.maps.places.Autocomplete(input, options);
      }
      google.maps.event.addDomListener(window, 'load', initialize);
    },
  };
</script>

<style></style>
