<template>
  <button
    class="flex items-center px-1.5 select-none py-1 rounded-md text-sm font-medium transition-eio-300"
    :class="clases"
  >
    <slot></slot>
  </button>
</template>

<script>
import { computed } from "vue";

export default {
  name: "TertiaryButton",
  props: {
    color: { type: String, default: "slate" },
  },
  setup(props) {
    const clases = computed(() => {
      return `text-${props.color}-600 hover:text-${props.color}-900`;
    });

    return { clases };
  },
};
</script>
