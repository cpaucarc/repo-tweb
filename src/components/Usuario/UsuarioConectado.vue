<template>
  <Dropdown>
    <template #trigger>
      <div class="inline-flex items-center">
        <img class="h-10 w-10 avatar" :src="user.avatar" alt="Foto de perfil" />
        <ChevronDownIcon class="icon-4 text-slate-900 ml-1" />
      </div>
    </template>
    <template #items>
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
import { LogoutIcon, UserIcon } from "@heroicons/vue/solid";
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
  },
  setup() {
    const verOpciones = ref(false);
    const store = useUserStore();

    const { user, logout } = store;

    return { verOpciones, user, logout };
  },
};
</script>
