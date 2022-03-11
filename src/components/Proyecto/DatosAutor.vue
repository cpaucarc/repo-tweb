<template>
  <div>
    <div class="flex">
      <img
        class="avatar"
        :src="autor.avatar"
        alt="Foto"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      />
      <div>
        <h4>{{ autor.nombre }}</h4>
        <p>{{ autor.escuela }}-{{ autor.facultad }}</p>
        <br />
      </div>
    </div>

    <div
      class="floating-card"
      v-show="show"
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
    >
      <Card>
        <div class="flex">
          <span class="material-icons">mail_outline</span>
          <p>{{ autor.correo }}</p>
        </div>
        <div class="flex">
          <span class="material-icons">phone</span>
          <p>{{ autor.telefono }}</p>
        </div>
      </Card>
    </div>
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
