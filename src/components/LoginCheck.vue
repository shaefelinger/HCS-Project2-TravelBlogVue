<template>
  <div class="w-48">
    <h2>Login</h2>
    <form v-on:submit="login">
      <input class="h-6 py-6 px-3  my-2 w-full text-sm border-2 border-gray-200 rounded " type="text" name="email" /><br />
      <input class="h-6 py-6 px-3  my-2 w-full text-sm border-2 border-gray-200 rounded " type="password" name="password" /><br />
      <input class="h-6 py-6 px-3  my-2 w-full text-sm border-2 border-gray-200 rounded " type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
  import router from '../router';
  import axios from 'axios';
  export default {
    name: 'Login',
    methods: {
      login: (e) => {
        e.preventDefault();

        let email = e.target.elements.email.value;
        let password = e.target.elements.password.value;

        const tempURL = 'http://localhost:3000';

        // const tempURL = 'https://aroundtheworld-blog-server.herokuapp.com';
        let login = () => {
          let data = {
            email: email,
            password: password,
          };
          axios
            .post(tempURL + '/auth/login', data)
            .then((response) => {
              console.log('Logged in from LOGIN');
              // router.push('/dashboard');
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
