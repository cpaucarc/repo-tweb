<template>
  <h1 class="text-primary">Inicio</h1>
  <div class="grid grid-cols-3">
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

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 1.5rem;
  row-gap: 2rem;
}
</style>