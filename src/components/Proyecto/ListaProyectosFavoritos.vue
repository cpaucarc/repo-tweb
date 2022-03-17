<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
    <CardProyectoFavorito
      v-for="proyecto in proyectos"
      :key="proyecto.id"
      :proyecto="proyecto"
    />
  </div>
</template>

<script>
import proyectosFavoritos from "../../hooks/proyectos-favoritos.json";
import CardProyectoFavorito from "../Card/CardProyectoFavorito.vue";
export default {
  name: "ListaProyectosFavoritos",
  setup() {
    const proyectos = proyectosFavoritos;
    return { proyectos };
  },
  components: { CardProyectoFavorito },
};
</script>
