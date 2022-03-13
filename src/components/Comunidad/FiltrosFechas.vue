<template>
  <div class="space-y-2">
    <h2 class="font-semibold text-slate-600">Año de publicación</h2>
    <div class="flex justify-between items-center gap-x-4">
      <InputDate />
      <InputDate />
    </div>
    {{ fechaInicial }} |
    {{ fechaFinal }}
  </div>
</template>

<script>
import { ref } from "vue";
import InputDate from "../Input/InputDate.vue";
export default {
  name: "FiltrosFechas",
  components: { InputDate },
  setup() {
    const fechaInicial = ref(new Date());
    const fechaFinal = ref(new Date());

    return { fechaInicial, fechaFinal };
  },
};
</script>
