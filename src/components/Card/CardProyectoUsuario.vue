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
      <div
        class="absolute flex items-center bg-white text-slate-900 text-xs px-2 py-1 rounded-md -bottom-1 -left-1"
      >
        <CalendarIcon class="h-4 w-4 mr-1" />
        <span>Publicado el {{ proyecto.created_at }}</span>
      </div>
      <button
        @click="eliminarProyecto(proyecto.id)"
        class="absolute cursor-pointer h-8 w-8 rounded-full flex-shrink-0 bg-white text-slate-900 hover:text-rose-500 active:bg-rose-500 active:text-slate-900 shadow transition ease-in-out duration-300 text-xs grid place-items-center -top-4 -right-4"
      >
        <TrashIcon class="h-5 w-5 flex-shrink-0" />
      </button>
    </div>
    <h4
      class="font-bold text-slate-900 text-base lg:text-sm leading-5 line-clamp-3"
    >
      {{ proyecto.titulo }}
    </h4>
  </div>
</template>
<script>
import { CalendarIcon, TrashIcon } from "@heroicons/vue/outline";
export default {
  name: "CardProyectoUsuario",
  components: { CalendarIcon, TrashIcon },
  props: {
    proyecto: Object,
  },
  setup() {
    const eliminarProyecto = (id) => {
      alert(`Se eliminará el proyecto con ID ${id}`);
    };

    return { eliminarProyecto };
  },
};
</script>
