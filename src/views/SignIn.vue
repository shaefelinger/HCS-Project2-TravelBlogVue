<template>
  <Banner :bannerImage="bannerImage" :bannerText="bannerText" :bannerButtonText="bannerButtonText" :bannerButtonLink="bannerButtonLink" />
  <!-- <p>Current User: {{currentUser}} </p> -->

  <!-- <h1 class="mt-2 text-5xl text-center text-gray-500">coming soon...</h1>
  <div class="text-center text-gray-600">
    <h3 class="text-xl mt-6">Until then, use:</h3>
    <p>Login: testuser@test.com</p>
    <p>Password: test123</p>
  </div> -->
  <!-- <img class="w-96 m-auto mt-10" src="@/assets/underconstruction.jpg" alt="" /> -->
  <div class=" flex justify-center flex-row items-center ">
    <!-- <input type="file" @change="onFileChange" /> -->
    <!-- <div id="preview">
    <img v-if="url" :src="url" />
  </div> -->
    <form class="w-96" @submit.prevent="handleUserSignIn">
      <div class="flex items-end">
        <img class="w-20 h-20  mt-10 rounded-full object-contain" v-if="newUserProfilePic" :src="newUserProfilePic" alt="picPreview" />
        <div class="ml-4">
          <label>Upload Profile Image</label>
          <input @change="onFileChange" class="border-0 " type="file" />
        </div>
      </div>
      <label>Name</label>
      <input required v-model="newUserName" class="w-full" type="text" />
      <label>Email</label>
      <input required v-model="newUserEmail" class="w-full" type="email" />
      <label>Password</label>
      <input required v-model="newUserPassword" class="w-full " type="password" />
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
        bannerImage,
        bannerText: 'Sign In...',
        bannerButtonText: 'Back',
        bannerButtonLink: 'Home',

        url: null,

        newUserName: '',
        newUserEmail: '',
        newUserPassword: '',
        newUserProfilePic: 'https://aroundtheworld-blog-server.herokuapp.com/images/dummy.jpg',
      };
    },
    methods: {
      handleUserSignIn() {
        const newUser = {
          name: this.newUserName,
          email: this.newUserEmail,
          password: this.newUserPassword,
          profilePic: 'https://aroundtheworld-blog-server.herokuapp.com/images/dummy.jpg'

        }
        console.log(newUser);
        fetch('https://aroundtheworld-blog-server.herokuapp.com/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser),
        }).then((res) => {
          console.log(res);
          this.$router.push({ name: 'Home' });
        });

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
