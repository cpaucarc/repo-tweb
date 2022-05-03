<template>
  <div class="text-center space-y-2">
    <h3 class="font-semibold text-zinc-900 text-lg">Temas de Interes</h3>
    <SkeletonPerfilTags v-if="isLoadingTags" />
    <div v-else class="flex justify-center flex-wrap gap-2">
      <TagItem
        v-for="tema in tags"
        :key="tema.id"
        :tag="tema.nombre"
        @remove="quitarTag(tema.nombre, tema.pivot.id)"
      />
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import useUsuario from "../../composables/useUsuario";
import { useUserStore } from "../../stores/useUser";
import SkeletonPerfilTags from "../Skeleton/SkeletonPerfilTags.vue";
import TagItem from "../Tag/TagItem.vue";
export default {
  components: { SkeletonPerfilTags, TagItem },
  setup() {
    const isLoadingTags = ref(true);
    const tags = ref([]);

    const store = useUserStore();
    const { user } = store;
    const { getTemasInteres, deleteTema } = useUsuario();

    onMounted(() => {
      getTemas();
    });

    const getTemas = async () => {
      let res_tags = await getTemasInteres(user.user_id);
      if (res_tags.respuesta) {
        tags.value = res_tags.mensaje;
        isLoadingTags.value = false;
      }
    };

    const quitarTag = async (tema, id) => {
      if (confirm(`Quiere quitar el tema ${tema}?`)) {
        await deleteTema(id);
        getTemas();
      }
    };

    return {
      tags,
      isLoadingTags,
      quitarTag,
    };
  },
};
</script>
