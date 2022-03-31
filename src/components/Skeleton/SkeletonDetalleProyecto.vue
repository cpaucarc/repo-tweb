<template>
  <div class="w-full flex flex-col gap-y-4">
    <div class="w-full aspect-video rounded-md skeleton flex-shrink-0"></div>
    <div class="skeleton w-full h-14 rounded-md"></div>

    <div class="flex justify-between items-center w-full gap-y-2">
      <div class="skeleton w-48 h-6 rounded-md"></div>
      <div class="flex items-center gap-x-2">
        <div class="skeleton w-24 h-6 rounded-md" v-for="i in 3" :key="i"></div>
      </div>
    </div>

    <div class="skeleton bg-opacity-50 w-24 h-6 rounded-md"></div>

    <div class="skeleton bg-opacity-70 w-full h-48 rounded-md"></div>
  </div>
</template>

<script>
export default {
  name: "SkeletonDetalleProyecto",
};
</script>
