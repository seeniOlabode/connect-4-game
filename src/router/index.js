import { createRouter, createWebHashHistory } from "vue-router";
import MenuView from "@/views/MenuView.vue";

const routes = [
  {
    path: "/",
    name: "menu",
    component: MenuView,
  },
  {
    path: "/rules",
    name: "rules",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RulesView"),
  },
  {
    path: "/game",
    name: "game",
    component: () => import("../views/IngameView"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
