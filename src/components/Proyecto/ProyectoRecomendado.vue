<template>
  <div>
    <div @click="verProyecto" class="hover:cursor-pointer group">
      <img
        class="aspect-video object-cover rounded-md border border-zinc-300 dark:border-zinc-700"
        :src="proyecto.portada ? proyecto.portada.link_imagen : default_portada"
        alt="Portada"
      />
      <p
        class="text-xs font-semibold leading-4 mt-1 text-zinc-400 group-hover:text-sky-600 dark:group-hover:text-sky-500 transition-eio-300 line-clamp-3"
        :title="proyecto.titulo"
      >
        {{ proyecto.titulo }}
      </p>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

const default_portada = "/static/default_cover.svg";
export default {
  props: { proyecto: Object },
  setup(props) {
    const router = useRouter();

    const verProyecto = () => {
      router.push({
        name: "Proyecto",
        params: {
          username: props.proyecto.usuario.usuario,
          proy_id: props.proyecto.id,
        },
      });
    };

    return { default_portada, verProyecto };
  },
};
</script>
