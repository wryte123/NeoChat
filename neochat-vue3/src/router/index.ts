import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("../views/HomeView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
