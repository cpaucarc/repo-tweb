<template>
  <div class="my-1 space-y-1">
    <label class="text-slate-600 text-sm" v-if="label.length" :for="id">
      {{ label }}
    </label>
    <select
      :id="id"
      v-model="valor"
      class="cursor-pointer input-form"
      @change="emitirValor"
    >
      <slot></slot>
    </select>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "InputBasic",
  props: {
    id: {
      type: String,
      default: Math.random().toString(36).slice(2),
    },
    label: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const valor = ref(0);

    const emitirValor = () => {
      emit("emitInput", valor.value);
    };

    return { valor, emitirValor };
  },
};
</script>
