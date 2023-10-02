import { createRouter, createWebHistory } from 'vue-router'

// make all paths and names lowercase for consistency
const routes = [
  {
    path: '/login',
    name: 'login',
    props: true,
    component: () => import('../views/userlogin.vue'),
    meta: { requiresAuth: false}
  },
  {
    path: '/',
    name: 'dashboard',
    props: true,
    component: () => import('../components/homePage.vue'),
    meta: { requiresAuth: true}

  },
  {
    path: '/intakeform',
    name: 'intakeform',
    props: true,
    meta: { requiresAuth: true, role: 1 },
    component: () => import('../components/intakeForm.vue')
  },
  {
    path: '/findclient',
    name: 'findclient',
    meta: { requiresAuth: true, roles: [1, 2] },
    component: () => import('../components/findClient.vue')
  },
  {
    path: '/updateclient/:id',
    name: 'updateclient',
    meta: { requiresAuth: true, role: 1 },
    props: true,
    component: () => import('../components/updateClient.vue')
  },
  {
    path: '/addservice',
    name: 'addservice',
    meta: { requiresAuth: true, role: 1 },
    component: () => import('../components/addService.vue')
  },
  {
    path: '/editservice',
    name: 'editservice',
    meta: { requiresAuth: true, role: 1 },
    props: true,
    component: () => import('../components/editService.vue')
  },
  {
    path: '/eventform',
    name: 'eventform',
    meta: { requiresAuth: true, role: 1 },
    component: () => import('../components/eventForm.vue')
  },
  {
    path: '/findevents',
    name: 'findevents',
    meta: { requiresAuth: true, roles: [1, 2] },
    component: () => import('../components/findEvents.vue')
  },
  {
    path: '/eventdetails/:id',
    name: 'eventdetails',
    meta: { requiresAuth: true, role: 1 },
    props: true,
    component: () => import('../components/eventDetails.vue')
  },
  {
    path: '/findservices',
    name: 'findservices',
    meta: { requiresAuth: true, roles: [1, 2] },
    component: () => import('../components/findServices.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
