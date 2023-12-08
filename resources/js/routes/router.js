import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Accueil.vue';
import Button from '../components/Button.vue'; 
import Contact from '../components/Contact.vue'; 
import APropos from '../components/A_Propos.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/button', component: Button },
  { path: '/contact', component: Contact },
  { path: '/a_propos', component: APropos },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
