<template>
  <div class="bannerPanel mainBanner flex-shrink-0"   id="bannerImage">
    <p class="bannerText" id="bannerTitle">The Travel-Blog</p>
  <button onclick="gotoAboutPage()" id="bannerButton">about</button>
</div>
</template>

<script>
export default {

}
</script>

<style>
    /* ========================================================================== */
/* BANNER */
/* ========================================================================== */

.mainBanner {
  /* background-image: url('https://picsum.photos/id/116/1000/535'); */
  background-image: url(../assets/mainBannerPic1000x535.jpg);
}

.bannerPanel {
  height: 200px;
  background-size: cover;
  background-position: center;
  margin: 2rem 0 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bannerText {
  font-size: 2rem;
  font-weight: 200;
  color: white;
  z-index: 1001;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-shadow: 0 0 10px black;
}

/* BANNER RESPONSIVE 
/* ========================================================================== */

@media (min-width: 640px) {
  .bannerText {
    font-size: 3rem;
  }

  .bannerPanel {
    height: 335px;
    margin: 2rem 2rem 3rem;
  }
}

/* large 1024px */
@media (min-width: 1024px) {
  .bannerPanel {
    height: 335px;
  }

  .bannerText {
    font-size: 4rem;
  }
}
</style>