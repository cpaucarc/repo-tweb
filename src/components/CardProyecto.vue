<template>
  <Card>
    <div class="">
      <img
        class="aspect-video object-cover"
        :src="proyecto.imagen"
        :alt="proyecto.titulo"
      />

      <div class="p-4 space-y-2">
        <h2 class="font-bold text-gray-800">{{ proyecto.titulo }}</h2>
        <div class="flex flex-wrap gap-2">
          <template v-for="(tag, i) in proyecto.tags" :key="i">
            <BadgeTag :tag="tag" />
          </template>
        </div>
      </div>

      <div class="flex items-center justify-between p-4">
        <AutorImagen :autor="proyecto.usuario" />
        <router-link
          class="text-gray-500 hover:text-rose-600 hover:underline"
          to="/proyecto"
        >
          Revisar
        </router-link>
      </div>
    </div>
  </Card>
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
