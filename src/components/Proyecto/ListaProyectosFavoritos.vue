<template>
  <div>
    <SkeletonFavoritos v-if="isLoading" />
    <div v-else>
      <div
        v-if="respuesta"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
      >
        <CardProyectoFavorito
          v-for="proyecto in proyectos"
          :key="proyecto.id"
          :usuario_id="id"
          :proyecto="proyecto"
          @eliminado="getFavoritos"
        />
      </div>
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

    return { proyectos, error, isLoading, respuesta, getFavoritos };
  },
};
</script>
