<template>
  <!-- <div>
    {{ portadas }}
  </div> -->
  <div class="relative">
    <div class="absolute right-2 top-2 z-10 text-zinc-900">
      <ManyImagesIndicator v-if="portadas.length > 1" />
    </div>

    <div
      class="relative flex gap-4 snap-x snap-mandatory rounded-md overflow-x-auto pb-2"
    >
      <div
        class="snap-center w-full shrink-0"
        v-for="(portada, i) in portadas"
        :key="i"
      >
        <img
          class="shrink-0 w-full aspect-video object-cover rounded-md bg-white dark:bg-zinc-500"
          :src="portada.link_imagen"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ManyImagesIndicator from "./ManyImagesIndicator.vue";

export default {
  components: { ManyImagesIndicator },
  props: {
    portadas: Array,
  },
};
</script>
