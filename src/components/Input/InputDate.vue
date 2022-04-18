<template>
  <input type="date" v-model="fecha" @change="emitirFecha" class="input-form" />
</template>

<script>
import { ref } from "vue";
export default {
  name: "InputDate",
  props: { fechaDefault: String },
  setup(props, { emit }) {
    const fecha = ref(props.fechaDefault);

    const emitirFecha = () => {
      emit("fechaCambiado", fecha.value);
    };

    return { fecha, emitirFecha };
  },
};
</script>
