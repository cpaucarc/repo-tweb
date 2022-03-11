<template>
  <div class="grid grid-cols-3 gap-6">
    <template v-for="proyecto in proyectos" :key="proyecto.id">
      <CardProyecto :proyecto="proyecto" />
    </template>
  </div>
</template>

<script>
import CardProyecto from "../components/CardProyecto.vue";
import proyectosData from "../hooks/proyectos.json";

export default {
  name: "Home",
  components: { CardProyecto },
  setup() {
    const proyectos = proyectosData;

    return { proyectos };
  },
};
</script>
