import { ref } from 'vue';

const getPosts = () => {
  const blogposts = ref([]);
  const error = ref(null);
  // const url = 'https://aroundtheworld-blog-server.herokuapp.com/';
  // const url = 'http://localhost:3000/';
  const url = process.env.VUE_APP_BACKENDURL;
  // const url = 'https://aroundtheworld-backend.apps.functionfactory.de/';
  // still experimenting
  console.log('backend:', url);

  const load = async () => {
    try {
      let data = await fetch(url + 'blogposts');
      if (!data.ok) {
        throw Error('no data available');
      }
      blogposts.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };
  return { blogposts, error, load };
};

export default getPosts;
