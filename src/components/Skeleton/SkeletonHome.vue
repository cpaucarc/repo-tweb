<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <SkeletonHomeProyecto />
    <SkeletonHomeProyecto />
    <SkeletonHomeProyecto />
    <SkeletonHomeProyecto />
    <SkeletonHomeProyecto />
    <SkeletonHomeProyecto />
  </div>
</template>

<script>
import SkeletonHomeProyecto from "./SkeletonHomeProyecto.vue";
export default {
  components: { SkeletonHomeProyecto },
};
</script>
