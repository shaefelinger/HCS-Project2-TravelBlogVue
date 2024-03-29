<template>
  <Banner
    :bannerImage="bannerImage"
    :bannerText="bannerText"
    :bannerButtonText="bannerButtonText"
    :bannerButtonLink="bannerButtonLink"
  />

  <div class=" flex justify-center flex-row items-center ">
    <form
      ref="myForm"
      class="w-96"
      @submit.prevent="handleUserSignIn"
      enctype="multipart/form-data"
    >
      <div class="flex items-end">
        <img
          class="w-20 h-20  mt-10 rounded-full object-contain"
          v-if="newUserProfilePic"
          :src="newUserProfilePic"
          alt="picPreview"
        />
        <div class="ml-4">
          <label>Upload Profile Image</label>
          <input
            @change="onFileChange"
            class="border-0 "
            type="file"
            ref="file"
          />
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
import axios from 'axios';

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
      defaultProfilePic:
        process.env.VUE_APP_BACKENDURL + 'public/images/dummy.jpg',
      newUserProfilePic:
        process.env.VUE_APP_BACKENDURL + 'public/images/dummy.jpg',
      profilePicIsSelected: false,

      images: null,
    };
  },
  methods: {
    async handleUserSignIn() {
      const url = process.env.VUE_APP_BACKENDURL;

      const newUser = {
        name: this.newUserName,
        email: this.newUserEmail,
        password: this.newUserPassword,
        image: this.newUserProfilePic,
        profilePic: url + 'public/images/dummy.jpg',
      };

      const formData = new FormData();
      formData.append('image', this.images);

      const headers = { 'Content-Type': 'multipart/form-data' };

      try {
        if (this.images) {
          const uploadedProfilePic = await axios.post(
            url + 'upload/profilepic',
            formData,
            { headers }
          );
          newUser.profilePic =
            url + 'uploads/profilePics/' + uploadedProfilePic.data.filename;
        }

        console.log('new user', newUser);
        await this.$store.dispatch('register', newUser);
        this.$router.push({ name: 'Home' });
      } catch (err) {
        this.errors = err.response.data.errors;
      }
    },
    onFileChange(e) {
      const file = e.target.files[0];
      if (!file) {
        this.newUserProfilePic = this.defaultProfilePic;
        this.images = null;
        this.profilePicIsSelected = false;
      } else {
        this.images = this.$refs.file.files[0];
        this.newUserProfilePic = URL.createObjectURL(file);
        this.profilePicIsSelected = true;
        console.log('newUserProfilePic', this.newUserProfilePic);
      }
    },
  },
};
</script>
