import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomePrincipal.vue';
import Ropa from '../components/RopaCategoria.vue';
import Calzado from '../components/CalzadoProducto.vue';
import Complementos from '../components/ComplementosProducto.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/ropa', component: Ropa },
  { path: '/calzado', component: Calzado },
  { path: '/complementos', component: Complementos },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
