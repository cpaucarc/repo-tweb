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
      <SkeletonPerfilAvatar v-if="isLoadingAvatar" />
      <div class="relative mx-auto h-32 w-32" v-else>
        <img class="h-32 w-32 avatar" :src="avatar" alt="Foto de perfil" />
        <label
          for="imagen"
          class="btn-sky bottom-0 right-0 absolute rounded-full border-2 border-white w-10 h-10"
        >
          <PencilIcon class="icon-5" />
        </label>
      </div>

      <input
        id="imagen"
        class="hidden overflow-hidden"
        type="file"
        @change="cambiarFoto"
      />

      <div>
        <input
          type="text"
          class="text-sm w-full text-slate-600 p-0 focus:text-slate-900 focus:ring-0 border-0 text-center"
          v-model="perfil.usuario"
          required
        />
      </div>

      <div class="text-center space-y-2">
        <h3 class="font-semibold text-slate-900 text-lg">Temas de Interes</h3>
        <SkeletonPerfilTags v-if="isLoadingTags" />
        <div v-else class="flex justify-center flex-wrap gap-2">
          <TagItem
            v-for="tema in tags"
            :key="tema.id"
            :tag="tema.nombre"
            @remove="quitarTag(tema.nombre, tema.pivot.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
// import datosPerfil from "../hooks/perfil.json";
import datosEscuelas from "../hooks/facultades.json";
import { PencilIcon } from "@heroicons/vue/outline";
import TagItem from "../components/Tag/TagItem.vue";
import InputForm from "../components/Input/InputForm.vue";
import InputLabel from "../components/Input/InputLabel.vue";
import { useUserStore } from "../stores/useUser";
import useUsuario from "../composables/useUsuario";
import SkeletonPerfilAvatar from "../components/Skeleton/SkeletonPerfilAvatar.vue";
import SkeletonPerfilTags from "../components/Skeleton/SkeletonPerfilTags.vue";
import SkeletonPerfilDatos from "../components/Skeleton/SkeletonPerfilDatos.vue";
export default {
  name: "Perfil",
  components: {
    PencilIcon,
    TagItem,
    InputForm,
    InputLabel,
    SkeletonPerfilAvatar,
    SkeletonPerfilTags,
    SkeletonPerfilDatos,
  },
  setup() {
    // const perfil = ref({ ...datosPerfil });
    const isLoadingPerfil = ref(true);
    const perfil = ref([]);
    const isLoadingAvatar = ref(true);
    const avatar = ref([]);
    const isLoadingTags = ref(true);
    const tags = ref([]);
    const escuelas = datosEscuelas;
    const store = useUserStore();
    const { user } = store;
    const { obtenerDatosUsuario, obtenerTemasInteres, obtenerAvatar } =
      useUsuario();

    onMounted(async () => {
      let res1 = await obtenerDatosUsuario(user.user_id);
      let res2 = await obtenerTemasInteres(user.user_id);
      let res3 = await obtenerAvatar(user.user_id);
      if (res1.respuesta) {
        perfil.value = res1.mensaje;
        isLoadingPerfil.value = false;
      }
      if (res2.respuesta) {
        tags.value = res2.mensaje;
        isLoadingTags.value = false;
      }
      if (res3.respuesta) {
        avatar.value =
          res3.mensaje ??
          "https://i.pinimg.com/originals/49/0d/0e/490d0ecd903ffccff783652214c7d738.jpg";
        isLoadingAvatar.value = false;
      }
    });

    const cambiarFoto = (e) => {
      let file = e.target.files[0];
      if (file) {
        console.log(avatar.value);
        avatar.value = URL.createObjectURL(file);
        console.log(avatar.value);
      }
    };

    const quitarTag = (tema, id) => {
      console.log("Quitando ", tema, "con ID ", id);
    };

    return {
      perfil,
      isLoadingPerfil,
      tags,
      isLoadingTags,
      avatar,
      isLoadingAvatar,
      escuelas,
      quitarTag,
      cambiarFoto,
    };
  },
};
</script>
