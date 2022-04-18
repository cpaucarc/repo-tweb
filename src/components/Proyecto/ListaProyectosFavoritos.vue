<template>
  <div class="relative">
    <SkeletonFavoritos v-if="isLoading" />
    <div v-else>
      <TransitionGroup
        v-if="respuesta"
        tag="div"
        name="lista"
        appear
        class="relative p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
      >
        <CardProyectoFavorito
          v-for="proyecto in proyectos"
          :key="proyecto.id"
          :usuario_id="id"
          :proyecto="proyecto"
          @eliminado="proyectoEliminado"
        />
      </TransitionGroup>
      <div v-else>
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import { inject, onMounted, ref, watch } from "vue";
import useProyecto from "../../composables/useProyecto";
import CardProyectoFavorito from "../Card/CardProyectoFavorito.vue";
import SkeletonFavoritos from "../Skeleton/SkeletonFavoritos.vue";
export default {
  name: "ListaProyectosFavoritos",
  components: { CardProyectoFavorito, SkeletonFavoritos },
  props: {
    usuario: { type: String, required: true },
    id: { type: Number, required: true },
  },
  setup(props) {
    // const proyectos = proyectosFavoritos;
    const proyectos = ref([]);
    const error = ref("");
    const isLoading = ref(true);
    const respuesta = ref(false);

    const cantidad = inject("cantidad");
    const search = inject("search");
    const { getUserFavorites } = useProyecto();

    onMounted(() => {
      getFavoritos();
    });

    watch(search, (value) => {
      getFavoritos();
    });

    const getFavoritos = async () => {
      isLoading.value = true;
      let response = await getUserFavorites(props.usuario, search.value);
      if (response.respuesta) {
        proyectos.value = response.mensaje;
        cantidad.value = Object.keys(proyectos.value).length;
      } else {
        error.value = response.mensaje;
      }
      respuesta.value = response.respuesta;
      isLoading.value = false;
    };

    const proyectoEliminado = (id) => {
      proyectos.value = proyectos.value.filter(function (proyecto) {
        return proyecto.id !== id;
      });
      cantidad.value = Object.keys(proyectos.value).length;
    };

    return { proyectos, error, isLoading, respuesta, proyectoEliminado };
  },
};
</script>

<style scoped>
.lista-enter-from {
  opacity: 0;
  transform: scale(0.6);
}

.lista-enter-active {
  transition: all 0.4s ease;
}

.lista-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
.lista-leave-active {
  transition: all 0.5s ease;
  /* position: absolute; */
}
.lista-move {
  transition: all 0.8s ease;
}
</style>
