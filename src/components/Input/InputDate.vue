<template>
  <input type="date" v-model="fecha" @change="emitirFecha" class="input-form" />
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
