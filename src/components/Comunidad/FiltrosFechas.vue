<template>
  <div class="space-y-2">
    <h2 class="font-semibold text-slate-600">Fecha de publicación</h2>
    <div class="grid grid-cols-2 gap-x-4 ml-4">
      <InputDate :fechaDefault="inicio" @fechaCambiado="recibirFechaInicial" />
      <InputDate :fechaDefault="fin" @fechaCambiado="recibirFechaFinal" />
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import InputDate from "../Input/InputDate.vue";

export default {
  name: "FiltrosFechas",
  components: { InputDate },
  setup() {
    const inicio = inject("inicio");
    const fin = inject("fin");

    const recibirFechaInicial = (fecha) => {
      inicio.value = fecha;
    };
    const recibirFechaFinal = (fecha) => {
      fin.value = fecha;
    };

    return { inicio, fin, recibirFechaInicial, recibirFechaFinal };
  },
};
</script>
