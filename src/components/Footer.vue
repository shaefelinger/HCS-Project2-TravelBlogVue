<template>
  <footer
    class="footer relative  bottom-0  w-full  mt-32 bg-center bg-no-repeat bg-cover pt-24 text-center h-72 z-0"
  >
    <div class=" text-sm text-gray-900">
      <a href="https://www.functionfactory.de" target="_blank">
        2021 Steffen Häfelinger / functionfactory.de
      </a>
    </div>
    <div>
      <a
        class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out "
        href="mailto:mail@functionfactory.de"
      >
        <i class="fas fa-envelope"></i>
      </a>
      <a
        class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out "
        target="_blank"
        href="https://github.com/shaefelinger"
      >
        <i class="fab fa-github"></i>
      </a>
      <a
        class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out "
        target="_blank"
        href="https://www.facebook.com/steffen.hafelinger/"
      >
        <i class="fab fa-facebook-f"></i>
      </a>
      <a
        class="m-2 inline-block text-3xl md:text-2xl transform hover:scale-110 hover:-translate-y-px transition-transform duration-300 ease-in-out "
        target="_blank"
        href="https://www.instagram.com/steffenhaefelinger/"
      >
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

<style scoped>
.footer {
  background-image: linear-gradient(
      to top,
      rgba(255, 0, 0, 0.1),
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    ),
    url(../assets/footerPic1000x1200.jpg);
}
</style>
