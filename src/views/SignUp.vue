<template>
  <div class="grid place-items-center w-2/5 mx-auto relative mb-20">
    <div class="space-y-8 mt-8 w-10/12">
      <PasosIconos />

      <LoginSeccionLogo :titulo="nombrePaso" />

      <Paso1 v-if="paso === 1" />
      <Paso2 v-if="paso === 2" />
      <Paso3 v-if="paso === 3" />

      <div class="flex justify-end">
        <button
          @click="paso = 2"
          class="bg-sky-800 text-white active:opacity-90 btn"
        >
          Siguiente
        </button>
      </div>

      <div class="absolute -right-56 top-0 border w-52 flex flex-col">
        <div class="text-sm bg-amber-200 text-amber-800 rounded p-4">
          {{ datos_basicos }}
        </div>
        <br />
        <div class="text-sm bg-amber-200 text-amber-800 rounded p-4">
          {{ datos_contacto }}
        </div>
        <br />
        <div class="text-sm bg-amber-200 text-amber-800 rounded p-4">
          {{ temas_interes }}
        </div>
      </div>
    </div>
    <div
      class="fixed bg-white bottom-0 w-full py-2 text-center text-sm text-slate-900"
    >
      ¿Ya tienes una cuenta?
      <router-link
        class="cursor-pointer text-sky-800 font-semibold"
        :to="{ name: 'Login' }"
      >
        Iniciar Sesión
      </router-link>
    </div>
  </div>
</template>
<script>
import { computed, provide, ref } from "vue";
import LoginSeccionLogo from "../components/Login/LoginSeccionLogo.vue";
import PasosIconos from "../components/Signup/PasosIconos.vue";
import Paso1 from "../components/Signup/Paso1.vue";
import Paso2 from "../components/Signup/Paso2.vue";
import Paso3 from "../components/Signup/Paso3.vue";
export default {
  name: "SignUp",
  components: {
    LoginSeccionLogo,
    PasosIconos,
    Paso1,
    Paso2,
    Paso3,
  },
  setup() {
    const paso = ref(1);
    const datos_basicos = ref({
      nombres: null,
      apellidos: null,
      escuela_id: 0,
      username: null,
      password: null,
    });
    const datos_contacto = ref({
      correo: null,
      telefono: null,
      linkedin: null,
    });
    const temas_interes = ref([]);

    const nombrePaso = computed(() => {
      return paso.value === 1
        ? "Datos Básicos"
        : paso.value === 2
        ? "Datos de Contacto"
        : "Temas de Interés";
    });

    provide("paso", paso);
    provide("datos_basicos", datos_basicos);
    provide("datos_contacto", datos_contacto);
    provide("temas_interes", temas_interes);

    return { paso, nombrePaso, datos_basicos, datos_contacto, temas_interes };
  },
};
</script>
