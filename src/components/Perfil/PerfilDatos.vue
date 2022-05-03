<template>
  <div class="space-y-4">
    <SkeletonPerfilDatos v-if="isLoadingPerfil" />
    <div v-else class="space-y-5">
      <div class="space-y-3">
        <h2 class="text-zinc-900 text-lg font-bold">Datos Personales</h2>
        <div class="flex items-center gap-x-4">
          <InputForm>
            <InputLabel for="apellidos">Apellidos</InputLabel>
            <input
              id="apellidos"
              type="text"
              class="input-form"
              placeholder="Ninguno"
              :disabled="isSaving"
              v-model="perfil.apellidos"
            />
          </InputForm>
          <InputForm>
            <InputLabel for="nombres">Nombres</InputLabel>
            <input
              id="nombres"
              type="text"
              class="input-form"
              placeholder="Ninguno"
              :disabled="isSaving"
              v-model="perfil.nombres"
            />
          </InputForm>
        </div>
        <InputForm>
          <InputLabel for="escuela">Escuela</InputLabel>
          <select
            id="escuela"
            class="input-form"
            :disabled="isSaving"
            v-model="perfil.escuela_id"
          >
            <option
              v-for="escuela in escuelas"
              class="dark:text-zinc-400 dark:bg-zinc-800"
              :key="escuela.id"
              :value="escuela.id"
            >
              {{ escuela.nombre }} ({{ escuela.abrev }})
            </option>
          </select>
        </InputForm>
      </div>

      <div class="space-y-3">
        <h2 class="text-zinc-900 text-lg font-bold">Datos de Contacto</h2>
        <InputForm>
          <InputLabel for="correo">Correo</InputLabel>
          <input
            id="correo"
            type="text"
            class="input-form"
            placeholder="Ninguno"
            :disabled="isSaving"
            v-model="perfil.correo"
          />
        </InputForm>
        <InputForm>
          <InputLabel for="telefono">Telefono</InputLabel>
          <input
            id="telefono"
            type="text"
            maxlength="9"
            class="input-form"
            placeholder="Ninguno"
            :disabled="isSaving"
            v-model="perfil.telefono"
          />
        </InputForm>
        <InputForm>
          <InputLabel for="linkedin">Enlace a Linkedin</InputLabel>
          <input
            id="linkedin"
            type="text"
            class="input-form"
            placeholder="Ninguno"
            :disabled="isSaving"
            v-model="perfil.linkedin"
          />
        </InputForm>
      </div>

      <div class="flex justify-end">
        <PrimaryButton @click="actualizarDatos">
          <LoadingState v-show="isSaving" texto="Guardado" />
          <span v-show="!isSaving">Guadar información</span>
        </PrimaryButton>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import datosEscuelas from "../../hooks/facultades.json";
import SkeletonPerfilDatos from "../Skeleton/SkeletonPerfilDatos.vue";
import InputForm from "../Input/InputForm.vue";
import InputLabel from "../Input/InputLabel.vue";
import { useUserStore } from "../../stores/useUser";
import useUsuario from "../../composables/useUsuario";
import PrimaryButton from "../Button/PrimaryButton.vue";
import LoadingState from "../Input/LoadingState.vue";
export default {
  components: {
    SkeletonPerfilDatos,
    InputForm,
    InputLabel,
    PrimaryButton,
    LoadingState,
  },
  setup() {
    const isLoadingPerfil = ref(true);
    const isSaving = ref(false);
    const perfil = ref([]);
    const escuelas = datosEscuelas;
    const store = useUserStore();
    const { user } = store;
    const { getDatosUsuario, updateDatosUsuario } = useUsuario();

    onMounted(async () => {
      let res1 = await getDatosUsuario(user.user_id);
      if (res1.respuesta) {
        perfil.value = res1.mensaje;
        isLoadingPerfil.value = false;
      }
    });

    const actualizarDatos = async () => {
      isSaving.value = true;
      console.log("Actualizando...");
      let rsp = await updateDatosUsuario(user.user_id, perfil.value);
      console.log(rsp);
      isSaving.value = false;
    };

    return {
      perfil,
      isLoadingPerfil,
      isSaving,
      escuelas,
      actualizarDatos,
    };
  },
};
</script>
