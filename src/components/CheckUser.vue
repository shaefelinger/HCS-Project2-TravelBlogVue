<template>
  <div>
    {{ status }}
    <p>Name: {{ user.name }}</p>
  </div>
</template>

<script>
  import axios from 'axios';
  import router from '../router';

  export default {
    name: 'CheckUser',
    data() {
      return {
        status: 'unklar',
        user: {
          name: 'no user',
        },
      };
    },

    methods: {
      getUserData: function() {
        // let self = this;

        axios
          .get('auth/user')
          .then((response) => {
            this.user = response.data.user;
            this.status = 'Logged In';
            // self.$set(this, 'user', response.data.user);
          })
          .catch((errors) => {
            console.log(errors);
            this.status = 'Not Logged In';
            router.push('/');
          });
      },
    },
    mounted() {
      this.getUserData(); // check, if user is logged in
    },
  };
</script>

