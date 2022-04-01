import axios from "axios";
import { ref } from "vue";

export default function useProyectoRecomendado() {
  const isLoadingRecomendado = ref(true);
  const recomendados = ref([]);

  const getRecomendados = async (id) => {
    let response = await axios.get(
      "http://localhost:8000/api/proyecto/recomendacion/" + id
    );
    recomendados.value = response.data;
    isLoadingRecomendado.value = false;
  };

  return { isLoadingRecomendado, getRecomendados, recomendados };
}
