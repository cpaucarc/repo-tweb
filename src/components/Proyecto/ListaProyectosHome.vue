<template>
  <div>
    <div v-if="isLoading">
      <SkeletonHome />
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <template v-for="(proyecto, i) in proyectos" :key="proyecto.id">
        <CardProyecto
          :proyecto="proyecto"
          :class="larges.includes(i + 1) ? 'row-span-2' : ''"
          :large="larges.includes(i + 1)"
        />
      </template>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import CardProyecto from "../CardProyecto.vue";
import useProyectosHome from "../../composables/useProyectosHome";
import SkeletonHome from "../Skeleton/SkeletonHome.vue";
export default {
  components: { CardProyecto, SkeletonHome },
  setup() {
    const larges = [3, 4, 10, 11];
    const { isLoading, proyectos, getProyectos } = useProyectosHome();

    onMounted(getProyectos);

    return { isLoading, proyectos, larges };
  },
};
</script>
