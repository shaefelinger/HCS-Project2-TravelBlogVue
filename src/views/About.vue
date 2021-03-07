<template>
    <Banner />
    <div id="aboutContainer" >
    <div class="aboutArticle">
      <h2>Project 1 - Travel Blog</h2>

      <p>This is my contribution for the second Project for the Full-Stack Web Development-Course at the
        <a target="_blank" href="https://hamburgcodingschool.com/">Hamburg Coding School.</a>
      </p>


      <p>
        It uses no Frameworks, just vanilla HTML, CSS and Javascript.
      </p>
      <p>
        All Information is stored in the Local Sorage of the Browser, the App fetches information from
        the APIs: <br>
        - Google Maps <br>
        - Wikipedia<br>
        - Openweathermaps 
      </p>
      <a href="https://github.com/shaefelinger/HCS-project1-travelBlog" target="_blank">
        <i class="fab fa-github"></i>
        View this project and the documentation on Github
      </a>
  
    </div>
  </div>
  <section class="aboutBottom ">
    <div class="aboutAuthorInfo">
      <div class="authorPic  aboutAuthorPic">
        <img src="@/assets/Steffen_square.png">
      </div>
      <p class="author">Steffen Häfelinger</p>
    </div>
    <p class="aboutAuthorText">Steffen Häfelinger is a web developer located in Hamburg, Germany.
      He is currently studying Full Stack Web Developement at
      <a target="_blank" href="https://hamburgcodingschool.com/">Hamburg Coding School.</a>
      He is also working as a professional Musician, Songwriter & Audio Engineer.
    </p>
  </section>
</template>





<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'

export default {
  name: 'About',
  components: {
    Banner,
  }
}
</script>
// ========================================== 



<style scoped>
#aboutContainer {
  display: flex;
  justify-content: center;
  width: 100%;
  /* min-height: 800px; */
  margin-top: 7rem;

}

.authorPic img {
  border-radius: 50%;
  float: left;
  bottom: 0;
  margin: 4px 16px 0 0;
  height: 120px;
}

p.author {
  color: #4a5568;
  margin-top: 0.3rem;
  display: inline-block;
}

.aboutAuthorInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-left: 30%;
  padding-right: 30%;
  font-size: 0.8rem;
  color: #888;
  height: 100%;
}

.aboutAuthorInfo .author {
  font-size: 1.2rem;
  margin-bottom: 0;
}

.aboutAuthorText {
  margin-top: 0;
  padding: 0 15%;
  font-size: 0.8rem;
  color: #888;
  height: 100%;
  text-align: center;
}

.aboutBottom {
  margin-top: 3rem;
}

.aboutArticle {
  width: 90%;
  color: #333;
}

.aboutArticle p {
  color: #666;
}

.aboutArticle h2 {
  margin-bottom: 2rem;
}

.aboutArticle a:hover,
.aboutAuthorText a:hover {
  text-decoration: underline;
}

/* ABOUT RESPONSIVE */
/* ========================================================================== */
@media (min-width: 640px) {
  #aboutContainer {
    flex-wrap: wrap;
    flex-direction: row;
  }
  .aboutAuthorInfo {
    flex-direction: row;
  }

  .aboutAuthorText {
    padding-left: 30%;
    padding-right: 30%;
    text-align: center;
    margin-top: 2rem;
  }

  .aboutArticle {
    width: 60%;
  }
}

</style>