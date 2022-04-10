import axios from "axios";
import { ref } from "vue";

export default function useProyectosHome() {
  const isLoading = ref(true);
  const proyectos = ref([]);
  const proyecto = ref([]);

  const getProyectos = async (id) => {
    let response = await axios.get("http://localhost:8000/api/home/" + id);
    proyectos.value = response.data.mensaje;
    isLoading.value = false;
  };

  const getProyecto = async (id) => {
    let response = await axios.get("http://localhost:8000/api/proyecto/" + id);
    proyecto.value = response.data;
    isLoading.value = false;
  };

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
    console.log("formData: ", ...formData);

    const headers = { "Content-Type": "multipart/form-data" };
    let response = await axios.post(
      "http://localhost:8000/api/proyecto/",
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
  };
}
