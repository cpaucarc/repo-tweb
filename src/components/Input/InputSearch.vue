<template>
  <div class="relative">
    <label for="search" class="absolute mt-1 ml-2 text-slate-400">
      <SearchIcon class="h-5 w-5" />
    </label>
    <input
      class="pl-9 rounded-md py-1 px-3 border border-slate-300 focus:border-sky-400 ring-2 focus:ring-2 ring-transparent focus:ring-sky-400/25 text-sm text-slate-400 focus:text-slate-900 transition ease-in-out duration-300"
      id="search"
      placeholder="Buscar proyectos..."
      type="search"
      @keyup.enter="enviarTexto"
      v-model="search"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { SearchIcon } from "@heroicons/vue/outline";
export default {
  name: "InputSearch",
  components: { SearchIcon },
  setup(props, { emit }) {
    const search = ref("");

    const enviarTexto = () => {
      emit("onEnter", search.value);
    };

    return { search, enviarTexto };
  },
};
</script>
