<template>
  <div class="space-y-8">
    <div class="text-zinc-900 dark:text-zinc-400">
      <div class="flex justify-between items-center">
        <p class="text-sm">
          Se encontraron {{ cantidad }} proyectos entre tus favoritos
        </p>
        <InputSearch @onEnter="onEnter" />
      </div>
    </div>

    <ListaProyectosFavoritos :usuario="user.username" :id="user.user_id" />
  </div>
</template>

<script>
import { provide, ref } from "vue";
import InputSearch from "../components/Input/InputSearch.vue";
import ListaProyectosFavoritos from "../components/Proyecto/ListaProyectosFavoritos.vue";
import { useUserStore } from "../stores/useUser";

export default {
  name: "Favoritos",
  components: {
    InputSearch,
    ListaProyectosFavoritos,
  },
  setup() {
    const cantidad = ref(0);
    const search = ref("");
    const { user } = useUserStore();

    provide("cantidad", cantidad);
    provide("search", search);

    const onEnter = (value) => {
      search.value = value;
    };

    return { search, onEnter, user, cantidad };
  },
};
</script>
