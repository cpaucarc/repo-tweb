<template>
  <div class="absolute -left-4 -mt-10">
    <AdjustmentsIcon
      @click="verFiltros = !verFiltros"
      class="h-6 w-6 cursor-pointer flex-shrink-0 text-slate-400 hover:text-slate-600 transition ease-in-out duration-300"
    />
    <transition name="filtros">
      <div
        v-show="verFiltros"
        class="p-4 w-96 -top-8 border z-50 bg-white rounded-md relative shadow-lg"
      >
        <AdjustmentsIcon
          @click="verFiltros = !verFiltros"
          class="h-6 w-6 absolute -top-0 -right-8 cursor-pointer flex-shrink-0 text-slate-400 hover:text-rose-500 transition ease-in-out duration-300"
        />
        <div class="space-y-4">
          <h1 class="font-bold text-lg text-slate-900">Filtrar proyectos</h1>
          <FiltrosFechas />

          <FiltrosFacultad />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from "vue";
import { XCircleIcon, AdjustmentsIcon } from "@heroicons/vue/outline";
import FiltrosFacultad from "./FiltrosFacultad.vue";
import FiltrosFechas from "./FiltrosFechas.vue";
export default {
  name: "Filtros",
  components: {
    XCircleIcon,
    AdjustmentsIcon,
    FiltrosFacultad,
    FiltrosFechas,
  },
  setup() {
    const verFiltros = ref(false);
    return { verFiltros };
  },
};
</script>
