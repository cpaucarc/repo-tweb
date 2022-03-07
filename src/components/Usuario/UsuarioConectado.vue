<template>
  <Dropdown top="45">
    <template #trigger>
      <img
        class="foto-perfil"
        src="https://preview.redd.it/v0caqchbtn741.jpg?auto=webp&s=c5d05662a039c031f50032e22a7c77dfcf1bfddc"
        alt="Foto de perfil"
      />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
        <path
          fill-rule="evenodd"
          d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"
        />
      </svg>
    </template>
    <template #opciones>
      <ul>
        <li>
          <a class="dropdown-link" href="#">Cerrar Sesión</a>
        </li>
      </ul>
    </template>
  </Dropdown>
</template>

<script>
import { ref } from "vue";
import Dropdown from "../Dropdown.vue";
export default {
  name: "UsuarioConectado",
  components: { Dropdown },
  setup() {
    const verOpciones = ref(false);
    return { verOpciones };
  }
};
</script>

<style scoped>
.foto-perfil {
  border-radius: 999px;
  height: 35px;
  object-fit: cover;
  width: 35px;
}
.dropdown-link {
  text-decoration: none;
  padding: 5px 0;
}
</style>