import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Proyecto from "./views/Proyecto.vue";
import UsuarioProyecto from "./views/UsuarioProyecto.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
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
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
