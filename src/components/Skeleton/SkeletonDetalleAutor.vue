<template>
  <div class="w-full flex flex-col items-center gap-y-4">
    <div class="h-24 w-24 rounded-full skeleton flex-shrink-0"></div>
    <div class="skeleton w-3/4 h-12 rounded-md"></div>

    <div class="skeleton w-1/2 h-8 rounded-md"></div>

    <div class="flex items-center gap-x-3">
      <div class="h-14 w-14 skeleton rounded-full bg-opacity-50"></div>
      <div class="h-14 w-14 skeleton rounded-full bg-opacity-50"></div>
      <div class="h-14 w-14 skeleton rounded-full bg-opacity-50"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkeletonDetalleAutor",
};
</script>
