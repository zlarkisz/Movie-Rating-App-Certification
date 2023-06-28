import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/:id",
    name: "movie",
    component: () => import("@/pages/MovieDetailPage.vue"),
    props: (route) => ({ id: Number(route.params.id) }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
