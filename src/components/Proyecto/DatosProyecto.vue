<template>
  <div class="space-y-6">
    <div class="snap-center" v-for="(portada, i) in portadas" :key="i">
      <img
        class="aspect-video rounded-lg overflow-hidden object-cover"
        :src="portada"
        alt="Portada"
      />
    </div>

    <div class="space-y-4">
      <h3 class="font-bold text-xl leading-6 text-gray-800">{{ titulo }}</h3>

      <div class="flex items-center justify-between">
        <span class="text-slate-600 text-sm">
          Publicado el {{ publicacion }}
        </span>

        <div class="flex items-center gap-x-1">
          <TertiaryButton>
            <ThumbUpIcon class="icon-5" /> <span>Me gusta</span>
          </TertiaryButton>

          <TertiaryButton>
            <HeartIcon class="icon-5" />
            <span>Añadir a favoritos</span>
          </TertiaryButton>

          <Dropdown>
            <template #trigger>
              <SecondaryButton>
                <PaperClipIcon class="icon-5" />
                <span>Archivos</span>
              </SecondaryButton>
            </template>
            <template #items>
              <DropdownExternalLink
                v-for="(archivo, i) in archivos"
                :key="i"
                :to="archivo"
              >
                <DocumentTextIcon class="icon-4" />
                <span>Archivo adjunto {{ i + 1 }}</span>
              </DropdownExternalLink>
            </template>
          </Dropdown>
        </div>
      </div>

      <div class="flex flex-wrap gap-2">
        <BadgeTag v-for="(tag, i) in tags" :key="i" :tag="tag" />
      </div>
    </div>

    <div class="space-y-3 pt-3">
      <h3 class="font-semibold text-slate-400">Resumen</h3>
      <p class="leading-7 text-sm">{{ resumen }}</p>
    </div>
  </div>
</template>

<script>
import BadgeTag from "../BadgeTag.vue";
import {
  ThumbUpIcon,
  HeartIcon,
  PaperClipIcon,
  DocumentTextIcon,
} from "@heroicons/vue/outline";
import SecondaryButton from "../Button/SecondaryButton.vue";
import TertiaryButton from "../Button/TertiaryButton.vue";
import Dropdown from "../Util/Dropdown.vue";
import DropdownExternalLink from "../Link/DropdownExternalLink.vue";

export default {
  name: "DatosProyecto",
  props: {
    titulo: String,
    publicacion: String,
    resumen: String,
    archivos: Array,
    portadas: Array,
    tags: Array,
  },
  components: {
    BadgeTag,
    Dropdown,
    ThumbUpIcon,
    HeartIcon,
    PaperClipIcon,
    SecondaryButton,
    TertiaryButton,
    DocumentTextIcon,
    DropdownExternalLink,
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
