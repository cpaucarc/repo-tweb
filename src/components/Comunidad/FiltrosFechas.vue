<template>
  <div class="space-y-2">
    <h2 class="font-semibold text-slate-600">Fecha de publicación</h2>
    <div class="grid grid-cols-2 gap-x-4 ml-4">
      <InputDate @fechaCambiado="recibirFechaInicial" />
      <InputDate @fechaCambiado="recibirFechaFinal" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import InputDate from "../Input/InputDate.vue";
export default {
  name: "FiltrosFechas",
  components: { InputDate },
  setup() {
    const fechaInicial = ref("");
    const fechaFinal = ref("");

    const recibirFechaInicial = (fecha) => {
      fechaInicial.value = fecha;
    };
    const recibirFechaFinal = (fecha) => {
      fechaFinal.value = fecha;
    };

    return { fechaInicial, fechaFinal, recibirFechaInicial, recibirFechaFinal };
  },
};
</script>
