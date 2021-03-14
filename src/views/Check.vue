<template>
  <div>
    <h2>Dashboard</h2>

    <p>Name: {{ user.name }}</p>
    <Map :locations="locations" />
  </div>
</template>
<script>
  import axios from 'axios';
  import router from '../router';
  import Map from '@/components/Map.vue';

  export default {
    name: 'Login',
    components: { Map },
    data() {
      return {
        user: {
          name: 'no user',
        },
        locations: [
          {
    "name": "Hamburg",
    "longName": "Hamburg, Germany",
    "coords": { "lat": 53.5510846, "lng": 9.9936818 },
    "title": "The most beautiful city in the world",
    "description": "This is where i live...",
    "rating": "5",
    "month": "May",
    "year": "1997",
    "image1URL":
      "https://images.unsplash.com/photo-1473615695634-d284ec918736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80",
    "image2URL":
			"https://images.unsplash.com/photo-1598790969148-62630087609e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80",
    "wiki": "Hamburg is the second-largest city in Germany after Berlin and 7th largest city in the European Union with a population of over 1.84 million.One of Germany's 16 federated states, it is surrounded by Schleswig-Holstein to the north and Lower Saxony to the south. The city's metropolitan region is home to more than five million people. Hamburg lies on the River Elbe and two of its tributaries, the River Alster and the River Bille.",
    "utcOffset": 60,
    "authorID": "admin"
  },
  {
    "name": "Zürich",
    "longName": "Zürich, Swizerland",
    "coords": { "lat": 47.3768866, "lng": 8.541694 },
    "title": "Nice but very expensive...",
    "description": "",
    "rating": "3",
    "month": "May",
    "year": "2018",
    "image1URL":
      "https://images.unsplash.com/photo-1585586813880-257f9b38d25d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80",
    "image2URL":
			"https://images.unsplash.com/photo-1522100199172-e0d85a587108?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2225&q=80",
    "wiki": "Zürich is the largest city in Switzerland, and the capital of the canton of Zürich. It is located in north-central Switzerland, at the northwestern tip of Lake Zürich. As of January 2020, the municipality has 434,335 inhabitants, the urban area (agglomeration) 1.315 million (2009), and the Zürich metropolitan area 1.83 million (2011).",
    "utcOffset": 60,
    "authorID": "admin"
  }
        ],
      };
    },
    methods: {
      getUserData: function() {
        let self = this;
        // const tempURL = 'https://aroundtheworld-blog-server.herokuapp.com';
        const tempURL = '';
        axios.defaults.withCredentials = true;
        axios
          .get(tempURL + '/auth/user')
          .then((response) => {
            console.log(this.user);
            console.log(response.data.user);
            this.user = response.data.user;
            console.log('success 😎');
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
