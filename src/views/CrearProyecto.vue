<template>
  <div class="w-1/2 mx-auto space-y-6">
    <InputForm>
      <div class="flex items-center justify-between">
        <InputLabel for="titulo">Título del proyecto</InputLabel>
        <InputLabelSize limite="250" :texto="proyecto.titulo" />
      </div>
      <input
        id="titulo"
        type="text"
        maxlength="250"
        v-model="proyecto.titulo"
        class="input-form"
      />
    </InputForm>

    <InputForm>
      <InputLabel for="resumen">Resumen del proyecto</InputLabel>
      <textarea
        id="resumen"
        rows="3"
        v-model="proyecto.resumen"
        class="input-form"
      ></textarea>
    </InputForm>

    <InputForm>
      <InputLabel for="tags">
        Palabras claves del proyecto
        <span class="text-slate-400 ml-1">*(separados por coma)</span>
      </InputLabel>
      <InputTags
        id="tags"
        @tags="obtenerTags"
        placeholder="Ancash,Mineria,IA"
      />
    </InputForm>

    <InputForm>
      <InputLabel for="portada">Imagenes de portada</InputLabel>
      <InputFileImage id="portada" @getImages="obtenerImagenes" />
    </InputForm>

    <InputForm>
      <InputLabel for="archivos">Archivos adjuntos</InputLabel>
      <InputFile id="archivos" @getFiles="obtenerArchivos" />
    </InputForm>

    <div class="flex justify-center">
      <PrimaryButton @click="saluda">
        <DocumentTextIcon class="icon-5" />
        Subir proyecto
      </PrimaryButton>
    </div>

    <div class="text-amber-800 text-xs bg-amber-200 rounded-md p-3">
      <code>
        {{ proyecto }}
      </code>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import InputTags from "../components/Input/InputTags.vue";
import InputFile from "../components/Input/InputFile.vue";
import InputFileImage from "../components/Input/InputFileImage.vue";
import PrimaryButton from "../components/Button/PrimaryButton.vue";
import { DocumentTextIcon } from "@heroicons/vue/outline";
import InputLabel from "../components/Input/InputLabel.vue";
import InputLabelSize from "../components/Input/InputLabelSize.vue";
import InputForm from "../components/Input/InputForm.vue";
export default {
  components: {
    InputTags,
    InputFile,
    PrimaryButton,
    DocumentTextIcon,
    InputFileImage,
    InputLabel,
    InputLabelSize,
    InputForm,
  },
  setup() {
    const proyecto = ref({
      titulo: "",
      resumen: "",
      tags: [],
      imagenes: {},
      archivos: [],
    });

    const saluda = () => {
      alert("Hola");
    };

    const obtenerTags = (arrayTags) => {
      proyecto.value.tags = arrayTags;
    };

    const obtenerImagenes = (images) => {
      proyecto.value.imagenes = images;
      console.log(images, typeof images);
      console.log(images[0], typeof images[0]);
      console.log(proyecto.value.imagenes);
    };

    const obtenerArchivos = (files) => {
      proyecto.value.archivos = files;
      console.log(files, typeof files);
      console.log(files[0], typeof files[0]);
      console.log(proyecto.value.archivos);
    };

    return {
      saluda,
      proyecto,
      obtenerTags,
      obtenerImagenes,
      obtenerArchivos,
    };
  },
};
</script>
