import {createRouter, createWebHistory} from "vue-router";
import DashboardHeroes from "@/pages/DashboardHeroes.vue";
import DetailHeroes from "@/pages/DetailHeroes.vue";
import AllHeroes from "@/pages/AllHeroes.vue";

const routes = [
  {
    path: "/dashboard",
    component: DashboardHeroes
  },
  {
    path: "/heroes",
    component: AllHeroes
  },
  {
    path: "/heroes/:id",
    component: DetailHeroes
  },
  {
    path: "/",
    component: DashboardHeroes
  },

]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;
