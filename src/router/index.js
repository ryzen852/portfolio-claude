import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeSection.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: () => import('@/views/AboutSection.vue') },
  { path: '/projects', name: 'Projects', component: () => import('@/views/ProjectsSection.vue') },
  { path: '/contact', name: 'Contact', component: () => import('@/views/ContactSection.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

export default router;
