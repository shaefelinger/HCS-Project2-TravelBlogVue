<template>
  <div>
    <h2>Login</h2>
    <form v-on:submit="login">
      <input type="text" name="email" /><br />
      <input type="password" name="password" /><br />
      <input type="submit" value="Login" />
    </form>
    <p>s.haefelinger@gmx.de - x</p>
    <p>x@x.com - x</p>
    <p>test@test.com - test123</p>
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

        axios.defaults.withCredentials = true;
        // const tempURL = '';

        let login = () => {
          let data = {
            email: email,
            password: password,
          };
          axios
            .post('/auth/login', data)
            .then((response) => {
              console.log('Logged in from LOGIN');
              router.push('/');
            })
            .catch((errors) => {
              console.log('Cannot log in from LOGIN');
            });
        };
        login();
      },
    },
  };
</script>
