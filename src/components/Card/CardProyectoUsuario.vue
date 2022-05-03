<template>
  <div class="space-y-2 group">
    <div class="relative">
      <router-link
        :to="{
          name: 'Proyecto',
          params: {
            username: proyecto.usuario.usuario,
            proy_id: proyecto.id,
          },
        }"
      >
        <img
          loading="lazy"
          class="aspect-video w-full object-cover rounded-lg border border-zinc-300 dark:border-zinc-700"
          :src="
            proyecto.portada
              ? proyecto.portada.link_imagen
              : 'https://kapei.pe/wp-content/uploads/2021/01/error-404.jpg'
          "
          :alt="proyecto.titulo"
          :title="proyecto.titulo"
        />
      </router-link>

      <DeleteButton
        v-if="logeado === proyecto.usuario.id"
        class="absolute -top-3 -right-3 z-30"
        @click="eliminarProyecto(proyecto.id, proyecto.titulo)"
      >
        <TrashIcon class="icon-5" />
      </DeleteButton>
    </div>
    <div>
      <router-link
        :to="{
          name: 'Proyecto',
          params: {
            username: proyecto.usuario.usuario,
            proy_id: proyecto.id,
          },
        }"
      >
        <h4
          class="font-bold text-zinc-900 dark:text-zinc-400 group-hover:text-sky-600 dark:group-hover:text-sky-500 transition-eio-300 text-base lg:text-sm leading-5 line-clamp-3"
        >
          {{ proyecto.titulo }}
        </h4>
      </router-link>
      <div class="flex mt-1 items-center gap-x-4 justify-between">
        <div
          title="Fecha de publicación"
          class="flex items-center text-zinc-600 dark:text-zinc-500 text-sm whitespace-nowrap"
        >
          <CalendarIcon class="icon-5 mr-1" />
          <span>{{ fecha }}</span>
        </div>

        <div class="flex items-center overflow-x-scroll space-x-2">
          <BadgeTag
            v-for="(tag, i) in proyecto.tags"
            :key="i"
            :tag="tag.nombre"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { CalendarIcon, TrashIcon } from "@heroicons/vue/outline";
import moment from "moment";
import useProyecto from "../../composables/useProyecto";
import BadgeTag from "../BadgeTag.vue";
import DeleteButton from "../Button/DeleteButton.vue";

export default {
  name: "CardProyectoUsuario",
  components: { CalendarIcon, TrashIcon, BadgeTag, DeleteButton },
  props: {
    proyecto: Object,
    logeado: Number,
  },
  setup(props, { emit }) {
    const { deleteProject } = useProyecto();
    const fecha = moment(props.proyecto.created_at).format("DD-MM-YYYY");

    const eliminarProyecto = async (id, titulo) => {
      if (confirm(`Desea eliminar el proyecto con llamado ${titulo}`)) {
        await deleteProject(id);
        emit("eliminado", id);
      }
    };

    return { eliminarProyecto, fecha };
  },
};
</script>
