<template>
  <div class="backdrop">
    <div @click="closeModal" class=" modal  w-96 p-8 m-10 rounded-xl shadow-2xl absolute z-50 bg-white right-16 border-2 border-gray-200  ">
      <h2>Login </h2>
      <form v-on:submit="login">
        <input type="text" name="email" /><br />
        <input type="password" name="password" /><br />
        <input type="submit" value="Login" />
      </form>
      <button @click="cancel" >cancel</button>
      <div class="text-gray-600 text-xs">
        <p>s.haefelinger@gmx.de - x</p>
        <p>x@x.com - x</p>
        <p>test@test.com - test123</p>
      </div>
      <p v-if="success">hurra</p>
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
        success: false
      }
    },
    methods: {
      closeModal() {
        this.$emit('closeModal');
      },
      redirect() {
        this.$router.push({ name: 'Home' })
      },
      login: (e) => {
        e.preventDefault();
        
        let email = e.target.elements.email.value;
        let password = e.target.elements.password.value;

        // axios.defaults.withCredentials = true;
        let login = () => {
          let data = {
            email: email,
            password: password,
          };
          axios
            .post('/auth/login', data)
            .then((response) => {
              console.log('Logged in from LOGIN', response);
              alert(response.data)
              // router.push('/');
            })
            .catch((errors) => {
              console.log('Cannot log in from LOGIN', errors);
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
