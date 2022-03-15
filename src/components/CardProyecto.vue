<template>
  <router-link
    :to="{
      name: 'Proyecto',
      params: { username: proyecto.usuario.username, proy_id: proyecto.id },
    }"
  >
    <div>
      <img
        class="aspect-video object-cover rounded-lg"
        :src="proyecto.imagen"
        :alt="proyecto.titulo"
        :title="proyecto.titulo"
      />

      <div class="gap-x-4 py-1 flex items-center">
        <img
          :src="proyecto.usuario.foto"
          class="w-14 h-14 flex-shrink-0 object-cover rounded-full"
        />

        <div class="space-y-1">
          <h2 class="font-bold text-sm text-slate-800 leading-5 line-clamp-2">
            {{ proyecto.titulo }}
          </h2>
          <p class="font-semibold text-sky-600 text-sm mr-2">
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
