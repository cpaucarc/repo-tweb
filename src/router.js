import { createRouter, createWebHistory } from 'vue-router';
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Proyecto from "./views/Proyecto.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/proyecto", component: Proyecto },
];

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
});

export default router;