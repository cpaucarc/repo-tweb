<template>
  <InputSearch class="max-w-lg w-auto" @onEnter="onEnter" />
</template>

<script>
import { useBusquedaStore } from "../stores/busqueda";
import InputSearch from "./Input/InputSearch.vue";
export default {
  name: "BuscadorGeneral",
  components: { InputSearch },
  setup(props, { emit }) {
    const busqueda = useBusquedaStore();

    const onEnter = (value) => {
      busqueda.setSearch(value);
      emit("buscarProyectos");
    };

    return { onEnter };
  },
};
</script>
