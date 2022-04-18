<template>
  <div class="relative space-y-6">
    <div class="flex justify-between items-end">
      <BuscadorGeneral @buscarProyectos="buscar" />
      <Filtros @aplicarFiltros="buscar" />
    </div>
    <ListaProyectosHome :isLoading="isLoading" :proyectos="proyectos" />
  </div>
</template>

<script>
import { onMounted } from "vue";
import Filtros from "../components/Comunidad/Filtros.vue";
import ListaProyectosHome from "../components/Proyecto/ListaProyectosHome.vue";
import useProyectosHome from "../composables/useProyectosHome";
import { useUserStore } from "../stores/useUser";
import BuscadorGeneral from "../components/BuscadorGeneral.vue";

export default {
  name: "Home",
  components: { Filtros, ListaProyectosHome, BuscadorGeneral },
  setup() {
    const { isLoading, proyectos, getProyectos, searchProjects } =
      useProyectosHome();

    const { user } = useUserStore();

    onMounted(getProyectos(user.user_id));

    const buscar = async () => {
      await searchProjects();
    };

    return { isLoading, proyectos, buscar };
  },
};
</script>
