<template>
  <div class="group">
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
        class="object-cover rounded-lg aspect-video"
        :class="large ? 'lg:aspect-[7/10]' : ''"
        loading="lazy"
        :src="proyecto.portada ? proyecto.portada.link_imagen : default_portada"
        :alt="proyecto.titulo"
        :title="proyecto.titulo"
        onerror="this.onerror=null;this.src='https://pandagila.com/wp-content/uploads/2020/08/error-404-not-found.jpg';"
      />
    </router-link>

    <div class="gap-x-4 py-1 flex items-center">
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
          :src="proyecto.estudiante.avatar ?? default_avatar"
          loading="lazy"
          class="w-12 h-12 avatar"
        />
      </router-link>

      <div class="space-y-0">
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
          <h2
            class="font-bold text-sm text-slate-900 group-hover:text-sky-600 leading-4 line-clamp-3 transition-eio-300"
          >
            {{ proyecto.titulo }}
          </h2>
        </router-link>
        <p
          class="text-slate-400 group-hover:text-slate-600 text-sm mr-2 transition-eio-300"
        >
          {{ proyecto.estudiante.apellidos.split(" ")[0] }}
          {{ proyecto.estudiante.nombres.split(" ")[0] }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AutorImagen from "./AutorImagen.vue";
import BadgeTag from "./BadgeTag.vue";
import Card from "./Card.vue";

const default_portada = "./static/default_cover.svg";
const default_avatar =
  "https://buster-darragh-major.github.io/res/Simpsons-Faces/1.png";

export default {
  name: "CardProyecto",
  components: { BadgeTag, AutorImagen, Card },
  props: { proyecto: Object, large: { type: Boolean, default: false } },
  setup() {
    return { default_portada, default_avatar };
  },
};
</script>
