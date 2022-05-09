<template>
  <div class="grid place-items-center w-2/5 mx-auto relative mb-20">
    <div class="space-y-8 mt-8 w-10/12">
      <PasosIconos v-if="paso > 0" />

      <h1
        class="font-extrabold text-xl text-zinc-900 dark:text-zinc-400 text-center"
      >
        {{ nombrePaso }}
      </h1>

      <Paso0 v-if="paso === 0" />
      <Paso1 v-if="paso === 1" />
      <Paso2 v-if="paso === 2" />
      <Paso3 v-if="paso === 3" />

      <div class="flex justify-between items-center">
        <span v-if="paso === 0" class="select-none text-transparent">
          Paso 0
        </span>
        <button v-if="paso !== 0" class="btn btn-ghost" @click="paso--">
          Anterior
        </button>
        <button v-if="paso > 0 && paso < 3" class="btn btn-sky" @click="paso++">
          Siguiente
        </button>
        <button v-if="paso === 3" class="btn btn-sky" @click="crearUsuario">
          Finalizar
        </button>
      </div>
    </div>

    <Modal :isOpen="isOpen" @closeModal="closeModal">
      <LoadingMessage v-show="isLoading" />
      <div v-show="!isLoading">
        <ErrorMessage
          v-if="!respuesta.respuesta"
          :titulo="respuesta.mensaje"
          :errores="respuesta.error"
        />
      </div>

      <button
        v-show="!isLoading"
        class="px-2 py-4 w-full text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300 font-bold transition-eio-300"
        @click="closeModal"
      >
        Aceptar
      </button>
    </Modal>

    <div
      class="fixed bg-white dark:bg-zinc-900 bottom-0 w-full py-2 text-center text-sm text-zinc-900 dark:text-zinc-400"
    >
      ¿Ya tienes una cuenta?
      <router-link
        class="cursor-pointer text-sky-800 hover:text-sky-700 dark:text-sky-700 dark:hover:text-sky-600 font-semibold"
        :to="{ name: 'Login' }"
      >
        Iniciar Sesión
      </router-link>
    </div>
  </div>
</template>

<script>
import { computed, provide, reactive, ref } from "vue";
import LoginSeccionLogo from "../components/Login/LoginSeccionLogo.vue";
import PasosIconos from "../components/Signup/PasosIconos.vue";
import Paso1 from "../components/Signup/Paso1.vue";
import Paso2 from "../components/Signup/Paso2.vue";
import Paso3 from "../components/Signup/Paso3.vue";
import useUsuario from "../composables/useUsuario";
import Modal from "../components/Util/Modal.vue";
import ErrorMessage from "../components/Validacion/ErrorMessage.vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/useUser";
import LoadingMessage from "../components/Validacion/LoadingMessage.vue";
import Paso0 from "../components/Signup/Paso0.vue";

const nombrePasos = [
  "¿Eres un estudiante de la Unasam?", //Paso 0
  "Datos Básicos", //Paso 1
  "Datos de Contacto", //Paso 2
  "Temas de Interés", //Paso 3
];

export default {
  name: "SignUp",
  components: {
    LoginSeccionLogo,
    PasosIconos,
    Paso0,
    Paso1,
    Paso2,
    Paso3,
    Modal,
    ErrorMessage,
    LoadingMessage,
  },
  setup() {
    const paso = ref(0);
    const isOpen = ref(false);
    const isLoading = ref(false);
    const datos = reactive({
      codigo: "",
      nombres: "",
      apellidos: "",
      escuela_id: 0,
      username: "",
      password: "",
      correo: null,
      telefono: null,
      linkedin: null,
      tags: [],
    });
    const router = useRouter();
    const store = useUserStore();
    const { respuesta, signup } = useUsuario();

    const nombrePaso = computed(() => {
      return nombrePasos[paso.value];
    });

    const closeModal = () => {
      isOpen.value = false;
    };

    const crearUsuario = async () => {
      isOpen.value = true;
      isLoading.value = true;
      await signup({ ...datos });

      if (respuesta.value.respuesta) {
        store.login(
          respuesta.value.mensaje.usuario,
          respuesta.value.mensaje.estudiante.apellidos +
            " " +
            respuesta.value.mensaje.estudiante.nombres,
          respuesta.value.mensaje.id,
          respuesta.value.mensaje.estudiante.avatar
        );
        router.push({ name: "Home" });
      }

      isLoading.value = false;
    };

    provide("paso", paso);
    provide("datos", datos);

    return {
      paso,
      nombrePaso,
      datos,
      crearUsuario,
      respuesta,
      isOpen,
      closeModal,
      isLoading,
    };
  },
};
</script>
