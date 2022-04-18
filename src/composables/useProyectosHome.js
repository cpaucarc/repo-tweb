import axios from "axios";
import { ref } from "vue";
import { useBusquedaStore } from "../stores/busqueda";

export default function useProyectosHome() {
  const isLoading = ref(true);
  const proyectos = ref([]);
  const proyecto = ref([]);

  // Busca proyectos que puede interesar al usuario por su id
  const getProyectos = async (id) => {
    let response = await axios.get("http://localhost:8000/api/home/" + id);
    proyectos.value = response.data.mensaje;
    isLoading.value = false;
  };

  // Buscar proyectos
  const searchProjects = async () => {
    isLoading.value = true;

    const busqueda = useBusquedaStore();

    let formData = new FormData();
    formData.append("buscar", busqueda.search);
    formData.append("inicio", busqueda.inicio);
    formData.append("fin", busqueda.fin);
    for (const escuela of Object.values(busqueda.escuelas)) {
      formData.append("escuelas[]", escuela);
    }

    let response = await axios.post(
      "http://localhost:8000/api/home/buscar",
      formData
    );
    proyectos.value = response.data.mensaje;
    isLoading.value = false;
  };

  // Busca los datos de un proyecto por su id
  const getProyecto = async (id) => {
    let response = await axios.get("http://localhost:8000/api/proyecto/" + id);
    proyecto.value = response.data;
    isLoading.value = false;
  };

  // Guardar un nuevo proyecto
  const saveProyecto = async (data) => {
    let formData = new FormData();
    formData.append("usuario_id", data.usuario_id);
    formData.append("titulo", data.titulo);
    formData.append("resumen", data.resumen);
    for (const tag of Object.values(data.tags)) {
      formData.append("tags[]", tag);
    }
    for (const imagen of Object.values(data.imagenes)) {
      formData.append("imagenes[]", imagen);
    }
    for (const documento of Object.values(data.documentos)) {
      formData.append("documentos[]", documento);
    }

    const headers = { "Content-Type": "multipart/form-data" };

    let response = await axios.post(
      "http://localhost:8000/api/proyecto/crear",
      formData,
      { headers }
    );
    return response.data;
  };

  return {
    isLoading,
    proyectos,
    proyecto,
    getProyecto,
    getProyectos,
    saveProyecto,
    searchProjects,
  };
}
