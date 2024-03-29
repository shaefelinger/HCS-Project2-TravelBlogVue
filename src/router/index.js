import { createRouter, createWebHashHistory } from 'vue-router';
import store from '../store/index.js';

import Home from '../views/Home.vue';
import Details from '../views/Details.vue';
import About from '../views/About.vue';
import NewPost from '../views/NewPost.vue';
import NotFound404 from '../views/NotFound404.vue';
import SignIn from '../views/SignIn.vue';

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
    path: '/new',
    name: 'NewPost',
    component: NewPost,
    beforeEnter: guard,
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details,
    props: true,
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
  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound404',
    component: NotFound404,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

function guard(to, from, next) {
  console.log('guard');
  // const test = router.app.$store.getters.userIsLoggedIn;

  const user = store.getters.userIsLoggedIn;
  console.log(user);
  if (user) {
    // User is signed in
    console.log('user is logged in');
    next();
  } else {
    // User is signed out
    console.log('not logged in - not allowed');
    next('/');
  }
  next();
}

export default router;
