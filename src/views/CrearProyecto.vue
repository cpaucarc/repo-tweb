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
        rows="6"
        v-model="proyecto.resumen"
        class="input-form"
      ></textarea>
    </InputForm>

    <InputForm>
      <InputLabel for="tags">
        Tags
        <span class="text-zinc-400 ml-1">*(separados por coma)</span>
      </InputLabel>
      <InputTags
        id="tags"
        :defaultTags="defaultTags"
        @tags="obtenerTags"
        placeholder="Ancash,Mineria,Turismo,..."
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
      <PrimaryButton @click="enviarProyecto">
        <DocumentTextIcon class="icon-5" />
        Subir proyecto
      </PrimaryButton>
    </div>

    <Modal :isOpen="isOpen" @closeModal="closeModal">
      <LoadingMessage v-show="isSaving" />
      <div v-show="!isSaving">
        <ErrorMessage
          v-if="!respuesta.respuesta"
          :titulo="respuesta.mensaje"
          :errores="respuesta.error"
        />
        <SuccessMessage v-else titulo="Proyecto creado con exito">
          <p class="text-sm">
            Tu proyecto ya está disponible para que otras personas lo vean.
          </p>
        </SuccessMessage>
      </div>
      <button
        v-show="!isSaving"
        class="px-2 py-4 w-full text-zinc-700 hover:text-zinc-900 font-bold transition-eio-300"
        @click="closeModal"
      >
        Aceptar
      </button>
    </Modal>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import InputTags from "../components/Input/InputTags.vue";
import InputFile from "../components/Input/InputFile.vue";
import InputFileImage from "../components/Input/InputFileImage.vue";
import PrimaryButton from "../components/Button/PrimaryButton.vue";
import { DocumentTextIcon } from "@heroicons/vue/outline";
import InputLabel from "../components/Input/InputLabel.vue";
import InputLabelSize from "../components/Input/InputLabelSize.vue";
import InputForm from "../components/Input/InputForm.vue";
import useProyectosHome from "../composables/useProyectosHome";
import { useUserStore } from "../stores/useUser";
import Modal from "../components/Util/Modal.vue";
import SuccessMessage from "../components/Validacion/SuccessMessage.vue";
import ErrorMessage from "../components/Validacion/ErrorMessage.vue";
import LoadingMessage from "../components/Validacion/LoadingMessage.vue";
import { useRouter } from "vue-router";
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
    Modal,
    SuccessMessage,
    ErrorMessage,
    LoadingMessage,
  },
  setup() {
    const { user } = useUserStore();
    const proyecto = reactive({
      usuario_id: user.user_id,
      titulo: "",
      resumen: "",
      tags: [],
      imagenes: [],
      documentos: [],
    });
    const defaultTags = ref([]);
    const respuesta = ref([]);
    const isSaving = ref(false);
    const isOpen = ref(false);
    const router = useRouter();
    const { saveProyecto, getTags } = useProyectosHome();

    onMounted(async () => {
      defaultTags.value = await getTags();
    });

    const enviarProyecto = async () => {
      isSaving.value = true;
      isOpen.value = true;
      respuesta.value = await saveProyecto({ ...proyecto });
      isSaving.value = false;
    };

    const obtenerTags = (arrayTags) => {
      proyecto.tags = arrayTags;
    };

    const obtenerImagenes = (images) => {
      proyecto.imagenes = images;
    };

    const obtenerArchivos = (files) => {
      proyecto.documentos = files;
    };

    const closeModal = () => {
      isOpen.value = false;
      if (respuesta.value.respuesta) {
        router.push({
          name: "UsuarioProyecto",
          params: { username: user.username },
        });
      }
    };

    return {
      enviarProyecto,
      proyecto,
      obtenerTags,
      obtenerImagenes,
      obtenerArchivos,
      isSaving,
      isOpen,
      closeModal,
      respuesta,
      defaultTags,
    };
  },
};
</script>
