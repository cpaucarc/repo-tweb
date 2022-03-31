<template>
  <div class="w-full rounded-md overflow-hidden" :class="span">
    <div class="skeleton rounded-md w-full" :class="aspect"></div>
    <div class="flex items-center justify-between gap-x-2 mt-2">
      <div class="rounded-full skeleton w-12 h-12 flex-shrink-0"></div>
      <div class="flex flex-col w-full gap-y-1">
        <div class="skeleton rounded-md w-full h-8"></div>
        <div class="skeleton rounded-md w-24 h-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkeletonHomeProyecto",
  props: {
    aspect: { type: String, default: "aspect-video" },
    span: { type: String, default: "" },
  },
};
</script>
