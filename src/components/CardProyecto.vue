<template>
  <router-link
    :to="{
      name: 'Proyecto',
      params: { username: proyecto.usuario.username, proy_id: proyecto.id },
    }"
  >
    <div class="group">
      <img
        class="aspect-video object-cover rounded-lg"
        loading="lazy"
        :src="proyecto.imagen"
        :alt="proyecto.titulo"
        :title="proyecto.titulo"
      />

      <div class="gap-x-4 py-1 flex items-center">
        <img
          :src="proyecto.usuario.foto"
          loading="lazy"
          class="w-12 h-12 avatar"
        />

        <div class="space-y-0">
          <h2
            class="font-bold text-sm text-slate-900 group-hover:text-sky-600 leading-4 line-clamp-3 transition-eio-300"
          >
            {{ proyecto.titulo }}
          </h2>
          <p
            class="text-slate-400 group-hover:text-slate-600 text-sm mr-2 transition-eio-300"
          >
            {{ proyecto.usuario.nombre }}
          </p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import AutorImagen from "./AutorImagen.vue";
import BadgeTag from "./BadgeTag.vue";
import Card from "./Card.vue";
export default {
  name: "CardProyecto",
  components: { BadgeTag, AutorImagen, Card },
  props: { proyecto: Object },
};
</script>
