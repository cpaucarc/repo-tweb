<template>
  <div class="inline-flex items-center gap-x-2" v-if="user.isLogged">
    <button
      title="Indicar que me gusta"
      class="btn-sm"
      :class="
        like
          ? 'bg-sky-200 font-semibold text-sky-700'
          : 'bg-transparent font-normal text-slate-600'
      "
      @click="meGusta"
    >
      <LikeSolid class="icon-5" v-if="like" />
      <ThumbUpIcon class="icon-5" v-else />
      <span>{{ likes_count }}</span>
    </button>

    <button
      title="Añadir a favoritos"
      class="btn-sm"
      :class="
        fav
          ? 'bg-rose-200 font-semibold text-rose-700'
          : 'bg-transparent font-normal text-slate-600'
      "
      @click="aFav"
    >
      <HeartSolid class="icon-5" v-if="fav" />
      <HeartIcon class="icon-5" v-else />
    </button>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import TertiaryButton from "../Button/TertiaryButton.vue";
import { ThumbUpIcon, HeartIcon } from "@heroicons/vue/outline";
import {
  ThumbUpIcon as LikeSolid,
  HeartIcon as HeartSolid,
} from "@heroicons/vue/solid";
import useFavLike from "../../composables/useFavLike";
import { useUserStore } from "../../stores/useUser";

export default {
  components: { TertiaryButton, ThumbUpIcon, HeartIcon, LikeSolid, HeartSolid },
  props: { proyecto: Number },
  setup(props) {
    const like = ref(false);
    const fav = ref(false);
    const likes_count = ref(0);

    const { getFavorito, getLike, setLike, setFav } = useFavLike();
    const { user } = useUserStore();

    onMounted(async () => {
      let f = await getFavorito(props.proyecto, user.user_id);
      let l = await getLike(props.proyecto, user.user_id);
      fav.value = f.es_favorito;
      like.value = l.por_usuario ?? false;
      likes_count.value = l.likes_count;
    });

    const meGusta = async () => {
      likes_count.value += like.value ? -1 : 1;
      like.value = !like.value;
      await setLike(props.proyecto, user.user_id);
    };

    const aFav = async () => {
      fav.value = !fav.value;
      await setFav(props.proyecto, user.user_id);
    };

    return { like, fav, likes_count, meGusta, aFav, user };
  },
};
</script>
