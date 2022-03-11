<template>
  <div class="flex justify-between items-center">
    <div class="relative">
      <div class="flex items-center gap-x-2 bg-gray-50 px-3 py-2 rounded-lg">
        <img
          class="w-10 h-10 bg-blue-500 rounded-lg object-cover"
          src="../../assets/Kakaroto.webp"
          alt="Foto"
          @mouseenter="mouseEnter"
          @mouseleave="mouseLeave"
        />
        <div>
          <h4 class="text-sm text-gray-600">
            por
            <span class="text-blue-600 font-semibold">{{ autor.nombre }}</span>
          </h4>
          <p class="text-xs text-gray-600">{{ autor.escuela }}</p>
        </div>
      </div>

      <div
        class="absolute top-12"
        v-show="show"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      >
        <Card>
          <div class="p-2">
            <div class="flex">
              <span class="material-icons">mail_outline</span>
              <p>{{ autor.correo }}</p>
            </div>
            <div class="flex">
              <span class="material-icons">phone</span>
              <p>{{ autor.telefono }}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>

    <button
      class="bg-gray-50 text-sm px-3 py-2 rounded-lg inline-flex items-center text-gray-600 hover:text-amber-600"
    >
      <span class="material-icons mr-1"> star_border </span>
      Añadir a favoritos
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
import Card from "../Card.vue";

export default {
  name: "DatosAutor",
  props: {
    autor: Object,
  },
  setup() {
    const show = ref(false);
    const mouseEnter = () => {
      show.value = true;
    };
    const mouseLeave = () => {
      show.value = false;
    };
    return { mouseEnter, mouseLeave, show };
  },
  components: { Card },
};
</script>

<style scoped>
.flex {
  align-items: center;
  column-gap: 1rem;
  display: flex;
  position: relative;
}
.avatar {
  border-radius: 999px;
  height: 72px;
  width: 72px;
}
.floating-card {
  position: absolute;
}
</style>
