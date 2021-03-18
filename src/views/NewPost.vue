<template>
  <Banner :bannerImage="bannerImage" :bannerText="bannerText" :bannerButtonText="bannerButtonText" :bannerButtonLink="bannerButtonLink" />

  <!-- <p>Name: {{ user }}</p> -->

  <div class="formContainer ">
    <div class="max-w-screen-sm px-8">
      <form @submit.prevent="handleLocationSubmit">
        <label for="locationField" id="locationLabel">Step 1: Enter a Location*</label>
        <!-- <input ref="searchTextField" id="searchTextField" name="locationField" type="text" size="50"  autocomplete="on" /> -->
        <input id="searchTextField" ref="searchTextField" type="search" name="locationField" />
        <button>Submit Location</button>
      </form>
        <p>{{name}}</p>
      <hr />
      <form >
        <label for="titleField">lat</label>
        <input disabled v-model="lat" class="w-28" type="number" />
        <label for="titleField">lng</label>
        <input v-model="lng" type="number" class="w-28" />

        <label for="titleField">Enter a Title for the post*</label>
        <input required type="text" v-model="title" name="titleField" id="titleField" />

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
          <button class="primaryButton" id="submitButton" @click.prevent="handleSubmit">SUBMIT</button>
          <router-link to="/home">
            <button class="secondaryButton">CANCEL</button>
          </router-link>
          <button class="resetButton" onclick="resetInputForm()" type="button">reset form</button>
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

        name: 'Name',
        lat: 54,
        lng: 33,
        title: 'Title',
        description: 'blabla',
        rating: '4',
        month: 'May',
        year: '2018',
        wiki: 'wikifiki',
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
        alert('submit');
      },
      handleLocationSubmit(event) {
        // alert('location');
        console.log(this.$refs.searchTextField.value);
        this.name = this.$refs.searchTextField.value
      },

      initialize() {
        const options = {
          types: ['(regions)'],
        };
        const input = document.getElementById('searchTextField');
        const autocomplete = new google.maps.places.Autocomplete(input, options);
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
  #addPostForm {
    /* max-width: 600px; */
    color: #333;
    padding: 0 2rem;
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

  #searchTextField {
    font-size: 1.4rem;
    margin-top: 0;
  }

  #searchTextField:disabled {
    border: 0;
    padding-left: 0;
    font-size: 1.9rem;
    color: #111;
    font-weight: 800;
  }

  #titleField {
    font-size: 1.4rem;
  }
</style>
