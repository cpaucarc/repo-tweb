<template>
  <Dropdown>
    <template #trigger>
      <div class="inline-flex items-center">
        <img class="h-10 w-10 avatar" :src="user.avatar" alt="Foto de perfil" />
        <ChevronDownIcon class="icon-4 text-zinc-900 dark:text-zinc-400 ml-1" />
      </div>
    </template>
    <template #items>
      <!-- <button @click="cambiarTema" class="flex px-2 py-1.5 gap-x-1">
        <SunIcon class="icon-5" />
        Cambiar tema
      </button> -->
      <hr class="border border-zinc-200/50 dark:border-zinc-900/50" />
      <DropdownLink :to="{ name: 'Perfil' }">
        <UserIcon class="icon-5" />
        Mi Perfíl
      </DropdownLink>
      <DropdownLink @click="logout" to="#">
        <LogoutIcon class="icon-5" />
        Cerrar Sesión
      </DropdownLink>
    </template>
  </Dropdown>
</template>

<script>
import { ref } from "vue";
import { useUserStore } from "../../stores/useUser";
import { ChevronDownIcon } from "@heroicons/vue/outline";
import { LogoutIcon, UserIcon, SunIcon, MoonIcon } from "@heroicons/vue/solid";
import Dropdown from "../Util/Dropdown.vue";
import DropdownLink from "../Link/DropdownLink.vue";

export default {
  name: "UsuarioConectado",
  components: {
    Dropdown,
    ChevronDownIcon,
    LogoutIcon,
    UserIcon,
    DropdownLink,
    Dropdown,
    SunIcon,
    MoonIcon,
  },
  setup() {
    const verOpciones = ref(false);
    const store = useUserStore();

    const cambiarTema = () => {
      console.log("Cambiando tema");
      // setTheme("theme-light");
      document.documentElement.className = "theme-light";
    };

    const { user, logout } = store;

    return { verOpciones, user, cambiarTema, logout };
  },
};
</script>
