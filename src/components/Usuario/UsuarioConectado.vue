<template>
  <Dropdown top="45">
    <template #trigger>
      <img
        class="foto-perfil"
        src="https://preview.redd.it/v0caqchbtn741.jpg?auto=webp&s=c5d05662a039c031f50032e22a7c77dfcf1bfddc"
        alt="Foto de perfil"
      />
      <span class="material-icons">expand_more</span>
    </template>
    <template #opciones>
      <ul>
        <li class="flex" @click="estaLogeado = false">
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

    const estaLogeado = inject('estaLogeado');

    return { estaLogeado, verOpciones };
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

.flex {
  display: flex;
  align-items: center;
  column-gap: 0.35rem;
}
</style>