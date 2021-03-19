import { createRouter, createWebHashHistory } from 'vue-router'



import Home from '../views/Home.vue';
import Details from '../views/Details.vue';
import About from '../views/About.vue';
import NewPost from '../views/NewPost.vue';
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


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
