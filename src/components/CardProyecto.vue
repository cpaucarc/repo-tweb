<template>
  <router-link to="/proyecto">
    <Card>
      <div class="p-3 space-y-4">
        <img
          class="aspect-video object-cover rounded-md"
          :src="proyecto.imagen"
          :alt="proyecto.titulo"
        />

        <div class="my-2 space-y-2 relative">
          <h2 class="font-medium text-gray-700 leading-5">
            {{ proyecto.titulo }}
          </h2>
          <div class="flex flex-wrap gap-2">
            <template v-for="(tag, i) in proyecto.tags" :key="i">
              <BadgeTag :tag="tag" />
            </template>
          </div>
          <div class="absolute -top-16 -left-1">
            <img
              :src="proyecto.usuario.foto"
              class="w-14 h-14 object-cover rounded-full border-white border-2"
            />
          </div>
        </div>
      </div>
    </Card>
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
