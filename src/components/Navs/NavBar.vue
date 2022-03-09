<template>
  <div class="nav-bar">
    <div class="container navbar">
      <p>Logo</p>

      <div>
        <input type="text" placeholder="Buscar proyectos..." />
      </div>

      <div class="lista-rutas">
        <PrimaryLink>+ Subir mi proyecto</PrimaryLink>
        <UsuarioConectado v-if="estaLogeado" />
        <PrimaryLink v-else @click="estaLogeado = true"
          >Iniciar Sesión</PrimaryLink
        >
      </div>
    </div>
  </div>
</template>

<script>
import { provide, ref } from "vue";
import UsuarioConectado from "../Usuario/UsuarioConectado.vue";
import PrimaryLink from "../Link/PrimaryLink.vue";

export default {
  name: "NavigationMenu",
  components: { UsuarioConectado, PrimaryLink },
  setup() {
    const estaLogeado = ref(false);

    provide("estaLogeado", estaLogeado);

    return { estaLogeado };
  },
};
</script>

<style scoped>
.nav-bar {
  align-items: center;
  background-color: white;
  display: flex;
  height: 60px;
  width: 100%;
}
.navbar {
  align-items: center;
  background-color: white;
  display: flex;
  justify-content: space-between;
}
.lista-rutas {
  align-items: center;
  background-color: white;
  column-gap: 1.5rem;
  display: flex;
  padding: 0;
}
.nav-item {
  list-style-type: none;
}
.nav-link {
  background-color: white;
  color: #52525b;
  margin: auto;
  text-decoration: none;
}
.router-link-exact-active {
  color: var(--color-primary);
  font-weight: bold;
  text-decoration: none;
}
</style>
