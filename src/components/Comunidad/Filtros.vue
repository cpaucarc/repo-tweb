<template>
  <div class="relative h-full min-h-full">
    <AdjustmentsIcon
      @click="verFiltros = !verFiltros"
      class="h-6 w-6 cursor-pointer flex-shrink-0 absolute -top-8 text-slate-400 hover:text-slate-600 transition ease-in-out duration-300"
    />

    <transition name="filtros">
      <div
        v-show="verFiltros"
        class="absolute -top-44 left-0 sm:-left-20 lg:-left-28 p-8 w-4/5 lg:w-2/5 z-50 min-h-full bg-white shadow-2xl"
      >
        <XIcon
          @click="verFiltros = !verFiltros"
          class="h-6 w-6 absolute top-4 -right-8 cursor-pointer flex-shrink-0 text-white border border-transparent active:border-white rounded transition ease-in-out duration-300"
        />
        <div class="space-y-4">
          <h1 class="font-bold text-lg text-slate-800">Filtrar proyectos</h1>
          <FiltrosFechas />

          <FiltrosFacultad />
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div
        v-show="verFiltros"
        class="bg-slate-900/50 fixed top-0 left-0 w-full h-full z-40 backdrop-blur-xs"
      ></div>
    </transition>
  </div>
</template>

<script>
import { ref } from "vue";
import { AdjustmentsIcon, XIcon } from "@heroicons/vue/outline";
import FiltrosFacultad from "./FiltrosFacultad.vue";
import FiltrosFechas from "./FiltrosFechas.vue";
export default {
  name: "Filtros",
  components: {
    AdjustmentsIcon,
    FiltrosFacultad,
    FiltrosFechas,
    XIcon,
  },
  setup() {
    const verFiltros = ref(false);
    return { verFiltros };
  },
};
</script>

<style scoped>
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
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s ease-in-out;
}
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}
</style>
