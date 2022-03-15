<template>
  <div class="w-full">
    <div class="flex justify-center">
      <NavMenuLink :href="{ name: 'Home' }">
        <HomeIcon class="h-6 w-6" />Comunidad
      </NavMenuLink>
      <NavMenuLink
        :href="{
          name: 'Proyecto',
          params: { username: 'Kkroto', proy_id: 159 },
        }"
      >
        <NewspaperIcon class="h-6 w-6" />Mis Proyectos
      </NavMenuLink>
      <NavMenuLink :href="{ name: 'About' }">
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
