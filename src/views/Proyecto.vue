<template>
  <div class="grid grid-cols-5 gap-x-8 items-start">
    <DatosAutor :autor="proyecto.autor" />

    <div class="col-span-3">
      <DatosProyecto
        :portadas="proyecto.portadas"
        :publicacion="proyecto.publicacion"
        :titulo="proyecto.titulo"
        :tags="proyecto.tags"
        :archivos="proyecto.archivos"
        :resumen="proyecto.resumen"
      />
    </div>

    <div class="space-y-5">
      <h3 class="font-bold text-slate-400">Te pueden interesar</h3>
      <template v-for="similar in proyecto.similares" :key="similar.id">
        <ProyectoRecomendado :proyecto="similar" />
      </template>
    </div>
  </div>
</template>

<script>
import proyectoData from "../hooks/proyecto.json";
import DatosAutor from "../components/Proyecto/DatosAutor.vue";
import DatosProyecto from "../components/Proyecto/DatosProyecto.vue";
import ProyectoRecomendado from "../components/Proyecto/ProyectoRecomendado.vue";

export default {
  name: "Proyecto",
  components: {
    DatosAutor,
    DatosProyecto,
    ProyectoRecomendado,
  },
  setup() {
    const proyecto = proyectoData;
    return { proyecto };
  },
};
</script>
