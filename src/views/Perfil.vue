<template>
  <div class="grid grid-cols-3 max-w-2xl mx-auto gap-8">
    <div class="col-span-2">
      <PerfilDatos />
    </div>

    <div class="space-y-6 mt-2">
      <PerfilAvatar />

      <!-- <div>
        <input
          type="text"
          class="text-sm w-full text-zinc-600 p-0 focus:text-zinc-900 focus:ring-0 border-0 text-center"
          v-model="perfil.usuario"
          required
        />
      </div> -->

      <PerfilTags />
    </div>
  </div>
</template>

<script>
import PerfilAvatar from "../components/Perfil/PerfilAvatar.vue";
import PerfilTags from "../components/Perfil/PerfilTags.vue";
import PerfilDatos from "../components/Perfil/PerfilDatos.vue";
export default {
  name: "Perfil",
  components: {
    PerfilAvatar,
    PerfilTags,
    PerfilDatos,
  },
};
</script>
