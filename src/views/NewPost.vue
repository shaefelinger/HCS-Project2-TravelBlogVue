<template>
  <Banner :bannerImage="bannerImage" :bannerText="bannerText" :bannerButtonText="bannerButtonText" :bannerButtonLink="bannerButtonLink" />
  New Post
  {{ status }}
  <p>Name: {{ user.name }}</p>
<!-- <Test /> -->
  <!-- <div>
        <form action="">
            <input required id="searchTextField" type="text" size="50" placeholder="Enter a location" autocomplete="on">
        </form>
    </div> -->
  <div class="formContainer">
    <form action="" id="addPostForm">
      <label for="locationField" id="locationLabel">Enter a Location*</label>
      <!-- <input ref="searchTextField" id="searchTextField" name="locationField" type="text" size="50"  autocomplete="on" /> -->
      <input ref="searchTextField" id="searchTextField" type="text" />
      <p ref="test"></p>

      <hr id="searchTextUnderline" class="hidden" />

      <label for="titleField">Enter a Title for the post*</label>
      <input required type="text" placeholder="" name="titleField" id="titleField" />

      <label for="monthInput">Enter the date of your trip</label>
      <div class="dateContainer">
        <select required name="monthInput" id="monthField">
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
        <input required class="yearInput" type="number" placeholder="Enter the year" value="2020" min="1900" max="2100" id="yearField" />
      </div>

      <label for="rating">Rate your trip </label>
      <select name="rating" id="ratingField">
        <option value="0" disabled="disabled" selected="selected">Enter Rating</option>
        <option class="star" value="1">★</option>
        <option value="2">★★</option>
        <option value="3">★★★</option>
        <option value="4">★★★★</option>
        <option value="5">★★★★★</option>
      </select>
      <label for="descriptionField">Enter a description</label>
      <textarea id="descriptionField" name="descriptionField" rows="6" cols="80" placeholder=""></textarea>

      <label for="wikiField">Edit Wikipedia Information</label>
      <textarea id="wikiField" name="wikiField" rows="6" cols="80" placeholder=""></textarea>
      <p class="miniText">* = required</p>

      <div class="buttonContainer">
        <button class="primaryButton" id="submitButton" type="button">SUBMIT</button>
        <button class="secondaryButton" onclick="gotoOverviewPage()" type="button">CANCEL</button>
        <button class="resetButton" onclick="resetInputForm()" type="button">reset form</button>
      </div>
    </form>
  </div>
</template>

<script>
  /* eslint-disable no-undef */
  // import { Loader } from '@googlemaps/js-api-loader';

  // import Test from '@/components/Test.vue'

  import Banner from '@/components/Banner.vue';
  import bannerImage from '@/assets/banner2.jpg';

  import axios from 'axios';
  import router from '../router';

  export default {
    name: 'NewPost',
    components: {
      Banner,
      // Test
    },
    data() {
      return {
        bannerImage,
        bannerText: 'Add new Post...',
        bannerButtonText: 'Back',
        bannerButtonLink: 'Home',

        status: 'unklar',
        user: {
          name: 'no user',
        },
      };
    },

    methods: {
      getUserData: function() {
        let self = this;
        axios
          .get('auth/user')
          .then((response) => {
            this.user = response.data.user;
            this.status = 'drin';
            self.$set(this, 'user', response.data.user);
          })
          .catch((errors) => {
            console.log(errors);
            this.status = 'nööö';
            router.push('/');
          });
      },
      
    },
    mounted() {
      // this.getUserData(); // check, if user is logged in
      // ==========================================================================

      // const input = this.$refs.searchTextField;

      // function initialize() {
      //   var options = {
      //     types: ['(regions)'],
      //   };
      //   var input = document.getElementById('searchTextField');
      //   var autocomplete = new google.maps.places.Autocomplete(input, options);
      // }
      // google.maps.event.addDomListener(window, 'load', initialize);

      // const loader = new Loader({
      //   apiKey: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
      //   version: 'weekly',
      //   libraries: ['places'],
      // });

   


      // function initialize() {
      //   var options = {
      //     types: ['(regions)'],
      //   };
      //   var input = document.getElementById('searchTextField');
      //   var autocomplete = new google.maps.places.Autocomplete(input, options);
      // }
      // google.maps.event.addDomListener(window, 'load', initialize);





      // loader.loadCallback((err) => {
      //   if (err) {
      //     console.log(err);
      //   } else {
      //     google.maps.event.addDomListener(window, 'load', () => {
      //       var options = {
      //         types: ['(regions)'],
      //       };
      //       var input = document.getElementById('searchTextField');
      //       console.log(input);
      //       var autocomplete = new google.maps.places.Autocomplete(input, options);
      //     });
      //   }
      // });
    },
  };
</script>

<style>
  #addPostForm {
    max-width: 600px;
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
