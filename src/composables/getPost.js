import { ref } from 'vue';

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);
  const url = 'https://aroundtheworld-blog-server.herokuapp.com/';
  // const url = 'http://localhost:3000/';

  const load = async () => {
    try {
      // simulate delay
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 500);
      // });

      let data = await fetch(url + 'blogposts/' + id);
      // console.log('data im composable', data);
      if (!data.ok) {
        console.log('jetzt gibt es einen fehler...');
        throw Error('🚫that post does not exist');
      }
      post.value = await data.json();
      // console.log('post value', post.value);
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { post, error, load };
};

export default getPost;
