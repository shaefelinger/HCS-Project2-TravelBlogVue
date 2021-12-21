<template>
  <div >
    <div class="   w-96 p-8 mt-10 rounded-xl shadow-2xl absolute z-50 bg-white sm:text-gray-800 right-4 sm:right-16 border-2 border-gray-200  ">
      <!-- <h2>Login</h2> -->
      <form v-on:submit="submitLogin">
        <label>Email</label>
        <input class="w-full pl-2" type="text" name="email" /><br />
        <label class="mt-0">Password</label>
        <input class="w-full pl-2" type="password" name="password" /><br />
        <p v-if="invalidLogin" class="text-red-600 text-sm pl-2">Wrong Password or username - try again!</p>
        <button class="primaryButton">Log In</button>
        <div class="text-gray-600 text-xs text-center m-4">
        </div>
      </form>

      <button @click="signIn" class="secondaryButton">Sign In</button>
      <hr class="border-1 mt-2 border-gray-500"/>
      <button @click="closeModal" class="mt-4 text-gray-600 border-gray-400" >cancel</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'Login',
    data() {
      return {
        invalidLogin: false
      };
    },
    methods: {
      closeModal() {
        this.$emit('closeModal');
      },
      goHome() {
        this.$router.push({ name: 'Home' });
      },
      signIn() {
        this.closeModal();
        this.$router.push({ name: 'SignIn' });
      },
      setUser(data) {
        this.$store.commit('setCurrentUser', data)
        this.$store.commit('setLoggedIn', true)
      },
      submitLogin(event) {
        event.preventDefault();
        this.invalidLogin = false

        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;

        const login = () => {
          const data = {
            email: email,
            password: password,
          };
          axios
            .post('/auth/login', data)
            .then((response) => {
              console.log('Logged in from LOGIN', response.data);
              this.closeModal()
              this.setUser(response.data)
              this.goHome()
            })
            .catch((errors) => {
              console.log('Cannot log in from LOGIN', errors);
              this.invalidLogin = true
            });
        };
        login();
      },
    },
  };
</script>