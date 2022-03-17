import { createRouter, createWebHistory } from "vue-router";
import About from "./views/About.vue";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Proyecto from "./views/Proyecto.vue";
import UsuarioProyecto from "./views/UsuarioProyecto.vue";
import Favoritos from "./views/Favoritos.vue";

const routes = [
  { path: "/about", name: "About", component: About },
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login },
  {
    path: "/:username/proyectos",
    name: "UsuarioProyecto",
    component: UsuarioProyecto,
  },
  {
    path: "/:username/proyectos/:proy_id",
    name: "Proyecto",
    component: Proyecto,
  },
  {
    path: "/:username/favoritos",
    name: "Favoritos",
    component: Favoritos,
  },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
