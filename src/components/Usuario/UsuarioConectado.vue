<template>
  <Dropdown top="45">
    <template #trigger>
      <img
        class="h-10 w-10 object-cover rounded-full"
        :src="user.avatar"
        alt="Foto de perfil"
      />
      <ChevronDownIcon class="h-4 w-4 text-slate-900 ml-1" />
    </template>
    <template #opciones>
      <ul class="text-sm space-y-1">
        <li
          class="bg-white hover:bg-slate-50 group cursor-pointer transition-eio-300 py-1"
        >
          <button
            class="flex items-center gap-x-2 text-gray-600 group-hover:text-slate-900 transition-eio-300"
          >
            <UserIcon class="h-5 w-5" />
            Mi Perfíl
          </button>
        </li>
        <li
          @click="logout"
          class="bg-white hover:bg-slate-50 group cursor-pointer transition-eio-300 py-1"
        >
          <button
            class="flex items-center gap-x-2 text-gray-600 group-hover:text-rose-600 transition-eio-300"
          >
            <LogoutIcon class="h-5 w-5" />
            Cerrar Sesión
          </button>
        </li>
      </ul>
    </template>
  </Dropdown>
</template>

<script>
import { ref } from "vue";
import { useUserStore } from "../../stores/useUser";
import Dropdown from "../Dropdown.vue";
import { ChevronDownIcon } from "@heroicons/vue/outline";
import { LogoutIcon, UserIcon } from "@heroicons/vue/solid";

export default {
  name: "UsuarioConectado",
  components: { Dropdown, ChevronDownIcon, LogoutIcon, UserIcon },
  setup() {
    const verOpciones = ref(false);
    const store = useUserStore();

    const { user, logout } = store;

    return { verOpciones, user, logout };
  },
};
</script>

<style scoped>
.dropdown-link {
  text-decoration: none;
  padding: 5px 0;
}
</style>
