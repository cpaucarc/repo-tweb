<template>
  <div>
    <SkeletonPerfilAvatar v-if="isLoadingAvatar" />
    <div class="relative mx-auto h-32 w-32" v-else>
      <img class="h-32 w-32 avatar" :src="avatar" alt="Foto de perfil" />
      <label
        for="imagen"
        class="btn-sky bottom-0 right-0 absolute rounded-full border-4 border-white dark:border-zinc-900 w-10 h-10"
      >
        <PencilIcon class="icon-4" />
      </label>
    </div>

    <input
      id="imagen"
      class="hidden overflow-hidden"
      type="file"
      accept="image/png, image/gif, image/jpeg"
      @change="cambiarFoto"
    />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { PencilIcon } from "@heroicons/vue/outline";
import SkeletonPerfilAvatar from "../Skeleton/SkeletonPerfilAvatar.vue";
import { useUserStore } from "../../stores/useUser";
import useUsuario from "../../composables/useUsuario";
export default {
  components: { SkeletonPerfilAvatar, PencilIcon },
  setup() {
    const isLoadingAvatar = ref(true);
    const avatar = ref([]);
    const store = useUserStore();
    const { user, avatarUpdated } = store;
    const { getAvatar, updateAvatar } = useUsuario();

    onMounted(async () => {
      let res_avatar = await getAvatar(user.user_id);

      if (res_avatar.respuesta) {
        avatar.value =
          res_avatar.mensaje ??
          "https://i.pinimg.com/originals/49/0d/0e/490d0ecd903ffccff783652214c7d738.jpg";
        isLoadingAvatar.value = false;
      }
    });

    const cambiarFoto = async (e) => {
      try {
        let file = e.target.files[0];
        if (file) {
          avatar.value = URL.createObjectURL(file);
          let res = await updateAvatar(user.user_id, file);
          avatarUpdated(res.mensaje);
        }
      } catch (error) {
        alert("Se produjo un error: \n" + error);
      }
    };

    return {
      avatar,
      isLoadingAvatar,
      cambiarFoto,
    };
  },
};
</script>
