<template>
  <div class="grid grid-cols-3 max-w-2xl mx-auto gap-8">
    <div class="col-span-2 overflow-hidden space-y-4">
      <SkeletonPerfilDatos v-if="isLoadingPerfil" />
      <div v-else class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-slate-900 text-lg font-bold">Datos Personales</h2>
          <div class="flex items-center gap-x-4">
            <InputForm>
              <InputLabel for="apellidos">Apellidos</InputLabel>
              <input
                id="apellidos"
                type="text"
                class="input-form"
                v-model="perfil.estudiante.apellidos"
              />
            </InputForm>
            <InputForm>
              <InputLabel for="nombres">Nombres</InputLabel>
              <input
                id="nombres"
                type="text"
                class="input-form"
                v-model="perfil.estudiante.nombres"
              />
            </InputForm>
          </div>
          <InputForm>
            <InputLabel for="escuela">Escuela</InputLabel>
            <select
              id="escuela"
              class="input-form"
              v-model="perfil.estudiante.escuela_id"
            >
              <option
                v-for="escuela in escuelas"
                :key="escuela.id"
                :value="escuela.id"
              >
                {{ escuela.nombre }}
              </option>
            </select>
          </InputForm>
        </div>

        <div class="space-y-2">
          <h2 class="text-slate-900 text-lg font-bold">Datos de Contacto</h2>
          <InputForm>
            <InputLabel for="correo">Correo</InputLabel>
            <input
              id="correo"
              type="text"
              class="input-form"
              v-model="perfil.estudiante.correo"
            />
          </InputForm>
          <InputForm>
            <InputLabel for="telefono">Telefono</InputLabel>
            <input
              id="telefono"
              type="text"
              class="input-form"
              v-model="perfil.estudiante.telefono"
            />
          </InputForm>
          <InputForm>
            <InputLabel for="linkedin">Enlace a Linkedin</InputLabel>
            <input
              id="linkedin"
              type="text"
              class="input-form"
              v-model="perfil.estudiante.linkedin"
            />
          </InputForm>
        </div>
      </div>
    </div>

    <div class="space-y-6 mt-2">
      <PerfilAvatar />

      <div>
        <input
          type="text"
          class="text-sm w-full text-slate-600 p-0 focus:text-slate-900 focus:ring-0 border-0 text-center"
          v-model="perfil.usuario"
          required
        />
      </div>

      <PerfilTags />
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import datosEscuelas from "../hooks/facultades.json";
import InputForm from "../components/Input/InputForm.vue";
import InputLabel from "../components/Input/InputLabel.vue";
import { useUserStore } from "../stores/useUser";
import useUsuario from "../composables/useUsuario";
import SkeletonPerfilDatos from "../components/Skeleton/SkeletonPerfilDatos.vue";
import PerfilAvatar from "../components/Perfil/PerfilAvatar.vue";
import PerfilTags from "../components/Perfil/PerfilTags.vue";
export default {
  name: "Perfil",
  components: {
    InputForm,
    InputLabel,
    SkeletonPerfilDatos,
    PerfilAvatar,
    PerfilTags,
  },
  setup() {
    const isLoadingPerfil = ref(true);
    const perfil = ref([]);
    const escuelas = datosEscuelas;
    const store = useUserStore();
    const { user } = store;
    const { getDatosUsuario } = useUsuario();

    onMounted(async () => {
      let res1 = await getDatosUsuario(user.user_id);
      if (res1.respuesta) {
        perfil.value = res1.mensaje;
        isLoadingPerfil.value = false;
      }
    });

    return {
      perfil,
      isLoadingPerfil,
      escuelas,
    };
  },
};
</script>
