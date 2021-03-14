import { ref } from 'vue';

const getPosts = () => {
  const blogposts = ref([]);
  const error = ref(null);
  const url = 'https://aroundtheworld-blog-server.herokuapp.com/';

  const load = async () => {
    try {
      // simulate delay
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 2000);
      // });

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
