<template>
  <div class="grid grid-cols-5 gap-x-6 items-start">
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

    <div class="space-y-6">
      <h3 class="font-semibold text-slate-400">Te puede interesar</h3>
      <template v-for="similar in proyecto.similares" :key="similar.id">
        <ProyectoRecomendado
          :id="similar.id"
          :portada="similar.portada"
          :titulo="similar.titulo"
        />
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
