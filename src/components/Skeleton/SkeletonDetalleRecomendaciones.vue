<template>
  <div class="w-full flex flex-col items-center gap-y-6">
    <div class="h-8 w-full rounded-md skeleton flex-shrink-0"></div>

    <div class="w-full flex flex-col items-center gap-y-4">
      <div
        class="skeleton w-full aspect-video rounded-md"
        :class="'bg-opacity-' + i"
        v-for="i in [100, 75, 50]"
        :key="i"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkeletonDetalleRecomendaciones",
};
</script>
