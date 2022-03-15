<template>
  <div class="space-y-4">
    <div class="text-slate-900">
      <div class="flex justify-between items-center">
        <DatosAutorMinimal />
        <InputSearch @onEnter="onEnter" />
      </div>
      <div class="flex justify-end items-center">
        <p>
          Buscado el termino <strong>{{ search }}</strong>
        </p>
      </div>
    </div>

    <ListaProyectosUsuario />
  </div>
</template>

<script>
import { ref } from "vue";
import { SearchIcon } from "@heroicons/vue/outline";
import InputSearch from "../components/Input/InputSearch.vue";
import DatosAutorMinimal from "../components/Proyecto/DatosAutorMinimal.vue";
import ListaProyectosUsuario from "../components/Proyecto/ListaProyectosUsuario.vue";

export default {
  name: "UsuarioProyecto",
  components: {
    SearchIcon,
    InputSearch,
    DatosAutorMinimal,
    ListaProyectosUsuario,
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
