<template>
  <Banner :bannerImage="bannerImage" :bannerText="bannerText" :bannerButtonText="bannerButtonText" :bannerButtonLink="bannerButtonLink" />

  <!-- <p>Name: {{ user }}</p> -->

  <div class="formContainer ">
    <div class="max-w-screen-sm px-8">
      <form @submit.prevent="handleLocationSubmit">
        <p for="locationField" class="text-gray-900" :class="{ disableStyle: disableInput }">Step 1: Enter a Location from the List*</p>
        <!-- <input ref="searchTextField" id="searchTextField" name="locationField" type="text" size="50"  autocomplete="on" /> -->
        <!-- class="disabled:opacity-20" -->
        <input id="searchTextField" ref="searchTextField" type="search" name="locationField" class="text-2xl" :disabled="disableInput" />
        <button v-if="disableInput" class="resetButton w-20" onclick="resetInputForm()" type="button">X reset</button>

        <!-- <button>Submit Location</button> -->
      </form>
      <!-- <p>{{ name }}</p>
      <p>{{ longName }}</p> -->
      <!-- <p>{{ lat }} {{ lng }}</p> -->
      <!-- <p>{{ coords }}</p> -->
      <!-- <p>{{ image2URL }}</p> -->
      <hr />
      <form :class="{ disableStyle: !disableInput }">
        <p class="text-gray-900 mt-6">Step 2: Enter the details</p>

        <label for="titleField">Enter a Title for the post*</label>
        <input required type="text" v-model="title" name="titleField" class="text-2xl  " :disabled="!disableInput" />

        <label for="monthInput">Enter the date of your trip</label>
        <div class="dateContainer">
          <select required v-model="month" name="monthInput" id="monthField" :disabled="!disableInput">
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
          <input required v-model="year" class="yearInput" type="number" placeholder="Enter the year" min="1900" max="2100" id="yearField" :disabled="!disableInput" />
        </div>

        <label for="rating">Rate your trip </label>
        <select v-model="rating" name="rating" id="ratingField" :disabled="!disableInput">
          <option value="0" disabled="disabled" selected="selected">Enter Rating</option>
          <option class="star" value="1">★</option>
          <option value="2">★★</option>
          <option value="3">★★★</option>
          <option value="4">★★★★</option>
          <option value="5">★★★★★</option>
        </select>

        <label for="descriptionField">Enter a description</label>
        <textarea v-model="description" id="descriptionField" name="descriptionField" :disabled="!disableInput" rows="6" cols="80" placeholder=""></textarea>

        <label for="wikiField">Edit Wikipedia Information</label>
        <textarea id="wikiField" name="wikiField" rows="6" cols="80" v-model="wiki" :disabled="!disableInput"></textarea>
        <p class="miniText">* = required</p>

        <div class="buttonContainer">
          <button class="primaryButton" id="submitButton" @click.prevent="handleSubmit">SUBMIT</button>
          <router-link to="/home">
            <button class="secondaryButton">CANCEL</button>
          </router-link>
        </div>
        <div>
          <p>{{ user }}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-undef */

  import Banner from '@/components/Banner.vue';
  import bannerImage from '@/assets/banner2.jpg';
  // import getWiki from '@/utils/getWiki.js';

  // import axios from 'axios';
  // import router from '../router';

  export default {
    name: 'NewPost',
    components: {
      Banner,
    },
    data() {
      return {
        bannerImage,
        bannerText: 'Add new Post...',
        bannerButtonText: 'Back',
        bannerButtonLink: 'Home',

        user: {},

        currentPlace: {},
        disableInput: false,

        name: '',
        longName: '',
        coords: {},
        lat: 54,
        lng: 33,
        title: '',
        description: 'blabla',
        rating: '4',
        month: 'January',
        year: '2021',
        wiki: 'wikifiki',
        image1URL: 'img1',
        image2URL: '',
      };
    },

    methods: {
      userIsLoggedIn() {
        return this.$store.getters.userIsLoggedIn;
      },
      getCurrentUser() {
        return this.$store.getters.getCurrentUser;
      },
      handleSubmit() {
        //  alert('submit');
        const completeNewPost = {
          name: this.name,
          longName: this.longName,
          coords: this.coords,
          title: this.title,
          description: this.description,
          rating: this.rating,
          month: this.month,
          year: this.year,
          image1URL: this.image1URL,
          image2URL: this.image2URL,
          wiki: this.wiki,
          utcOffset: this.utcOffset,
          authorID: this.user._id,
          author: this.user.name,
          authorPic: this.user.profilePic,
        };
        //  alert(JSON.stringify(completeNewPost))
        fetch('https://aroundtheworld-blog-server.herokuapp.com/blogposts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(completeNewPost),
        }).then((res) => {
          console.log(res);
          this.$router.push({ name: 'Home' });
        });
      },
      //  handleLocationSubmit(event) {
      //    // alert('location');
      //    // console.log(this.$refs.searchTextField.value);
      //    // this.name = this.$refs.searchTextField.value;
      //  },

      locationIsValid() {
        console.log('valid');
        // console.log('current:', this.currentPlace);
        const newPlace = this.currentPlace;
        console.log(newPlace);
        this.name = newPlace.name;
        this.longName = newPlace.formatted_address;
        this.bannerText = this.longName;
        // FALLBACK IMAGES
        this.image1URL =
          'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1866&q=80';
        this.image2URL =
          'https://images.unsplash.com/photo-1517842264405-72bb906a1936?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80';

        if (newPlace.photos) {
          if (newPlace.photos[0]) {
            this.image1URL = newPlace.photos[0].getUrl();
          }
          if (newPlace.photos[1]) {
            this.image2URL = newPlace.photos[1].getUrl();
          }
        }
        this.bannerImage = this.image1URL;
        this.coords = newPlace.geometry.location.toJSON();
        this.disableInput = true;
        const name = newPlace.name;
        // let wiki = '';
        fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=1&exsentences=3&explaintext&origin=*&titles=${name}`)
          .then((response) => response.json())
          .then((data) => {
            const pageID = Object.keys(data.query.pages);
            let wiki = data.query.pages[pageID].extract;

            // check if wiki is correct
            if (pageID[0] == '-1') {
              wiki = '';
              console.error('wiki is empty');
            } else {
              wiki = data.query.pages[pageID].extract;
              if (wiki.length < 100) {
                wiki = '';
                console.error('no wiki answer');
              }
            }
            wiki = wiki.replaceAll(' (listen)', '');
            console.log('wikipost', wiki);
            this.wiki = wiki;
          });
      },

      initialize() {
        const options = {
          types: ['(regions)'],
          fields: ['geometry', 'photos', 'formatted_address', 'utc_offset_minutes', 'name', 'place_id'],
        };
        const input = document.getElementById('searchTextField');
        const autocomplete = new google.maps.places.Autocomplete(input, options);
        autocomplete.addListener('place_changed', () => {
          let place = autocomplete.getPlace();
          if (place.place_id) {
            // => this is a valid location, if place_id exist
            // console.log('complete Location');
            this.currentPlace = place;
            // getWiki(place.name);
            this.locationIsValid();
          } else {
            // -> inclomplete location
            alert('Please select a Location from the list');
          }
        });
      },
    },

    mounted() {
      const check = this.userIsLoggedIn();
      if (!check) {
        this.$router.push('/home');
      }
      this.user = this.getCurrentUser();

      this.initialize();
      google.maps.event.addDomListener(window, 'load', this.initialize);
    },
  };
</script>

<style>
  .disableStyle {
    opacity: 0.3;
    /* color: red; */
  }
  #addPostForm {
    /* max-width: 600px; */
    /* color: #333; */
    /* padding: 0 2rem; */
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus,
  a:focus {
    outline: none;
    box-shadow: 0 0 0px 1px #777;
  }

  input,
  select,
  textarea,
  button {
    border-radius: 5px;
    border: black solid 1px;
  }

  input,
  select {
    height: 50px;
  }

  input {
    display: block;
  }

  .dateContainer * {
    display: inline;
  }

  .formContainer {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }

  .formContainer input,
  .formContainer textarea {
    width: 100%;
  }

  #ratingField {
    color: #777;
  }

  label {
    color: #777;
    margin: 0;
    display: block;
    margin-top: 1rem;
    font-size: 0.8rem;
  }

  .miniText {
    font-size: 0.6rem;
  }

  textarea {
    resize: none;
  }

  #monthField,
  #yearField {
    width: 7rem;
    margin-top: 0;
  }

  /* #searchTextField {
    font-size: 1.4rem;
    margin-top: 0;
  } */

  #searchTextField:disabled {
    border: 0;
    padding-left: 0;
    font-size: 1.9rem;
    color: #111;
    font-weight: 700;
  }

  /* #titleField {
    font-size: 1.4rem;
  } */
</style>
