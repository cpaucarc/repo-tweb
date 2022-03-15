<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
    <CardProyectoUsuario
      v-for="proyecto in proyectos"
      :key="proyecto.id"
      :proyecto="proyecto"
    />
  </div>
</template>

<script>
import proyectosUsuario from "../../hooks/proyectos-usuario.json";
import CardProyectoUsuario from "../Card/CardProyectoUsuario.vue";
export default {
  name: "ListaProyectosUsuario",
  setup() {
    const proyectos = proyectosUsuario;
    return { proyectos };
  },
  components: { CardProyectoUsuario },
};
</script>
