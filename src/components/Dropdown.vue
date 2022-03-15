<template>
  <div class="relative">
    <div
      class="inline-flex cursor-pointer items-center"
      @click="verOpciones = !verOpciones"
    >
      <slot name="trigger"></slot>
    </div>

    <div
      class="bg-white absolute shadow-xl border border-gray-300 text-sm rounded-md z-30 px-3 py-2 mt-1 right-0 w-48"
      v-show="verOpciones"
    >
      <slot name="opciones"></slot>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Dropdown",
  props: {
    top: {
      type: String,
      default: "25",
    },
  },
  setup() {
    const verOpciones = ref(false);

    return { verOpciones };
  },
};
</script>
