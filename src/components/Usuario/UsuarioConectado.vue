<template>
  <div class="dropdown-usuario">
    <div class="trigger" @click="verOpciones = !verOpciones">
      <img
        class="foto-perfil"
        src="https://preview.redd.it/v0caqchbtn741.jpg?auto=webp&s=c5d05662a039c031f50032e22a7c77dfcf1bfddc"
        alt="Foto de perfil"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="16"
        height="16"
      >
        <path
          fill-rule="evenodd"
          d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"
        ></path>
      </svg>
    </div>

    <div class="opciones" v-show="verOpciones">
      <ul>
        <li><a href="#">Cerrar Sesión</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { ref } from "vue";
  export default {
    name: "UsuarioConectado",
    setup() {
      const verOpciones = ref(false);

      return { verOpciones };
    },
  };
</script>

<style>
  .trigger {
    align-items: center;
    column-gap: 0.25rem;
    cursor: pointer;
    display: flex;
  }
  .foto-perfil {
    border-radius: 999px;
    height: 35px;
    object-fit: cover;
    width: 35px;
  }

  .dropdown-usuario {
    position: relative;
  }

  .opciones {
    border: 1px solid black;
    position: absolute;
    top: 55px;
    width: 150px;
  }
</style>