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
      <button
        @click="eliminarProyecto(proyecto.id, proyecto.titulo)"
        class="absolute cursor-pointer h-10 w-10 rounded-full flex-shrink-0 bg-white text-slate-900 hover:text-rose-500 active:bg-rose-500 active:text-slate-900 shadow transition ease-in-out duration-300 text-xs grid place-items-center -top-4 -right-4"
      >
        <TrashIcon class="h-6 w-6 flex-shrink-0" />
      </button>
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
          <CalendarIcon class="h-5 w-5 mr-1" />
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
export default {
  name: "CardProyectoUsuario",
  components: { CalendarIcon, TrashIcon, BadgeTag },
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
