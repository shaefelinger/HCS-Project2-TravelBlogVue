<template>
  <div class="backdrop">
    <div class=" modal  w-96 p-8 m-10 rounded-xl shadow-2xl absolute z-50 bg-white right-16 border-2 border-gray-200  ">
      <h2>Login</h2>
      <form v-on:submit="submitLogin">
        <input class="w-full" type="text" name="email" /><br />
        <input class="w-full" type="password" name="password" /><br />
        <p v-if="invalidLogin" class="text-red-600 text-sm ">Wrong Password or username - try again!</p>
        <button class="primaryButton">Log In</button>
        <div class="text-gray-600 text-xs text-center m-4">
          <!-- <p>s.haefelinger@gmx.de - x</p>
          <p>x@x.com - x</p> -->
          <!-- <p>test@test.com - test123</p>  -->
        </div>
      </form>
      <!-- <p class="text-center m-6">or</p> -->

      <button @click="signIn" class="secondaryButton">Sign In</button>
      <hr />
      <button @click="closeModal" class="mt-10">cancel</button>
    </div>
  </div>
</template>

<script>
  import router from '@/router';
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

        // axios.defaults.withCredentials = true;
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

<style scoped>
  /* .modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
  } */
  /* .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  } */
</style>
