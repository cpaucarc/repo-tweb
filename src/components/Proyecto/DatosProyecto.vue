<template>
  <div class="space-y-4">
    <Slider :portadas="portadas" />

    <div class="space-y-4">
      <h3 class="font-extrabold line-clamp-3 text-xl leading-6 text-slate-900">
        {{ titulo }}
      </h3>

      <div class="flex items-center justify-between">
        <span class="text-slate-600 text-sm">
          Publicado el {{ publicacion }}
        </span>

        <div class="flex items-center gap-x-1">
          <TertiaryButton
            :color="like ? 'sky' : 'slate'"
            @click="() => (like = !like)"
          >
            <LikeSolid class="icon-5" v-if="like" />
            <ThumbUpIcon class="icon-5" v-else />
            <span>Me gusta</span>
          </TertiaryButton>

          <TertiaryButton
            :color="fav ? 'rose' : 'slate'"
            @click="() => (fav = !fav)"
          >
            <HeartSolid class="icon-5" v-if="fav" />
            <HeartIcon class="icon-5" v-else />
            <span>Favorito</span>
          </TertiaryButton>

          <Dropdown v-if="archivos.length > 0">
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
                :to="'http://localhost:8000/storage/' + archivo.link_archivo"
              >
                <DocumentTextIcon class="icon-5" />
                <span>Archivo adjunto {{ i + 1 }}</span>
              </DropdownExternalLink>
            </template>
          </Dropdown>
        </div>
      </div>

      <div class="flex flex-wrap gap-2">
        <BadgeTag v-for="(tag, i) in tags" :key="i" :tag="tag.nombre" />
      </div>
    </div>

    <div class="space-y-3 pt-3">
      <h3 class="font-semibold text-slate-400">Resumen</h3>
      <p class="leading-7">{{ resumen }}</p>
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
import {
  ThumbUpIcon as LikeSolid,
  HeartIcon as HeartSolid,
} from "@heroicons/vue/solid";

import SecondaryButton from "../Button/SecondaryButton.vue";
import TertiaryButton from "../Button/TertiaryButton.vue";
import Dropdown from "../Util/Dropdown.vue";
import DropdownExternalLink from "../Link/DropdownExternalLink.vue";
import Slider from "../Util/Slider.vue";
import { ref } from "vue";

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
    Slider,
    LikeSolid,
    HeartSolid,
  },
  setup() {
    const like = ref(false);
    const fav = ref(false);

    return { like, fav };
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
