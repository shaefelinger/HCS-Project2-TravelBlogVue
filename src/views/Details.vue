<template>
  <div v-if="error">😱Error getting the details: {{ error }}</div>
  <div v-if="!editMode">
    <div v-if="post">
      <Banner :bannerImage="post.image1URL" :bannerText="post.name" :bannerButtonText="bannerButtonText" :bannerButtonLink="bannerButtonLink" />
      <div class="flex justify-center">
        <div class="detailsArticle relative text-gray-500 w-11/12 sm:w-3/5">
          <div>
            <div class="detailsImgContainer shadow-lg flex ">
              <img class="detailsImg2 md:mt-8 w-full object-cover rounded-md " :src="post.image2URL" alt="" />
            </div>
          </div>
          <div>
            <h2 class="mt-8 text-gray-600 text-4xl">{{ post.longName }}</h2>
            <div class="flex flex-row items-center  py-4">
              <StarRating :rating="post.rating" />
              <p class="ml-4 text-gray-500">Visited in {{ post.month }} {{ post.year }}</p>
            </div>
            <h3 class="text-2xl text-gray-700">{{ post.title }}</h3>
            <p class="mt-4">{{ post.description }}</p>
            <p class="mt-4">{{ post.wiki }}</p>
          </div>
          <div class="mt-5 flex items-center">
            <img class="rounded-full w-16 h-16" :src="post.authorPic" alt="" />
            <p class="ml-4 text-gray-500">{{ post.author }}</p>
          </div>

          <SingleMap :location="post.coords" />

          <button v-if="userIsLoggedIn" class="secondaryButton" @click="callEditPost(post)">EDIT POST</button>

          <router-link to="/home">
            <button class="primaryButton">&lt; BACK</button>
          </router-link>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="txt-xl text-center">Loading...</p>
      <Spinner />
    </div>
  </div>

  <div v-if="editMode">
    <Banner :bannerImage="post.image1URL" :bannerText="post.name" :bannerButtonText="bannerButtonText" :bannerButtonLink="bannerButtonLink" />
    <div class="formContainer flex justify-center flex-row items-center">
      <div class="max-w-screen-sm px-8">
        <h1 class="text-3xl">{{ post.longName }}</h1>
        <form @submit.prevent="handleEditSubmit">
          <p class="text-gray-900 mt-6">Edit the details</p>

          <label for="titleField">Enter a Title for the post*</label>
          <input required type="text" v-model="title" name="titleField" class="text-2xl  " />

          <label for="monthInput">Enter the date of your trip</label>
          <div class="dateContainer">
            <select required v-model="month" name="monthInput" id="monthField">
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="Oktober">Oktober</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
            <input required v-model="year" class="yearInput" type="number" placeholder="Enter the year" min="1900" max="2100" id="yearField" />
          </div>

          <label for="rating">Rate your trip </label>
          <select v-model="rating" name="rating" id="ratingField">
            <option value="0" disabled="disabled" selected="selected">Enter Rating</option>
            <option class="star" value="1">★</option>
            <option value="2">★★</option>
            <option value="3">★★★</option>
            <option value="4">★★★★</option>
            <option value="5">★★★★★</option>
          </select>

          <label for="descriptionField">Enter a description</label>
          <textarea v-model="description" id="descriptionField" name="descriptionField" rows="6" cols="80" placeholder=""></textarea>

          <label for="wikiField">Edit Wikipedia Information</label>
          <textarea id="wikiField" name="wikiField" rows="6" cols="80" v-model="wiki"></textarea>
          <p class="miniText">* = required</p>

          <div class="buttonContainer">
            <button class="primaryButton" id="submitButton" >SUBMIT</button>
          </div>
          <!-- <div>
          <p>{{ user }}</p>
        </div> -->
        </form>
          <button @click="cancelEdit" class="secondaryButton">CANCEL</button>
        <!-- <router-link :to="'/details/' + post._id">
        </router-link> -->
        <router-link to="/home">
          <button class="secondaryButton">DELETE POST</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-undef */

  import SingleMap from '@/components/SingleMap.vue';
  import getPost from '@/composables/getPost';
  import { useRoute } from 'vue-router';
  import Spinner from '@/components/Spinner.vue';
  import Banner from '@/components/Banner.vue';
  import StarRating from '@/components/StarRating.vue';
  export default {
    name: 'Details',
    components: {
      Banner,
      StarRating,
      Spinner,
      SingleMap,
    },
    props: ['id'],
    data() {
      return {
        bannerButtonText: 'back',
        bannerButtonLink: 'home',
        editMode: false,
      };
    },
    methods: {
      callEditPost(post) {
        this.editMode = true;
        this.title = post.title;
        this.description = post.description;
        this.rating = post.rating;
        this.month = post.month;
        this.year = post.year;
        this.wiki = post.wiki;
        //  console.log('calledit',post);
        //   const link = '/edit/' + post._id;
        // this.$router.push(link);
      },
      cancelEdit() {
        this.editMode =false
      },
      handleEditSubmit() {
        // alert('submit')
        const completeNewPost = {
          name: this.post.name,
          longName: this.post.longName,
          coords: this.post.coords,
          title: this.title,
          description: this.description,
          rating: this.rating,
          month: this.month,
          year: this.year,
          wiki: this.wiki,
          image1URL: this.post.image1URL,
          image2URL: this.post.image2URL,
          utcOffset: this.post.utcOffset,
          authorID: this.post.authorID,
          author: this.post.author,
          authorPic: this.post.authorPic,
        };
        //  alert(JSON.stringify(completeNewPost))
         const url ='https://aroundtheworld-blog-server.herokuapp.com/blogposts/'+this.post._id
        //  alert(url)
        fetch(url, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(completeNewPost),
        }).then((res) => {
          console.log(res);
          this.editMode = false
          this.$router.push({ name: 'Home'});
          //  this.$router.go(0)
          // location.reload();
          // this.$router.push({ name: 'Details', params: { id: this.post._id} });
        });
      }
    },
    setup() {
      const route = useRoute();
      const currentID = route.params.id;
      const { post, error, load } = getPost(currentID);
      load();
      return { post, error };
    },
    computed: {
      userIsLoggedIn() {
        return this.$store.getters.userIsLoggedIn;
      },
    },
  };
</script>

<style>
  .detailsImgContainer {
    height: 440px;
  }
</style>
