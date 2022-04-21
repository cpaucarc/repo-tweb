<template>
  <div class="grid grid-cols-5 gap-10 items-start">
    <SkeletonDetalleAutor v-if="isLoading" />
    <DatosAutor v-else :autor="proyecto.estudiante" />

    <div class="col-span-3">
      <SkeletonDetalleProyecto v-if="isLoading" />
      <DatosProyecto
        v-else
        :id="proyecto.id"
        :portadas="proyecto.portadas"
        :publicacion="proyecto.fecha_publicacion"
        :titulo="proyecto.titulo"
        :tags="proyecto.tags"
        :archivos="proyecto.proyecto_archivo"
        :resumen="proyecto.resumen"
        :reportes="proyecto.reportes"
      />
    </div>

    <SkeletonDetalleRecomendaciones v-if="isLoadingRecomendado" />
    <div v-else class="space-y-5">
      <h3 class="font-bold text-slate-400">Te pueden interesar</h3>
      <template v-for="recomendado in recomendados" :key="recomendado.id">
        <ProyectoRecomendado :proyecto="recomendado" />
      </template>
      <!-- {{ recomendados }} -->
    </div>
  </div>
</template>

<script>
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import DatosAutor from "../components/Proyecto/DatosAutor.vue";
import DatosProyecto from "../components/Proyecto/DatosProyecto.vue";
import ProyectoRecomendado from "../components/Proyecto/ProyectoRecomendado.vue";
import useProyectosHome from "../composables/useProyectosHome";
import useProyectoRecomendado from "../composables/useProyectoRecomendado";
import SkeletonDetalleAutor from "../components/Skeleton/SkeletonDetalleAutor.vue";
import SkeletonDetalleProyecto from "../components/Skeleton/SkeletonDetalleProyecto.vue";
import SkeletonDetalleRecomendaciones from "../components/Skeleton/SkeletonDetalleRecomendaciones.vue";

export default {
  name: "Proyecto",
  components: {
    DatosAutor,
    DatosProyecto,
    ProyectoRecomendado,
    SkeletonDetalleAutor,
    SkeletonDetalleProyecto,
    SkeletonDetalleRecomendaciones,
  },
  setup() {
    const router = useRoute();
    const { proyecto, isLoading, getProyecto } = useProyectosHome();
    const { isLoadingRecomendado, getRecomendados, recomendados } =
      useProyectoRecomendado();

    onMounted(() => {
      getProyecto(router.params.proy_id);
      getRecomendados(router.params.proy_id);
    });

    watch(router, (nuevo) => {
      if (typeof nuevo.params.proy_id !== "undefined") {
        isLoading.value = true;
        isLoadingRecomendado.value = true;
        getProyecto(nuevo.params.proy_id);
        getRecomendados(nuevo.params.proy_id);
      }
    });

    return { proyecto, isLoading, recomendados, isLoadingRecomendado };
  },
};
</script>
