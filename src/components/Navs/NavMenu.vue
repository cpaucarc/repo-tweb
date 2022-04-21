<template>
  <div class="flex justify-center gap-x-4">
    <NavMenuLink :href="{ name: 'Home' }">
      <HomeIcon class="h-6 w-6" />Comunidad
    </NavMenuLink>
    <NavMenuLink
      :href="{
        name: 'UsuarioProyecto',
        params: { username: user.username },
      }"
    >
      <NewspaperIcon class="h-6 w-6" />Mis Proyectos
    </NavMenuLink>
    <NavMenuLink
      :href="{ name: 'Favoritos', params: { username: user.username } }"
    >
      <HeartIcon class="h-6 w-6" />Mis favoritos
    </NavMenuLink>
  </div>
</template>

<script>
import NavMenuLink from "./NavMenuLink.vue";
import { HomeIcon, NewspaperIcon, HeartIcon } from "@heroicons/vue/outline";
import { useUserStore } from "../../stores/useUser";

export default {
  name: "NavigationMenu",
  components: { NavMenuLink, HomeIcon, NewspaperIcon, HeartIcon },
  setup() {
    const { user } = useUserStore();
    return { user };
  },
};
</script>
