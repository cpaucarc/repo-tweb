import axios from "axios";
import { ref } from "vue";

export default function useProyectosHome() {
  const isLoading = ref(true);
  const proyectos = ref([]);
  const proyecto = ref([]);

  const getProyectos = async () => {
    let response = await axios.get("http://localhost:8000/api/home");
    proyectos.value = response.data.mensaje;
    isLoading.value = false;
  };

  const getProyecto = async (id) => {
    let response = await axios.get("http://localhost:8000/api/proyecto/" + id);
    proyecto.value = response.data;
    isLoading.value = false;
  };

  return { isLoading, proyectos, proyecto, getProyecto, getProyectos };
}
