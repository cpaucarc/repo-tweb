<template>
  <div class="flex justify-between items-center">
    <div class="relative">
      <div class="flex items-center gap-x-2">
        <img
          class="w-12 h-12 rounded-lg object-cover shadow"
          src="../../assets/Kakaroto.webp"
          alt="Foto"
          @mouseenter="mouseEnter"
          @mouseleave="mouseLeave"
        />
        <div>
          <h4 class="font-bold">{{ autor.nombre }}</h4>
          <p class="text-sm">{{ autor.escuela }}</p>
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
      class="border border-gray-300 rounded-md px-3 pt-1 text-gray-600 hover:text-amber-500"
    >
      <span class="material-icons"> star_border </span>
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
