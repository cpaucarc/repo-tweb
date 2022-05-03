<template>
  <div class="my-1 space-y-1">
    <label class="text-zinc-600 text-sm" v-if="label.length" :for="id">{{
      label
    }}</label>

    <textarea
      :id="id"
      rows="3"
      :type="tipo"
      v-model="entrada"
      @keyup="emitirEntrada"
      class="input-form"
      :placeholder="placeholder"
    ></textarea>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "TextArea",
  props: {
    tipo: {
      type: String,
      default: "text",
    },
    id: {
      type: String,
      default: Math.random().toString(36).slice(2),
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const entrada = ref("");

    const emitirEntrada = () => {
      emit("emitInput", entrada.value.trim());
    };

    // watch(entrada, (newValue) => {
    //   entrada.value = newValue.trim();
    // });

    return { entrada, emitirEntrada };
  },
};
</script>
