<template>
  <div class="w-full border-b">
    <div class="flex justify-center">
      <NavMenuLink :href="{ name: 'Home' }">
        <HomeIcon class="h-6 w-6" />Comunidad
      </NavMenuLink>
      <NavMenuLink
        v-if="user.isLogged"
        :href="{
          name: 'UsuarioProyecto',
          params: { username: user.username },
        }"
      >
        <NewspaperIcon class="h-6 w-6" />Mis Proyectos
      </NavMenuLink>
      <NavMenuLink
        v-if="user.isLogged"
        :href="{ name: 'Favoritos', params: { username: user.username } }"
      >
        <StarIcon class="h-6 w-6" />Mis favoritos
      </NavMenuLink>
    </div>
  </div>
</template>

<script>
import NavMenuLink from "./NavMenuLink.vue";
import { HomeIcon, NewspaperIcon, StarIcon } from "@heroicons/vue/outline";
import { useUserStore } from "../../stores/useUser";

export default {
  name: "NavigationMenu",
  components: { NavMenuLink, HomeIcon, NewspaperIcon, StarIcon },
  setup() {
    const { user } = useUserStore();
    return { user };
  },
};
</script>
