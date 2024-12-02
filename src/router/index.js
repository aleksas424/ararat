import { createRouter, createWebHistory } from 'vue-router';
import MenuApp from '../views/MenuApp.vue';
import WorkersApp from '../views/WorkersApp.vue';
 

const routes = [
  {
    path: '/menu',
    component: MenuApp,
  },
  {
    path: '/workers',
    component: WorkersApp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
