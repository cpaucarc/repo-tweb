<template>
  <div class="my-1 space-y-1">
    <div class="flex items-center justify-between">
      <label class="text-slate-600 text-sm" v-if="label.length" :for="id">
        {{ label }}
      </label>
      <span class="text-xs text-slate-600 mr-1" v-if="limite !== '255'">
        {{ limit }}/{{ limite }}
      </span>
    </div>

    <input
      :id="id"
      :type="tipo"
      v-model="entrada"
      @input="emitirEntrada"
      class="input-form"
      :maxlength="limite"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "InputBasic",
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
    limite: {
      type: String,
      default: "255",
    },
    value: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const entrada = ref(props.value);
    const limit = ref(parseInt(props.limite));

    const emitirEntrada = () => {
      emit("emitInput", entrada.value.trim());
    };

    watch(entrada, () => {
      limit.value = parseInt(props.limite) - entrada.value.length;
    });

    return { entrada, emitirEntrada, limit };
  },
};
</script>
