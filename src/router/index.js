import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/session/Login.vue'
import Register from '../views/registration/Register.vue'
import ToyDetails from '../views/ToyDetails.vue'  

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }, 
  {
    path: '/protected',
    name: 'protected',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Protected.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  { 
    path: '/toy',
    name: 'toy',
    component: () => import( /* webpackChunkName: "toy" */ '@/views/Toy.vue')
  },
  {
    path: '/toy/:id',
    name: 'toy-details',
    component: ToyDetails,
    props: true
  },
  {
    path: '/toy/:id/edit',
    name: 'update-toy',
    component: () => import( /* webpackChunkName: "toy" */ '@/views/UpdateToy.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
