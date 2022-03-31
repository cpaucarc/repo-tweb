<template>
  <div class="grid grid-cols-5 gap-x-8 items-start">
    <SkeletonDetalleAutor />
    <div class="col-span-3">
      <SkeletonDetalleProyecto />
    </div>
    <SkeletonDetalleRecomendaciones />
  </div>
</template>

<script>
import SkeletonDetalleAutor from "./SkeletonDetalleAutor.vue";
import SkeletonDetalleProyecto from "./SkeletonDetalleProyecto.vue";
import SkeletonDetalleRecomendaciones from "./SkeletonDetalleRecomendaciones.vue";
export default {
  name: "SkeletonDetalle",
  components: {
    SkeletonDetalleAutor,
    SkeletonDetalleProyecto,
    SkeletonDetalleRecomendaciones,
  },
};
</script>
