<template>
  <div class="space-y-2">
    <div class="relative">
      <router-link
        :to="{
          name: 'Proyecto',
          params: {
            username: proyecto.estudiante.usuario
              ? proyecto.estudiante.usuario.usuario
              : 'usuario-sin-nombre',
            proy_id: proyecto.id,
          },
        }"
      >
        <img
          loading="lazy"
          class="aspect-video w-full object-cover rounded-lg overflow-hidden"
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
            username: proyecto.estudiante.usuario
              ? proyecto.estudiante.usuario.usuario
              : 'usuario-sin-nombre',
          },
        }"
        class="avatar"
      >
        <img
          :src="proyecto.estudiante.avatar"
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
              username: proyecto.estudiante.usuario
                ? proyecto.estudiante.usuario.usuario
                : 'usuario-sin-nombre',
              proy_id: proyecto.id,
            },
          }"
        >
          <h4
            class="font-bold text-slate-900 text-base lg:text-sm leading-4 line-clamp-2"
          >
            {{ proyecto.titulo }}
          </h4>
        </router-link>
        <div class="flex items-center gap-x-2 justify-between mt-2">
          <p
            class="text-sm font-semibold text-sky-800 whitespace-nowrap line-clamp-1"
          >
            {{ proyecto.estudiante.apellidos.split(" ")[0] }}
            {{ proyecto.estudiante.nombres.split(" ")[0] }}
          </p>
          <div
            title="Fecha de agregado a favoritos"
            class="flex items-center whitespace-nowrap text-slate-600 text-sm pr-2"
          >
            <CalendarIcon class="icon-5 mr-1" />
            <span>{{ proyecto.agregado_el }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { CalendarIcon, XIcon } from "@heroicons/vue/outline";
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

    const eliminarProyecto = async (id, titulo) => {
      let rsta = confirm(
        `Desea quitar el proyecto con llamado ${titulo} de sus favoritos`
      );
      if (rsta) {
        await setFav(id, props.usuario_id);
        emit("eliminado", id);
      }
    };

    return { eliminarProyecto };
  },
};
</script>
