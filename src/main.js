import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueGoogleMaps from '@fawmi/vue-google-maps';

import './main.css';

createApp(App)
  .use(store)
  .use(router)
  .use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyC6iru9XKYIvVQaPG6oK1sLFBXyeSJkwWs',
    },
  })
  .mount('#app');
