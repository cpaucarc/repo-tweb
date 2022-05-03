<template>
  <div class="group">
    <router-link
      :to="{
        name: 'Proyecto',
        params: {
          username: proyecto.usuario.usuario,
          proy_id: proyecto.id,
        },
      }"
    >
      <div
        class="rounded-lg aspect-video overflow-hidden border border-zinc-300 dark:border-zinc-700"
        :class="large ? 'lg:aspect-[7/10]' : ''"
      >
        <img
          class="h-full w-full object-cover transform hover:scale-105 transition-eio-300"
          loading="lazy"
          :src="
            proyecto.portada ? proyecto.portada.link_imagen : default_portada
          "
          :alt="proyecto.titulo"
          :title="proyecto.titulo"
          onerror="this.onerror=null;this.src='https://pandagila.com/wp-content/uploads/2020/08/error-404-not-found.jpg';"
        />
      </div>
    </router-link>

    <div class="gap-x-4 py-1 flex items-center mt-2 pr-2">
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
          :src="proyecto.usuario.avatar ?? default_avatar"
          loading="lazy"
          class="w-12 h-12 avatar"
        />
      </router-link>

      <div class="space-y-1">
        <router-link
          :to="{
            name: 'Proyecto',
            params: {
              username: proyecto.usuario.usuario,
              proy_id: proyecto.id,
            },
          }"
        >
          <h2
            class="font-bold text-justify text-sm text-zinc-900 dark:text-zinc-400 group-hover:text-sky-600 leading-4 line-clamp-3 transition-eio-300"
          >
            {{ proyecto.titulo }}
          </h2>
        </router-link>
        <div
          class="flex items-center justify-between text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 text-sm mr-2 transition-eio-300"
        >
          <p class="font-semibold">
            {{ proyecto.usuario.estudiante.nombres.split(" ")[0] }}
            {{ proyecto.usuario.estudiante.apellidos.split(" ")[0] }}
          </p>
          <p class="flex items-start gap-x-1 font-bold">
            {{ proyecto.likes_count }} <ThumbUpIcon class="icon-4" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AutorImagen from "./AutorImagen.vue";
import BadgeTag from "./BadgeTag.vue";
import Card from "./Card.vue";
import { ThumbUpIcon } from "@heroicons/vue/outline";

const default_portada = "./static/default_cover.svg";
const default_avatar =
  "https://buster-darragh-major.github.io/res/Simpsons-Faces/1.png";

export default {
  name: "CardProyecto",
  components: { BadgeTag, AutorImagen, Card, ThumbUpIcon },
  props: { proyecto: Object, large: { type: Boolean, default: false } },
  setup() {
    return { default_portada, default_avatar };
  },
};
</script>
