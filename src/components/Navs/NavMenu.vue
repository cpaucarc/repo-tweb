<template>
  <div class="w-full">
    <div class="flex justify-center">
      <NavMenuLink href="/">
        <HomeIcon class="h-6 w-6" />Comunidad
      </NavMenuLink>
      <NavMenuLink href="proyecto">
        <NewspaperIcon class="h-6 w-6" />Mis Proyectos
      </NavMenuLink>
      <NavMenuLink href="about">
        <StarIcon class="h-6 w-6" />Mis favoritos
      </NavMenuLink>
    </div>
  </div>
</template>

<script>
import NavMenuLink from "./NavMenuLink.vue";
import { HomeIcon, NewspaperIcon, StarIcon } from "@heroicons/vue/outline";

export default {
  name: "NavigationMenu",
  components: { NavMenuLink, HomeIcon, NewspaperIcon, StarIcon },
};
</script>
