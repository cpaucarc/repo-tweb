<template>
  <div class="h-14 flex items-center">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center gap-x-2">
        <img
          class="h-10 flex-shrink-0"
          src="../../assets/repotweb.svg"
          alt="Logo RepoTWeb"
        />
      </div>

      <BuscadorGeneral />

      <div class="flex items-center gap-x-2">
        <PrimaryLink :href="{ name: 'CrearProyecto' }">
          <PlusIcon class="h-5 w-5" />
          <span class="hidden md:block">Subir mi proyecto</span>
        </PrimaryLink>
        <UsuarioConectado v-if="estaLogeado" />
        <PrimaryLink v-else :href="{ name: 'Login' }">
          Iniciar Sesión
        </PrimaryLink>
      </div>
    </div>
  </div>
</template>

<script>
import { provide, ref } from "vue";
import UsuarioConectado from "../Usuario/UsuarioConectado.vue";
import PrimaryLink from "../Link/PrimaryLink.vue";
import { PlusIcon } from "@heroicons/vue/solid";
import BuscadorGeneral from "../BuscadorGeneral.vue";

export default {
  name: "NavigationMenu",
  components: { UsuarioConectado, PrimaryLink, PlusIcon, BuscadorGeneral },
  setup() {
    const estaLogeado = ref(false);

    provide("estaLogeado", estaLogeado);

    return { estaLogeado };
  },
};
</script>
