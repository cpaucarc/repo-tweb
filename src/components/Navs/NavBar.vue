<template>
  <div class="h-16 flex items-center border-b bg-white">
    <div class="container mx-auto flex justify-between">
      <router-link :to="{ name: 'Home' }" class="flex items-center gap-x-2">
        <img
          class="h-10 flex-shrink-0"
          src="../../assets/repotweb.svg"
          alt="Logo RepoTWeb"
        />
      </router-link>

      <NavMenu v-if="user.isLogged" />

      <div class="flex items-center gap-x-3">
        <PrimaryLink v-if="user.isLogged" :href="{ name: 'CrearProyecto' }">
          <PlusIcon class="icon-5" />
          <span class="hidden md:block">Publicar</span>
        </PrimaryLink>

        <UsuarioConectado v-if="user.isLogged" />

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
import { useUserStore } from "../../stores/useUser";
import NavMenu from "./NavMenu.vue";

export default {
  name: "NavigationMenu",
  components: { UsuarioConectado, PrimaryLink, PlusIcon, NavMenu },
  setup() {
    const estaLogeado = ref(false);

    const store = useUserStore();
    const { user } = store;

    provide("estaLogeado", estaLogeado);

    return { estaLogeado, user };
  },
};
</script>
