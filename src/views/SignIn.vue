<template>
  <Banner
    :bannerImage="bannerImage"
    :bannerText="bannerText"
    :bannerButtonText="bannerButtonText"
    :bannerButtonLink="bannerButtonLink"
  />

  <div class=" flex justify-center flex-row items-center ">
    <!-- <input type="file" @change="onFileChange" /> -->
    <!-- <div id="preview">
    <img v-if="url" :src="url" />
  </div> -->
    <form class="w-96" @submit.prevent="handleUserSignIn">
      <div class="flex items-end">
        <img
          class="w-20 h-20  mt-10 rounded-full object-contain"
          v-if="newUserProfilePic"
          :src="newUserProfilePic"
          alt="picPreview"
        />
        <div class="ml-4">
          <label>Upload Profile Image</label>
          <input @change="onFileChange" class="border-0 " type="file" />
        </div>
      </div>
      <label>Name</label>
      <input required v-model="newUserName" class="w-full pl-2" type="text" />
      <label>Email</label>
      <input required v-model="newUserEmail" class="w-full pl-2" type="email" />
      <label>Password</label>
      <input
        required
        v-model="newUserPassword"
        class="w-full pl-2"
        type="password"
      />
      <ul>
        <li
          v-for="(error, index) in errors"
          :key="index"
          class="text-red-600 text-sm pl-2"
        >
          {{ error }}
        </li>
      </ul>
      <button class="primaryButton">Sign In</button>
    </form>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import bannerImage from '@/assets/banner2.jpg';
export default {
  name: 'SignIn',
  components: {
    Banner,
  },
  data() {
    return {
      errors: null,
      bannerImage,
      bannerText: 'Sign In...',
      bannerButtonText: 'Back',
      bannerButtonLink: 'Home',

      url: null,

      newUserName: '',
      newUserEmail: '',
      newUserPassword: '',
      newUserProfilePic: process.env.VUE_APP_BACKENDURL + 'images/dummy.jpg',
      // newUserProfilePic:
      //   'https://aroundtheworld-blog-server.herokuapp.com/images/dummy.jpg',
    };
  },
  methods: {
    handleUserSignIn() {
      const url = process.env.VUE_APP_BACKENDURL;

      const newUser = {
        name: this.newUserName,
        email: this.newUserEmail,
        password: this.newUserPassword,
        profilePic: url + 'images/dummy.jpg',
      };

      this.$store
        .dispatch('register', newUser)
        .then(() => {
          this.$router.push({ name: 'Home' });
        })
        .catch((err) => {
          this.errors = err.response.data.errors;
          // this.errors = err.response;
        });
      // fetch('https://aroundtheworld-blog-server.herokuapp.com/users', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(newUser),
      // })
      //   .then((res) => {
      //     console.log(res);
      //     if (res.ok) {
      //       alert('Successfully created new user - now please log in');
      //       this.$router.push({ name: 'Home' });
      //     } else {
      //       alert('There was an error creating the new user');
      //     }
      //   })
      //   .catch((err) => {
      //     alert('There was an error creating the new user', err);
      //   });
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.newUserProfilePic = URL.createObjectURL(file);
    },
  },
  mounted() {
    console.log('/signin mounted');
  },
};
</script>
