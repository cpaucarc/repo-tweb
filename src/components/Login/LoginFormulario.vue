<template>
  <form @submit.prevent="iniciarSesion" class="space-y-4">
    <InputBasic
      id="username"
      label="Nombre de usuario"
      @emitInput="getUsername"
    />

    <InputBasic
      id="password"
      label="Contraseña"
      tipo="password"
      @emitInput="getPassword"
    />
    <button
      type="submit"
      class="bg-sky-800 text-white px-3 py-2 font-medium text-sm rounded-md w-full"
    >
      Iniciar Sesión
    </button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import InputBasic from "../Input/InputBasic.vue";
export default {
  name: "LoginFormulario",
  components: { InputBasic },
  setup() {
    const username = ref("");
    const password = ref("");
    const router = useRouter();

    const getUsername = (value) => {
      username.value = value;
      console.log("EL usuario es: " + username.value);
    };
    const getPassword = (value) => {
      password.value = value;
      console.log("EL password es: " + password.value);
    };
    const iniciarSesion = () => {
      router.push({ name: "Home" });
    };

    return { getUsername, getPassword, iniciarSesion };
  },
};
</script>
