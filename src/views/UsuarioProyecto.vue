<template>
  <div class="space-y-8">
    <div class="text-zinc-900 dark:text-zinc-600">
      <div class="flex flex-col md:flex-row gap-4 justify-between items-center">
        <DatosAutorMinimal :usuario="usuario" />
        <InputSearch @onEnter="onEnter" />
      </div>
    </div>

    <ListaProyectosUsuario :usuario="usuario" />
  </div>
</template>

<script>
import { provide, ref } from "vue";
import { useRoute } from "vue-router";
import InputSearch from "../components/Input/InputSearch.vue";
import DatosAutorMinimal from "../components/Proyecto/DatosAutorMinimal.vue";
import ListaProyectosUsuario from "../components/Proyecto/ListaProyectosUsuario.vue";

export default {
  name: "UsuarioProyecto",
  components: {
    InputSearch,
    DatosAutorMinimal,
    ListaProyectosUsuario,
  },
  setup() {
    const search = ref("");
    const route = useRoute();
    const usuario = route.params.username;

    console.log(route.params.username);

    provide("search", search);

    const onEnter = (value) => {
      search.value = value;
    };

    return { search, usuario, onEnter };
  },
};
</script>
