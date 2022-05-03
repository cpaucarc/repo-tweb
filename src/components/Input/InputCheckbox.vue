<template>
  <label
    class="text-sm cursor-pointer transition-eio-300 inline-flex items-center gap-x-1 select-none"
    :class="clases"
  >
    <input
      type="checkbox"
      v-model="active"
      class="text-sky-600 dark:text-sky-500 bg-transparent mr-1 cursor-pointer focus:ring-0 rounded border border-zinc-400 dark:border-zinc-500 focus:border-sky-600 transition-eio-300"
    />
    {{ label }}
  </label>
</template>

<script>
import { computed } from "vue";

export default {
  name: "InputCheckbox",
  props: {
    label: {
      type: String,
      default: "",
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const clases = computed(() => {
      return props.active
        ? "text-zinc-900 dark:text-zinc-300 font-bold"
        : "text-zinc-400/80 font-normal";
    });
    return { clases };
  },
};
</script>
