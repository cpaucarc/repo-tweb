<template>
  <div class="space-y-2">
    <div class="relative">
      <img
        loading="lazy"
        class="aspect-video w-full object-cover rounded-lg"
        :src="proyecto.portada"
        :alt="proyecto.titulo"
        :title="proyecto.titulo"
      />

      <DeleteButton
        class="absolute -top-3 -right-3"
        @click="eliminarProyecto(proyecto.id, proyecto.titulo)"
      >
        <TrashIcon class="icon-5" />
      </DeleteButton>
    </div>
    <div>
      <h4
        class="font-bold text-slate-900 text-base lg:text-sm leading-5 line-clamp-3"
      >
        {{ proyecto.titulo }}
      </h4>
      <div class="flex items-center justify-between">
        <div
          title="Fecha de publicación"
          class="flex items-center text-slate-600 text-sm"
        >
          <CalendarIcon class="icon-5 mr-1" />
          <span>{{ proyecto.created_at }}</span>
        </div>

        <div class="flex flex-wrap space-x-2">
          <BadgeTag v-for="(tag, i) in proyecto.tags" :key="i" :tag="tag" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { CalendarIcon, TrashIcon } from "@heroicons/vue/outline";
import BadgeTag from "../BadgeTag.vue";
import DeleteButton from "../Button/DeleteButton.vue";
export default {
  name: "CardProyectoUsuario",
  components: { CalendarIcon, TrashIcon, BadgeTag, DeleteButton },
  props: {
    proyecto: Object,
  },
  setup() {
    const eliminarProyecto = (id, titulo) => {
      let rsta = confirm(`Desea eliminar el proyecto con llamado ${titulo}`);
      if (rsta) {
        alert(`API para eliminar proy: ${id} | ${titulo}`);
      }
    };

    return { eliminarProyecto };
  },
};
</script>
