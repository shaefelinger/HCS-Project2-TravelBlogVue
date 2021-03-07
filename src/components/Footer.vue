<template>
  <footer class="footer   absolute w-full bottom-0 mt-16 bg-center bg-no-repeat bg-cover pt-24 text-center">
    <div class=" text-sm text-gray-900">
      <a href="https://www.steffen-haefelinger.com/" target="_blank">
        &copy; 2021 Steffen Häfelinger
      </a>
    </div>
    <div >
      <a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " href="mailto:s.haefelinger@gmx.de">
        <i class="fas fa-envelope"></i>
      </a>
      <a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " target="_blank" href="https://github.com/shaefelinger">
        <i class="fab fa-github"></i>
      </a>
      <a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " target="_blank" href="https://www.facebook.com/steffen.hafelinger/">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out " target="_blank" href="https://www.instagram.com/steffenhaefelinger/">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
  };
</script>

<style>
  .footer {
    background-image: linear-gradient(to top, rgba(255, 0, 0, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), url(../assets/footerPic1000x1200.jpg);
  }
</style>
