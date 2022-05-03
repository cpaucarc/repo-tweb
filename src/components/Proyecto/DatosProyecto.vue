<template>
  <div class="space-y-4">
    <Slider :portadas="portadas" v-if="portadas.length" />

    <div class="space-y-4">
      <h3
        class="font-extrabold line-clamp-3 text-xl leading-6 text-zinc-900 dark:text-zinc-300 text-justify"
      >
        {{ titulo }}
      </h3>

      <div class="flex items-center justify-between">
        <span class="text-zinc-600 dark:text-zinc-400 text-sm">
          Publicado el {{ fecha }}
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
                <p class="line-clamp-1">{{ archivo.nombre }}</p>
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

    <ProyectoReportadoMessage v-if="reportadores.length" />

    <ProyectoResumen :resumen="resumen" />
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
import moment from "moment";
import ProyectoResumen from "./ProyectoResumen.vue";
import ProyectoReportadoMessage from "../Util/ProyectoReportadoMessage.vue";

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
    ProyectoResumen,
    ProyectoReportadoMessage,
  },
  setup(props) {
    const reportadores = [
      ...new Set(props.reportes.map((reporte) => reporte.usuario_id)),
    ];
    const fecha = moment(props.publicacion).format("DD/MM/YYYY");

    return {
      reportadores,
      fecha,
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
