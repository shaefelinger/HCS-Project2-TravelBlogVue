<template>
  <footer class="footer   absolute w-full bottom-0 mt-16 bg-center bg-no-repeat bg-cover pt-24 text-center">
    <div class="companyLink text-sm text-gray-900">
      <a href="https://www.steffen-haefelinger.com/" target="_blank">
        &copy; 2021 Steffen Häfelinger
      </a>
    </div>
    <div class="socialMediaFooter">
      <a class="m-2 inline-block text-3xl md:text-2xl transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-px" href="mailto:s.haefelinger@gmx.de">
        <i class="fas fa-envelope"></i>
      </a>
      <a class="m-2 inline-block text-3xl md:text-2xl transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-px" target="_blank" href="https://github.com/shaefelinger">
        <i class="fab fa-github"></i>
      </a>
      <a class="m-2 inline-block text-3xl md:text-2xl transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-px" target="_blank" href="https://www.facebook.com/steffen.hafelinger/">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a class="m-2 inline-block text-3xl md:text-2xl transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-px" target="_blank" href="https://www.instagram.com/steffenhaefelinger/">
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
  /* ========================================================================== */
  /* FOOTER */
  /* ========================================================================== */

  .footer {
    /* margin-top: 4rem; */
    /* background-position: center; */
    /* background-repeat: no-repeat; */
    /* background-size: 100%; */
    /* text-align: center; */
    /* padding-top: 6rem; */

    background-image: linear-gradient(to top, rgba(255, 0, 0, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), url(../assets/footerPic1000x1200.jpg);
  }



  .socialMediaFooter a {
    /* color: #1f2937; */
    /* font-size: 1.9rem;
    margin: 0.5rem;
    display: inline-block; */
    /* transition: transform 250ms ease-in-out; */
  }

  .socialMediaFooter a:hover {
    /* transform: scale(1.1) translateY(-1px); */
  }

  /* .companyLink {
    font-size: 0.8rem; 
    color: #1f2937;
  } */

  /* Footer responsive */
  /* ========================================================================== */

  /* @media (min-width: 800px) {
    .socialMediaFooter a {
      font-size: 1.4rem;
    }
  } */
</style>
