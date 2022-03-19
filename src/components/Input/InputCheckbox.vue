<template>
  <label
    class="text-sm cursor-pointer transition ease-in-out duration-300"
    :class="clases"
  >
    <input
      type="checkbox"
      v-model="active"
      class="text-sky-600 mr-1 cursor-pointer rounded focus:outline-none focus:ring-0 border border-slate-400 focus:border-sky-600 transition ease-in-out duration-300"
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
        ? "text-slate-900 font-medium"
        : "text-slate-400 font-normal";
    });
    return { clases };
  },
};
</script>
