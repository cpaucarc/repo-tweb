<template>
  <span
    class="text-xs mr-1 font-semibold"
    :class="
      restante >= 0 ? 'text-zinc-600 dark:text-zinc-400' : 'text-rose-500'
    "
  >
    {{ restante }}/{{ limite }}
  </span>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    limite: {
      type: String,
      default: "250",
    },
    texto: String,
  },
  setup(props) {
    const restante = computed(() => {
      return parseInt(props.limite) - (props.texto ? props.texto.length : 0);
    });

    return { restante };
  },
};
</script>
