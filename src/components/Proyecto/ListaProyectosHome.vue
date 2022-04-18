<template>
  <div>
    <div v-if="isLoading">
      <SkeletonHome />
    </div>
    <div v-else>
      <TransitionGroup
        v-if="cantidad"
        tag="div"
        name="lista"
        appear
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <template v-for="(proyecto, i) in proyectos" :key="proyecto.id">
          <CardProyecto
            :proyecto="proyecto"
            :class="larges.includes(i + 1) ? 'row-span-2' : ''"
            :large="cantidad >= 7 && larges.includes(i + 1)"
          />
        </template>
      </TransitionGroup>
      <EmptyState v-else />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import CardProyecto from "../CardProyecto.vue";
import SkeletonHome from "../Skeleton/SkeletonHome.vue";
import EmptyState from "../Util/EmptyState.vue";
const larges = [3, 4, 10, 11];
export default {
  components: { CardProyecto, SkeletonHome, EmptyState },
  props: { isLoading: Boolean, proyectos: Object },
  setup(props) {
    const cantidad = computed(() => props.proyectos.length);
    return { larges, cantidad };
  },
};
</script>

<style scoped>
.lista-enter-from {
  opacity: 0;
  transform: scale(0.6);
}

.lista-enter-active {
  transition: all 0.4s ease;
}

.lista-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
.lista-leave-active {
  transition: all 0.5s ease;
  /* position: absolute; */
}
.lista-move {
  transition: all 0.8s ease;
}
</style>
