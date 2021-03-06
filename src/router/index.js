import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/lista-de-produtos",
    name: "list-products",
    component: () => import("../views/Products"),
  },
  {
    path: "/detalhes-produto/:id",
    name: "product-details",
    component: () => import("../views/ProductDetails"),
  },
  {
    path: "/sessao/:type",
    name: "session",
    component: () => import("../views/Session"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
