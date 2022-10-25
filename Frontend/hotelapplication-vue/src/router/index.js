import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/RegisterHotel.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/registeredhotels',
    name: 'RegisteredHotels',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "RegisteredHotels" */ '../views/RegisteredHotels.vue')
  },
  {
    path: '/bookingregistration',
    name: 'BookingRegistration',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "BookingRegistration" */ '../views/BookingRegistration.vue')
  },
  {
    path: '/reservations',
    name: 'Reservations',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Reservations" */ '../views/Reservations.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
