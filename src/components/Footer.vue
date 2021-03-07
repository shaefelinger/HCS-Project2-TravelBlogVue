<template>
   <footer class="footer absolute w-full bottom-0">
            <div class="companyLink">
                <a href="https://www.steffen-haefelinger.com/" target="_blank">
                    &copy; 2020 Steffen Häfelinger
                </a>
            </div>
            <div class="socialMediaFooter">
                <a href="mailto:s.haefelinger@gmx.de">
                    <i class="fas fa-envelope"></i>
                </a>
                <a target="_blank" href="https://github.com/shaefelinger">
                    <i class="fab fa-github"></i>
                </a>
                <a target="_blank" href="https://www.facebook.com/steffen.hafelinger/">
                    <i class="fab fa-facebook-f"></i>
           
                </a>
                <a target="_blank" href="https://www.instagram.com/steffenhaefelinger/">
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
  margin-top: 4rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: linear-gradient(
      to top,
      rgba(255, 0, 0, 0.1),
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    ),
    /* url('https://picsum.photos/id/156/1000/1200'); */
      url(../assets/footerPic1000x1200.jpg);
}

.footerTitle {
  color: #111;
  font-size: 1.5rem;
  font-weight: 400;
  margin: auto 2rem;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.footer {
  text-align: center;
  padding-top: 6rem;
}

.socialMediaFooter a {
  color: #1f2937;
  font-size: 1.9rem;
  margin: 0.5rem;
  display: inline-block;
  transition: transform 250ms ease-in-out;
}

.socialMediaFooter a:hover {
  transform: scale(1.1) translateY(-1px);
}

.companyLink {
  font-size: 0.8rem;
  color: #1f2937;
}

/* Footer responsive */
/* ========================================================================== */

@media (min-width: 800px) {
  .socialMediaFooter a {
    font-size: 1.4rem;
  }
}
</style>
