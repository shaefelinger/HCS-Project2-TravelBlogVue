import { ref } from 'vue';

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const url = process.env.VUE_APP_BACKENDURL;

  const load = async () => {
    try {
      let data = await fetch(url + 'blogposts/' + id);
      if (!data.ok) {
        console.log('jetzt gibt es einen fehler...');
        throw Error('🚫cant load blogpost');
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { post, error, load };
};

export default getPost;
