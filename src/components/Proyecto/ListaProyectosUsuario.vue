<template>
  <div class="relative">
    <SkeletonMisProyectos v-if="isLoading" />
    <div v-else>
      <TransitionGroup
        v-if="respuesta"
        tag="div"
        name="lista"
        appear
        class="relative p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10"
      >
        <CardProyectoUsuario
          v-for="proyecto in proyectos"
          :key="proyecto.id"
          :proyecto="proyecto"
          :logeado="user.user_id"
          @eliminado="proyectoEliminado"
        />
      </TransitionGroup>
      <div
        v-else
        class="rounded-lg w-full aspect-[16/4] grid place-items-center"
      >
        <div class="flex flex-col gap-1 items-center">
          <p class="text-4xl">😢</p>
          <p class="text-zinc-600 dark:text-zinc-400 px-3 py-1">{{ error }}</p>
          <div v-if="usuario === user.username">
            <router-link
              :to="{ name: 'CrearProyecto' }"
              class="bg-amber-400 hover:bg-amber-500 text-zinc-900 btn"
            >
              Crear un nuevo proyecto
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, onMounted, ref, watch } from "vue";
import useProyecto from "../../composables/useProyecto";
import { useUserStore } from "../../stores/useUser";
import CardProyectoUsuario from "../Card/CardProyectoUsuario.vue";
import SkeletonMisProyectos from "../Skeleton/SkeletonMisProyectos.vue";
export default {
  name: "ListaProyectosUsuario",
  props: { usuario: { type: String, required: true } },
  components: { CardProyectoUsuario, SkeletonMisProyectos },
  setup(props) {
    const { getUserProjects } = useProyecto();
    const isLoading = ref(true);
    const error = ref("");
    const respuesta = ref(false);
    const proyectos = ref([]);
    const search = inject("search");
    const { user } = useUserStore();

    onMounted(() => {
      getProjects();
    });

    watch(search, (value) => {
      getProjects();
    });

    const getProjects = async () => {
      isLoading.value = true;
      let response = await getUserProjects(props.usuario, search.value);
      if (response.respuesta) {
        proyectos.value = response.mensaje;
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
    };

    return {
      proyectos,
      error,
      respuesta,
      isLoading,
      search,
      user,
      proyectoEliminado,
    };
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
