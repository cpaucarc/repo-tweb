<template>
  <div class="relative right-1 top-1 z-10" title="Hay más de 1 imagen">
    <div
      class="absolute w-8 h-6 -top-1 -right-1 border border-white bg-white/30 backdrop-blur-sm rounded"
    ></div>
    <div
      class="w-8 h-6 grid place-items-center border border-white bg-white/30 backdrop-blur-sm rounded"
    >
      <CameraIcon class="icon-4 text-white" />
    </div>
  </div>
</template>

<script>
import { CameraIcon } from "@heroicons/vue/outline";

export default {
  components: { CameraIcon },
};
</script>
