<template>
  <div class="space-y-4">
    <Slider :portadas="portadas" v-if="portadas.length" />

    <div class="space-y-4">
      <h3 class="font-extrabold line-clamp-3 text-xl leading-6 text-slate-900">
        {{ titulo }}
      </h3>

      <div class="flex items-center justify-between">
        <span class="text-slate-600 text-sm">
          Publicado el {{ publicacion }}
        </span>

        <div class="flex items-center gap-x-1">
          <ValoracionProyecto :proyecto="id" />

          <Dropdown v-if="archivos.length > 0">
            <template #trigger>
              <SecondaryButton>
                <PaperClipIcon class="icon-5" /> Archivos
              </SecondaryButton>
            </template>
            <template #items>
              <DropdownExternalLink
                v-for="(archivo, i) in archivos"
                :key="i"
                :to="archivo.link_archivo"
              >
                <DocumentTextIcon class="icon-5" />
                <span>Archivo adjunto {{ i + 1 }}</span>
              </DropdownExternalLink>
            </template>
          </Dropdown>

          <ReportarProyecto :id="id" :reportadores="reportadores" />
        </div>
      </div>

      <div class="flex flex-wrap gap-2">
        <BadgeTag v-for="(tag, i) in tags" :key="i" :tag="tag.nombre" />
      </div>
    </div>

    <div class="space-y-3 pt-3">
      <div
        v-if="reportadores.length"
        class="bg-rose-100 space-y-1 border-l-4 border-rose-500 text-rose-800 p-4 text-sm"
        role="alert"
      >
        <p class="font-bold">¡¡😱 Ten cuidado con este proyecto!!</p>
        <p>
          Hemos recibido reportes de que este proyecto puede estar infringiendo
          las normas de la comunidad.
        </p>
      </div>

      <h3 class="font-semibold text-slate-400">Resumen</h3>
      <p class="leading-7">{{ resumen }}</p>
    </div>
  </div>
</template>

<script>
import BadgeTag from "../BadgeTag.vue";
import { PaperClipIcon, DocumentTextIcon } from "@heroicons/vue/outline";
import SecondaryButton from "../Button/SecondaryButton.vue";
import Dropdown from "../Util/Dropdown.vue";
import DropdownExternalLink from "../Link/DropdownExternalLink.vue";
import Slider from "../Util/Slider.vue";
import ValoracionProyecto from "./ValoracionProyecto.vue";
import ReportarProyecto from "./ReportarProyecto.vue";

export default {
  name: "DatosProyecto",
  props: {
    id: Number,
    titulo: String,
    publicacion: String,
    resumen: String,
    archivos: Array,
    portadas: Array,
    tags: Array,
    reportes: Object,
  },
  components: {
    BadgeTag,
    Dropdown,
    PaperClipIcon,
    SecondaryButton,
    DocumentTextIcon,
    DropdownExternalLink,
    Slider,
    ValoracionProyecto,
    ReportarProyecto,
  },
  setup(props) {
    const reportadores = [
      ...new Set(props.reportes.map((reporte) => reporte.usuario_id)),
    ];

    return {
      reportadores,
    };
  },
};
</script>

<style scoped>
.portada {
  aspect-ratio: 3/2;
  border-radius: 10px;
  height: auto;
  object-fit: cover;
  overflow: hidden;
  width: 100%;
}
</style>
