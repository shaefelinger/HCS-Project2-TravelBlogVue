import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Map from '../views/Map.vue'
import BlogpostDetails from '../views/BlogpostDetails.vue'
import About from '../views/About.vue'
import NewPost from '../views/NewPost.vue'
import Login from '../views/Login.vue'
import NotFound from '../views/NotFound.vue'


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/map',
    name: 'Map',
    component: Map
  },
  {
    path: '/new',
    name: 'NewPost',
    component: NewPost
  },
  {
    path: '/blogposts/:id',
    name: 'BlogpostDetails',
    component: BlogpostDetails,
    props: true
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
   // catchall 404
   {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
