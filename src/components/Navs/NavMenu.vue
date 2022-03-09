<template>
  <div class="nav-menu">
    <template v-for="(ruta, i) in rutas" :key="i">
      <NavMenuLink :href="ruta.ruta">
        <span class="material-icons">{{ ruta.icono }}</span>
        {{ ruta.nombre }}
      </NavMenuLink>
    </template>
  </div>
</template>

<script>
import { provide, ref } from "vue";
import UsuarioConectado from "../Usuario/UsuarioConectado.vue";
import NavMenuLink from "./NavMenuLink.vue";

const rutas = [
  // Definir mas rutas en el archivo router.js
  {
    nombre: "Inicio",
    icono: "home",
    ruta: "/",
  },
  {
    nombre: "Proyecto",
    icono: "task",
    ruta: "proyecto",
  },
  {
    nombre: "Acerca de",
    icono: "help",
    ruta: "about",
  },
];

export default {
  name: "NavigationMenu",
  components: { UsuarioConectado, NavMenuLink },
  setup() {
    const estaLogeado = ref(false);

    provide("estaLogeado", estaLogeado);

    return { estaLogeado, rutas };
  },
};
</script>

<style scoped>
.nav-menu {
  background-color: white;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0.5rem 0;
}
</style>
