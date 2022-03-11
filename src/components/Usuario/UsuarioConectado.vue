<template>
  <Dropdown top="45">
    <template #trigger>
      <img
        class="h-8 w-8 object-cover rounded-full"
        src="https://preview.redd.it/v0caqchbtn741.jpg?auto=webp&s=c5d05662a039c031f50032e22a7c77dfcf1bfddc"
        alt="Foto de perfil"
      />
      <span class="material-icons">expand_more</span>
    </template>
    <template #opciones>
      <ul class="text-sm">
        <li
          class="flex items-center gap-x-1 text-gray-600 hover:text-rose-600 transition"
          @click="estaLogeado = false"
        >
          <span class="material-icons">logout</span>
          <a class="dropdown-link" href="#">Cerrar Sesión</a>
        </li>
      </ul>
    </template>
  </Dropdown>
</template>

<script>
import { inject, ref } from "vue";
import Dropdown from "../Dropdown.vue";
export default {
  name: "UsuarioConectado",
  components: { Dropdown },
  setup() {
    const verOpciones = ref(false);

    const estaLogeado = inject("estaLogeado");

    return { estaLogeado, verOpciones };
  },
};
</script>

<style scoped>
.dropdown-link {
  text-decoration: none;
  padding: 5px 0;
}
</style>
