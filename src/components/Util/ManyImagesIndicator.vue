<template>
  <div class="relative right-1 top-1 z-10" title="Hay más de 1 imagen">
    <div
      class="absolute w-8 h-[28px] -top-1 -right-1 border border-white bg-white/30 dark:border-zinc-200 dark:bg-zinc-400/30 backdrop-blur-sm rounded"
    ></div>
    <div
      class="w-8 h-[28px] grid place-items-center border border-white bg-white/30 dark:border-zinc-200 dark:bg-zinc-400/30 backdrop-blur-sm rounded"
    >
      <CameraIcon class="icon-5 text-white dark:text-zinc-200" />
    </div>
  </div>
</template>

<script>
import { CameraIcon } from "@heroicons/vue/outline";

export default {
  components: { CameraIcon },
};
</script>
