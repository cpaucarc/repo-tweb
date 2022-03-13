<template>
  <div class="relative">
    <Filtros />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <template v-for="proyecto in proyectos" :key="proyecto.id">
        <CardProyecto :proyecto="proyecto" />
      </template>
    </div>
  </div>
</template>

<script>
import CardProyecto from "../components/CardProyecto.vue";
import proyectosData from "../hooks/proyectos.json";
import Filtros from "../components/Comunidad/Filtros.vue";

export default {
  name: "Home",
  components: { CardProyecto, Filtros },
  setup() {
    const proyectos = proyectosData;

    return { proyectos };
  },
};
</script>

<style>
.filtros-enter-from,
.filtros-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}

.filtros-enter-active {
  transition: all 0.5s ease-in-out;
}
.filtros-leave-active {
  transition: all 0.5s ease-in-out;
}
</style>
