<template>
  <div class="relative">
    <!-- <div v-if="loading">Cargando...</div> -->
    <!-- <div v-else> -->
    <Filtros />
    <ListaProyectosHome />
    <!-- </div> -->

    <!-- <code class="text-xs">
      {{ loading ? "loading" : "not loading" }} | {{ proyectos }}
    </code> -->
  </div>
</template>

<script>
// import { defineAsyncComponent, onMounted, ref } from "vue";
import Filtros from "../components/Comunidad/Filtros.vue";
import ListaProyectosHome from "../components/Proyecto/ListaProyectosHome.vue";

export default {
  name: "Home",
  components: { Filtros, ListaProyectosHome },
};
</script>
