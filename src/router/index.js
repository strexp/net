import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Prices from "../views/Prices.vue";
import Contact from "../views/Contact.vue";
import PeeringPolicy from "../views/PeeringPolicy.vue";

import IP from "../views/Services/IP.vue";
import Hosting from "../views/Services/Hosting.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/prices",
    name: "Prices",
    component: Prices,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/services/ip",
    name: "IP Services",
    component: IP,
  },
  {
    path: "/services/hosting",
    name: "Hosting Services",
    component: Hosting,
  },
  {
    path: "/peering-policy",
    name: "Peering Policy",
    component: PeeringPolicy,
  },
  {
    name: "404",
    path: "/404",
    component: () => import("@/views/404.vue"),
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
