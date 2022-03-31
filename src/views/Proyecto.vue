<template>
  <div v-if="isLoading">
    <SkeletonDetalle />
  </div>

  <div v-else class="grid grid-cols-5 gap-x-8 items-start">
    <DatosAutor :autor="proyecto.estudiante" />

    <div class="col-span-3">
      <DatosProyecto
        :portadas="proyecto.proyecto_imagen"
        :publicacion="proyecto.fecha_publicacion"
        :titulo="proyecto.titulo"
        :tags="proyecto.tag"
        :archivos="proyecto.proyecto_archivo"
        :resumen="proyecto.resumen"
      />
    </div>

    <div class="space-y-5">
      <h3 class="font-bold text-slate-400">Te pueden interesar</h3>
      <!-- <template v-for="similar in proyecto.similares" :key="similar.id">
        <ProyectoRecomendado :proyecto="similar" />
      </template> -->
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
// import proyectoData from "../hooks/proyecto.json";
import DatosAutor from "../components/Proyecto/DatosAutor.vue";
import DatosProyecto from "../components/Proyecto/DatosProyecto.vue";
import ProyectoRecomendado from "../components/Proyecto/ProyectoRecomendado.vue";
import useProyectosHome from "../composables/useProyectosHome";
import SkeletonDetalle from "../components/Skeleton/SkeletonDetalle.vue";

export default {
  name: "Proyecto",
  components: {
    DatosAutor,
    DatosProyecto,
    ProyectoRecomendado,
    SkeletonDetalle,
  },
  setup() {
    const router = useRoute();
    // const proyecto = proyectoData;
    const { proyecto, isLoading, getProyecto } = useProyectosHome();

    onMounted(getProyecto(router.params.proy_id));

    // console.log(router.params.proy_id);

    return { proyecto, isLoading };
  },
};
</script>
