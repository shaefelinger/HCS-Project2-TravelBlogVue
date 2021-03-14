import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Map from '../views/Map.vue';
import Map2 from '../views/Map2.vue';
import Map3 from '../views/Map3.vue';
import Details from '../views/Details.vue';
import About from '../views/About.vue';
import NewPost from '../views/NewPost.vue';
import Check from '../views/Check.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },

  {
    path: '/map',
    name: 'Map',
    component: Map,
  },
  {
    path: '/map3',
    name: 'Map3',
    component: Map3,
  },
  {
    path: '/new',
    name: 'NewPost',
    component: NewPost,
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details,
    // props: true,
  },
  {
    path: '/check',
    name: 'Check',
    component: Check,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
