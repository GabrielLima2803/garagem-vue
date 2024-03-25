import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CorView from "../views/CorView.vue";


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
    }
  ],
});

export default router;
