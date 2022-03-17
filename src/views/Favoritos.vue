<template>
  <div class="space-y-8">
    <div class="text-slate-900">
      <div class="flex justify-between items-center">
        <p class="text-sm">Haz agregado 6 proyectos a tus favoritos</p>
        <InputSearch @onEnter="onEnter" />
      </div>
    </div>

    <ListaProyectosFavoritos />
  </div>
</template>

<script>
import { ref } from "vue";
import InputSearch from "../components/Input/InputSearch.vue";
import ListaProyectosFavoritos from "../components/Proyecto/ListaProyectosFavoritos.vue";

export default {
  name: "Favoritos",
  components: {
    InputSearch,
    ListaProyectosFavoritos,
  },
  setup() {
    const search = ref("");

    const onEnter = (value) => {
      search.value = value;
    };

    return { search, onEnter };
  },
};
</script>
