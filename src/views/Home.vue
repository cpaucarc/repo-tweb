<template>
  <div class="relative">
    <div class="absolute -left-4 -mt-10">
      <AdjustmentsIcon
        @click="verFiltros = !verFiltros"
        v-if="!verFiltros"
        class="h-6 w-6 cursor-pointer flex-shrink-0 text-slate-400 hover:text-slate-600 transition ease-in-out duration-300"
      />
      <transition name="filtros">
        <div
          v-if="verFiltros"
          class="p-4 border z-50 bg-white rounded-md relative"
        >
          <div>
            <AdjustmentsIcon
              @click="verFiltros = !verFiltros"
              class="h-6 w-6 absolute -top-6 -right-6 cursor-pointer flex-shrink-0 text-slate-400 hover:text-rose-500 transition ease-in-out duration-300"
            />
            Filtros
          </div>
        </div>
      </transition>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <template v-for="proyecto in proyectos" :key="proyecto.id">
        <CardProyecto :proyecto="proyecto" />
      </template>
    </div>
  </div>
</template>

<script>
import CardProyecto from "../components/CardProyecto.vue";
import proyectosData from "../hooks/proyectos.json";
import { XCircleIcon, AdjustmentsIcon } from "@heroicons/vue/outline";
import { ref } from "vue";

export default {
  name: "Home",
  components: { CardProyecto, XCircleIcon, AdjustmentsIcon },
  setup() {
    const proyectos = proyectosData;
    const verFiltros = ref(false);

    return { proyectos, verFiltros };
  },
};
</script>

<style>
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
</style>
