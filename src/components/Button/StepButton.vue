<template>
  <button
    class="flex-shrink-0 rounded-full grid place-items-center"
    :class="clases"
  >
    <slot></slot>
  </button>
</template>
<script>
import { computed } from "vue";

export default {
  name: "StepButton",
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const clases = computed(() => {
      return props.active
        ? "h-11 w-11 bg-sky-600 dark:bg-sky-500 text-white"
        : "h-10 w-10 bg-sky-100 dark:bg-zinc-700 text-sky-800 dark:text-zinc-400";
    });

    return { clases };
  },
};
</script>
