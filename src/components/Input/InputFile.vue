<template>
  <div class="my-1 space-y-1">
    <label class="text-slate-600 text-sm" v-if="label.length" :for="id">{{
      label
    }}</label>

    <input
      :id="id"
      type="file"
      multiple
      @keyup="emitirEntrada"
      class="rounded-md cursor-pointer focus:outline-none file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-slate-50 file:text-slate-400 hover:file:bg-slate-100 w-full py-1.5 px-3 font-medium border placeholder-slate-400 border-slate-300 focus:border-slate-400 ring-2 focus:ring-2 ring-transparent focus:ring-slate-400/25 text-sm text-slate-600 focus:text-slate-900 transition ease-in-out duration-300"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "InputFile",
  props: {
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
      if (entrada.value.trim().length) emit("emitInput", entrada.value.trim());
    };

    // watch(entrada, (newValue) => {
    //   entrada.value = newValue.trim();
    // });

    return { entrada, emitirEntrada };
  },
};
</script>
