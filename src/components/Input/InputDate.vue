<template>
  <input
    type="date"
    v-model="fecha"
    @change="emitirFecha"
    class="text-sm cursor-pointer py-1 text-slate-600 focus:text-slate-900 border border-slate-400 focus:border-sky-600 ring-2 focus:ring-2 ring-transparent focus:ring-sky-600/25 rounded-md transition ease-in-out duration-300"
  />
</template>

<script>
import { ref } from "vue";
import moment from "moment";
export default {
  name: "InputDate",
  setup(props, { emit }) {
    const fecha = ref(moment().format("YYYY-MM-DD"));

    console.log(fecha.value);

    const emitirFecha = () => {
      console.log("La fecha es " + fecha.value);
      emit("fechaCambiado", fecha.value);
    };

    return { fecha, emitirFecha };
  },
};
</script>
