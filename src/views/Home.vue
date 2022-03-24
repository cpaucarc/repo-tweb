<template>
  <div class="relative">
    <Filtros />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      <template v-for="(proyecto, i) in proyectos" :key="proyecto.id">
        <CardProyecto
          :proyecto="proyecto"
          :class="(i + 1) % 3 === 0 ? 'row-span-2' : ''"
        />
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
