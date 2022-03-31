<template>
  <div class="grid grid-cols-3 max-w-2xl mx-auto gap-8">
    <div class="col-span-2 overflow-hidden space-y-4">
      <div class="space-y-2">
        <h2 class="text-slate-900 text-lg font-bold">Datos Personales</h2>
        <div class="flex items-center gap-x-4">
          <InputForm>
            <InputLabel for="apellidos">Apellidos</InputLabel>
            <input
              id="apellidos"
              type="text"
              class="input-form"
              v-model="perfil.apellidos"
            />
          </InputForm>
          <InputForm>
            <InputLabel for="nombres">Nombres</InputLabel>
            <input
              id="nombres"
              type="text"
              class="input-form"
              v-model="perfil.nombres"
            />
          </InputForm>
        </div>
        <InputForm>
          <InputLabel for="escuela">Escuela</InputLabel>
          <select id="escuela" class="input-form" v-model="perfil.escuela_id">
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
            v-model="perfil.correo"
          />
        </InputForm>
        <InputForm>
          <InputLabel for="telefono">Telefono</InputLabel>
          <input
            id="telefono"
            type="text"
            class="input-form"
            v-model="perfil.telefono"
          />
        </InputForm>
        <InputForm>
          <InputLabel for="linkedin">Enlace a Linkedin</InputLabel>
          <input
            id="linkedin"
            type="text"
            class="input-form"
            v-model="perfil.linkedin"
          />
        </InputForm>
      </div>
    </div>

    <div class="space-y-6 mt-2">
      <div class="relative mx-auto h-32 w-32">
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
        <div class="flex justify-center flex-wrap gap-2">
          <TagItem
            v-for="tema in perfil.temas_interes"
            :key="tema.id"
            :tag="tema.tag"
            @remove="quitarTag(tema)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import datosPerfil from "../hooks/perfil.json";
import datosEscuelas from "../hooks/facultades.json";
import { PencilIcon } from "@heroicons/vue/outline";
import TagItem from "../components/Tag/TagItem.vue";
import InputForm from "../components/Input/InputForm.vue";
import InputLabel from "../components/Input/InputLabel.vue";
import { ref } from "vue";
export default {
  name: "Perfil",
  components: { PencilIcon, TagItem, InputForm, InputLabel },
  setup() {
    const perfil = ref({ ...datosPerfil });
    const avatar = ref(perfil.value.avatar);
    const escuelas = datosEscuelas;

    const cambiarFoto = (e) => {
      let file = e.target.files[0];
      if (file) {
        console.log(avatar.value);
        avatar.value = URL.createObjectURL(file);
        console.log(avatar.value);
      }
    };

    const quitarTag = (tema) => {
      console.log("Quitando ", tema);
    };

    return { perfil, avatar, escuelas, quitarTag, cambiarFoto };
  },
};
</script>
