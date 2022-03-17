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
        class="absolute cursor-pointer h-8 w-8 rounded-full flex-shrink-0 bg-white text-slate-900 hover:text-rose-500 active:bg-rose-500 active:text-slate-900 shadow transition ease-in-out duration-300 text-xs grid place-items-center -top-4 -right-4"
      >
        <XIcon class="h-5 w-5 flex-shrink-0" />
      </button>
    </div>
    <div class="flex items-center space-x-2">
      <img
        :src="proyecto.autor.avatar"
        loading="lazy"
        class="w-14 h-14 flex-shrink-0 object-cover rounded-full"
      />
      <div>
        <h4
          class="font-bold text-slate-900 text-base lg:text-sm leading-4 line-clamp-2"
        >
          {{ proyecto.titulo }}
        </h4>
        <div class="flex items-center justify-between mt-2">
          <p class="text-sm font-semibold text-sky-800">
            {{ proyecto.autor.nombre }}
          </p>
          <div
            title="Fecha de agregado a favoritos"
            class="flex items-center text-slate-600 text-sm pr-2"
          >
            <CalendarIcon class="h-5 w-5 mr-1" />
            <span>{{ proyecto.added_at }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { CalendarIcon, XIcon } from "@heroicons/vue/outline";
export default {
  name: "CardProyectoFavorito",
  components: { CalendarIcon, XIcon },
  props: {
    proyecto: Object,
  },
  setup() {
    const eliminarProyecto = (id, titulo) => {
      let rsta = confirm(
        `Desea quitar el proyecto con llamado ${titulo} de sus favoritos`
      );
      if (rsta) {
        alert(`API para eliminar proy: ${id} | ${titulo}`);
      }
    };

    return { eliminarProyecto };
  },
};
</script>
