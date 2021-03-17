<template>
  <div>
    <h2>Dashboard</h2>
    <p>Name: {{ user.name }}</p>
  </div>
</template>
<script>
  import axios from 'axios';
  import router from '../router';

  export default {
    name: 'Login',
    components: { Map },
    data() {
      return {
        user: {
          name: 'no user',
        },
      };
    },
    methods: {
      getUserData: function() {
        // let self = this;
        // const tempURL = 'https://aroundtheworld-blog-server.herokuapp.com';
        const tempURL = '';
        // axios.defaults.withCredentials = true;
        axios
          .get('/auth/user')
          .then((response) => {
            // console.log(this.user);
            // console.log(response.data.user);
            this.user = response.data.user;
            // console.log('success 😎');
            // self.$set(this, 'user', response.data.user);
          })
          .catch((errors) => {
            console.log(errors);
            // router.push('/');
          });
      },
    },
    mounted() {
      this.getUserData();
    },
  };
</script>
