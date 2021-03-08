<template>
  <div class="blogPost  w-full m-2">
      <!-- <div class="blogImage" style="background-image: url(${element.postImage1URL});"></div> -->
      <!-- <div class="blogImage" style="background-image: url('https://images.unsplash.com/photo-1473615695634-d284ec918736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80');"></div> -->
      <div class="blogImage" :style="{ backgroundImage: `url(${blogpost.image1URL})` }"></div>
      <!-- <img class="blogImage" :src="blogpost.image1URL" alt=""> -->
      <div class="blogTextWrapper">
        <h2 class="mt-2">{{blogpost.longName}}</h2>
        <p>Visited in {{ blogpost.month }} {{ blogpost.year }}</p>
        <h3 class="text-2xl my-8" >{{blogpost.title}}</h3>
        <p>{{blogpost.description || blogpost.wiki}}</p>

      </div>
      <div class="cardBottom">
        <div>
            <p>Bottom of card</p>
          <!-- <svg class="ratingContainer">
            <use xlink:href="#starRating${element.rating}">
          </svg> -->

        </div>
      </div>
  </div>
</template>

<script>
/* OverviewCard Component

  Purpose:  displays information about a single blogpost, card style, with image, name ...
  Requires: the full data object of a single character, passed via props
  Events:   CharacterSelected payload: char_id (number) ???

*/
export default {

  name: 'OverviewCard',

  props: {
    blogpost: Object,
  },

  emits: ['BlogpostSelected'],

//   methods: {
//     blogpostSelected(char_id) {
//       this.$emit('BlogpostSelected', _id);
//     }
//   },

}
</script>

<style>
/* ========================================================================== */
/* PAGE: Overview CARDS */
/* ========================================================================== */

.overlayButton {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 20000;
}

/* Blog Card */
/* ========================================================================== */

.blogPost {
  margin: 0.5rem;
  border-radius: 4px;
  overflow: hidden;
  width: 80%;
  /* width: 400px; */
  background-color: #fefefe;
  box-shadow: 0 2px 20px 2px rgba(0, 0, 0, 0.1);
  transition: all 300ms ease-in-out;
  position: relative;
}

.blogPost:hover {
  background-color: #fff;
  transform: scale(1.02);
  box-shadow: 0 10px 20px 3px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}

.blogImage {
  width: 100%;
  /* width: 330px; */
  height: 200px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}

.blogTextWrapper {
  padding: 0 2rem 2.5rem;
  height: 10.3rem;
  overflow: hidden;
}

.blogTextWrapper h2 {
  font-size: 14px;
  font-weight: 400;
  color: #888;
}

.blogTextWrapper p {
  font-size: 16px;
  font-weight: 300;
  color: #4a5568;
}

.ratingContainer {
  height: 1rem;
  width: 85px;
}

.cardBottom {
  padding: 1rem 2rem 2rem;
}

/* Overview-Page Responsive */
/* ========================================================================== */

/* small  */
@media (min-width: 760px) {
  .blogPost {
    width: 40%;
    max-width: 600px;
  }
}
</style>