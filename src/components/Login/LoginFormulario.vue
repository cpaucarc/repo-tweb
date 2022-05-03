<template>
  <div class="space-y-4">
    <div v-if="respuesta" class="w-3/4 mx-auto text-center">
      <p v-if="!respuesta.respuesta" class="text-rose-500 font-semibold">
        <span class="text-2xl">😥</span>
        {{ respuesta.mensaje }}
      </p>
      <p v-else>Welcome {{ respuesta.mensaje }}</p>
    </div>

    <form @submit.prevent="iniciarSesion" class="space-y-4">
      <InputForm>
        <InputLabel for="username">Usuario</InputLabel>
        <input
          id="username"
          type="text"
          maxlength="30"
          v-model="user.usuario"
          class="input-form"
          required
        />
      </InputForm>

      <InputForm>
        <InputLabel for="password">Contraseña</InputLabel>
        <input
          id="password"
          type="password"
          v-model="user.password"
          class="input-form"
          required
        />
      </InputForm>

      <button
        type="submit"
        class="bg-sky-800 hover:bg-sky-700 transition-eio-300 text-white px-3 py-2 font-medium text-sm rounded-md w-full flex justify-center disabled:cursor-not-allowed disabled:bg-opacity-80"
        :disabled="isLoading"
      >
        <LoadingState v-show="isLoading" texto="Iniciando Sesión..." />
        <span v-show="!isLoading">Iniciar Sesión</span>
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../../stores/useUser";
import InputBasic from "../Input/InputBasic.vue";
import InputForm from "../Input/InputForm.vue";
import InputLabel from "../Input/InputLabel.vue";
import useUsuario from "../../composables/useUsuario";
import LoadingState from "../Input/LoadingState.vue";

export default {
  name: "LoginFormulario",
  components: { InputBasic, InputForm, InputLabel, LoadingState },
  setup() {
    const respuesta = ref(null);
    const isLoading = ref(false);
    const user = reactive({
      usuario: "vicente7",
      password: "12345678",
    });
    const router = useRouter();
    const store = useUserStore();
    const { login } = useUsuario();

    const iniciarSesion = async () => {
      isLoading.value = true;
      respuesta.value = await login({ ...user });
      console.log(respuesta.value);
      if (respuesta.value.respuesta) {
        store.login(
          respuesta.value.mensaje.usuario,
          respuesta.value.mensaje.estudiante.apellidos +
            " " +
            respuesta.value.mensaje.estudiante.nombres,
          respuesta.value.mensaje.id,
          respuesta.value.mensaje.avatar
        );
        router.push({ name: "Home" });
      }
      isLoading.value = false;
    };

    return { respuesta, user, iniciarSesion, isLoading };
  },
};
</script>
