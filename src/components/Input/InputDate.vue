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

    const emitirFecha = () => {
      emit("fechaCambiado", fecha.value);
    };

    return { fecha, emitirFecha };
  },
};
</script>
