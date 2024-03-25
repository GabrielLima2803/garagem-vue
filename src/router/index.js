import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CorView from "../views/CorView.vue";
import CategoriaView from "../views/CategoriaView.vue";
import MarcaView from "../views/MarcaView.vue";
import AcessorioView from "../views/AcessorioView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cores",
      name: "cores",
      component: CorView,
    }, 
    {
      path: "/categorias",
      name: "categorias",
      component: CategoriaView,
    },
    {
      path: "/marcas",
      name: "marcas",
      component: MarcaView,
    },
    {
      path: "/acessorios",
      name: "acessorios",
      component: AcessorioView,
    }
  ],
});

export default router;
