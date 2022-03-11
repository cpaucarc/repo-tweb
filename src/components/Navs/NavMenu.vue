<template>
  <Card p="0">
    <div class="flex flex-col py-4">
      <NavMenuLink v-for="(ruta, i) in rutas" :key="i" :href="ruta.ruta">
        <span class="material-icons">{{ ruta.icono }}</span>
        {{ ruta.nombre }}
      </NavMenuLink>
    </div>
  </Card>
</template>

<script>
import NavMenuLink from "./NavMenuLink.vue";
import Card from "../Card.vue";

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
  components: { NavMenuLink, Card },
  setup() {
    return { rutas };
  },
};
</script>
