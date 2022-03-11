<template>
  <div class="columnas-4">
    <div class="espacio">
      <Card p="2rem">
        <DatosAutor :autor="proyecto.autor" />

        <DatosProyecto
          :portadas="proyecto.portadas"
          :titulo="proyecto.titulo"
          :tags="proyecto.tags"
          :archivos="proyecto.archivos"
          :resumen="proyecto.resumen"
        />
      </Card>
    </div>

    <Card>
      <h3>Proyectos Similares</h3>
      <div class="flex-col">
        <template v-for="similar in proyecto.similares" :key="similar.id">
          <ProyectoRecomendado
            :id="similar.id"
            :portada="similar.portada"
            :titulo="similar.titulo"
          />
        </template>
      </div>
    </Card>
  </div>
</template>

<script>
import proyectoData from "../hooks/proyecto.json";
import DatosAutor from "../components/Proyecto/DatosAutor.vue";
import DatosProyecto from "../components/Proyecto/DatosProyecto.vue";
import Card from "../components/Card.vue";
import ProyectoRecomendado from "../components/Proyecto/ProyectoRecomendado.vue";

export default {
  name: "Proyecto",
  components: {
    DatosAutor,
    DatosProyecto,
    Card,
    ProyectoRecomendado,
  },
  setup() {
    const proyecto = proyectoData;
    return { proyecto };
  },
};
</script>

<style scoped>
.columnas-4 {
  align-items: flex-start;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
}
.flex-col {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.espacio {
  grid-column: span 3 / span 3;
}

.flex {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}
</style>
