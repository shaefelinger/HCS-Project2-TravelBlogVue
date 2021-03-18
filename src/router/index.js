// import { createRouter, createWebHistory } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router'



import Home from '../views/Home.vue';
// import Map from '../views/Map.vue';
// import Map2 from '../views/Map2.vue';
// import Map3 from '../views/Map3.vue';
// import Map4 from '../views/Map4.vue';
import Details from '../views/Details.vue';
import About from '../views/About.vue';
import NewPost from '../views/NewPost.vue';
// import EditPost from '../views/EditPost.vue';
import Check from '../views/Check.vue';
import NotFound from '../views/NotFound.vue';
import SignIn from '../views/SignIn.vue';
import EditProfile from '../views/EditProfile.vue';

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

  // {
  //   path: '/map',
  //   name: 'Map',
  //   component: Map,
  // },
  // {
  //   path: '/map2',
  //   name: 'Map2',
  //   component: Map2,
  // },
  // {
  //   path: '/map3',
  //   name: 'Map3',
  //   component: Map3,
  // },
  // {
  //   path: '/map4',
  //   name: 'Map4',
  //   component: Map4,
  // },
  {
    path: '/new',
    name: 'NewPost',
    component: NewPost,
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details,
    props: true,
  },
  // {
  //   path: '/edit/:id',
  //   name: 'Edit',
  //   component: EditPost,
  //   props: true,
  // },
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
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/editprofile',
    name: 'EditProfile',
    component: EditProfile,
  },
  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
