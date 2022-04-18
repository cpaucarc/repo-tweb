<template>
  <div class="relative flex items-center">
    <label for="search" class="absolute ml-2 text-slate-400">
      <SearchIcon class="icon-5" />
    </label>
    <input
      class="pl-9 input-form"
      id="search"
      placeholder="Buscar proyectos..."
      autocomplete="off"
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
