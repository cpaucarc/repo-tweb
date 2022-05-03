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
          class="aspect-video w-full object-cover rounded-lg overflow-hidden border border-zinc-300 dark:border-zinc-700"
          :src="
            proyecto.portada
              ? proyecto.portada.link_imagen
              : 'https://cdn.thememylogin.com/uploads/edd/2019/03/favorites.png'
          "
          :alt="proyecto.titulo"
          :title="proyecto.titulo"
        />
      </router-link>
      <DeleteButton
        class="absolute -top-3 -right-3"
        @click="eliminarProyecto(proyecto.id, proyecto.titulo)"
      >
        <XIcon class="icon-5" />
      </DeleteButton>
    </div>
    <div class="flex items-center space-x-2">
      <router-link
        :to="{
          name: 'UsuarioProyecto',
          params: {
            username: proyecto.usuario.usuario,
          },
        }"
        class="avatar"
      >
        <img
          :src="proyecto.usuario.avatar"
          loading="lazy"
          alt="Avatar del usuario"
          class="w-14 h-14 avatar"
        />
      </router-link>
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
            class="font-bold text-zinc-900 dark:text-zinc-400 group-hover:text-sky-600 transition-eio-300 text-base lg:text-sm leading-4 line-clamp-3"
          >
            {{ proyecto.titulo }}
          </h4>
        </router-link>
        <div class="flex items-center gap-x-2 justify-between mt-1 text-sm">
          <p
            class="font-semibold text-sky-800 dark:text-sky-600 whitespace-nowrap line-clamp-1"
          >
            {{ proyecto.usuario.estudiante.nombres.split(" ")[0] }}
            {{ proyecto.usuario.estudiante.apellidos.split(" ")[0] }}
          </p>
          <div
            title="Fecha de agregado a favoritos"
            class="flex items-center whitespace-nowrap text-zinc-600 dark:text-zinc-500 pr-2"
          >
            <CalendarIcon class="icon-5 mr-1" />
            <span>{{ fecha }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { CalendarIcon, XIcon } from "@heroicons/vue/outline";
import moment from "moment";
import useFavLike from "../../composables/useFavLike";
import DeleteButton from "../Button/DeleteButton.vue";
export default {
  name: "CardProyectoFavorito",
  components: { CalendarIcon, XIcon, DeleteButton },
  props: {
    proyecto: Object,
    usuario_id: Number,
  },
  setup(props, { emit }) {
    const { setFav } = useFavLike();
    // const fecha = moment(props.proyecto.agregado_el).fromNow(true);
    const agregado_el = moment(props.proyecto.agregado_el);
    const ahora = moment();
    const diff = ahora.diff(agregado_el, "days");
    const fecha =
      diff > 7 ? agregado_el.format("DD-MM-YYYY") : agregado_el.fromNow();

    const eliminarProyecto = async (id, titulo) => {
      let rsta = confirm(
        `Desea quitar el proyecto con llamado ${titulo} de sus favoritos`
      );
      if (rsta) {
        await setFav(id, props.usuario_id);
        emit("eliminado", id);
      }
    };

    return { eliminarProyecto, fecha };
  },
};
</script>
