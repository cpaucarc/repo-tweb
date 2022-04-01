<template>
  <div>
    <div @click="verProyecto" class="hover:cursor-pointer group">
      <img
        class="aspect-video rounded-md"
        :src="proyecto.portada ? proyecto.portada.link_imagen : default_portada"
        alt="Portada"
        :title="proyecto.titulo"
      />
      <p
        class="text-sm font-bold leading-4 mt-1 text-slate-400 group-hover:text-sky-600 transition-eio-300 line-clamp-3"
      >
        {{ proyecto.titulo }}
      </p>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

const default_portada =
  "https://dinahosting.com/blog/cont/uploads/2021/03/error-404.jpg";
export default {
  props: { proyecto: Object },
  setup(props) {
    const router = useRouter();

    const verProyecto = () => {
      router.push({
        name: "Proyecto",
        params: {
          username: props.proyecto.estudiante.usuario
            ? props.proyecto.estudiante.usuario.usuario
            : "usuario-sin-nombre",
          proy_id: props.proyecto.id,
        },
      });
    };

    return { default_portada, verProyecto };
  },
};
</script>
