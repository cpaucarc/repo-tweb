<template>
  <div class="absolute -left-4 -mt-10">
    <AdjustmentsIcon
      @click="verFiltros = !verFiltros"
      class="h-6 w-6 cursor-pointer flex-shrink-0 text-slate-400 hover:text-slate-600 transition ease-in-out duration-300"
    />
    <transition name="filtros">
      <div
        v-show="verFiltros"
        class="p-4 w-96 -top-8 border z-50 bg-white rounded-md relative shadow-2xl"
      >
        <ChevronDoubleLeftIcon
          @click="verFiltros = !verFiltros"
          class="h-6 w-6 absolute top-2 right-2 cursor-pointer flex-shrink-0 text-slate-400 hover:text-rose-500 transition ease-in-out duration-300"
        />
        <div class="space-y-4">
          <h1 class="font-bold text-lg text-slate-900">Filtrar proyectos</h1>
          <FiltrosFechas />

          <FiltrosFacultad />
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div
        v-show="verFiltros"
        class="bg-slate-900/25 fixed top-0 left-0 w-full h-full z-40 backdrop-blur-xs"
      ></div>
    </transition>
  </div>
</template>

<script>
import { ref } from "vue";
import { AdjustmentsIcon, ChevronDoubleLeftIcon } from "@heroicons/vue/outline";
import FiltrosFacultad from "./FiltrosFacultad.vue";
import FiltrosFechas from "./FiltrosFechas.vue";
export default {
  name: "Filtros",
  components: {
    AdjustmentsIcon,
    FiltrosFacultad,
    FiltrosFechas,
    ChevronDoubleLeftIcon,
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
