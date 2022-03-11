<template>
  <div class="h-16 bg-white border-b border-gray-300 flex items-center">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center gap-x-2">
        <img
          class="h-8"
          src="https://www.shareicon.net/data/256x256/2016/07/08/117367_logo_512x512.png"
          alt=""
        />
        <p class="font-bold">Logo Original</p>
      </div>

      <div>
        <input type="text" placeholder="Buscar proyectos..." />
      </div>

      <div class="flex items-center gap-x-2">
        <PrimaryLink>
          <span class="material-icons"> add_circle_outline </span>
          Subir mi proyecto
        </PrimaryLink>
        <UsuarioConectado v-if="estaLogeado" />
        <PrimaryLink v-else @click="estaLogeado = true"
          >Iniciar Sesión</PrimaryLink
        >
      </div>
    </div>
  </div>
</template>

<script>
import { provide, ref } from "vue";
import UsuarioConectado from "../Usuario/UsuarioConectado.vue";
import PrimaryLink from "../Link/PrimaryLink.vue";

export default {
  name: "NavigationMenu",
  components: { UsuarioConectado, PrimaryLink },
  setup() {
    const estaLogeado = ref(false);

    provide("estaLogeado", estaLogeado);

    return { estaLogeado };
  },
};
</script>
