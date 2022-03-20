<template>
  <div class="w-1/2 mx-auto space-y-6">
    <InputBasic label="Título del proyecto" />
    <TextArea
      @emitInput="(value) => (desc = value)"
      label="Resumen del proyecto"
    />
    <InputTags
      label="Palabras claves del proyecto *(separados por comas)"
      placeholder="Ancash,Mineria,IA"
    />
    <InputFile label="Imagenes de portada" />
    <InputFile label="Archivos adjuntos" />
    <div class="flex justify-center">
      <PrimaryButton @click="saluda">
        <DocumentTextIcon class="h-5 w-5" />
        Subir proyecto
      </PrimaryButton>
    </div>
  </div>
</template>

<script>
import InputBasic from "../components/Input/InputBasic.vue";
import TextArea from "../components/Input/TextArea.vue";
import InputTags from "../components/Input/InputTags.vue";
import InputFile from "../components/Input/InputFile.vue";
import PrimaryButton from "../components/Button/PrimaryButton.vue";
import { DocumentTextIcon } from "@heroicons/vue/outline";
import { ref } from "vue";
export default {
  components: {
    InputBasic,
    TextArea,
    InputTags,
    InputFile,
    PrimaryButton,
    DocumentTextIcon,
  },
  setup() {
    const desc = ref("5212");

    const saluda = () => {
      alert("Hola");
    };
    return { saluda, desc };
  },
};
</script>
