import axios from "axios";

export default function useReporte() {
  // Función para obtener los motivos para reportar un proyecto
  const getMotivos = async () => {
    let response = await axios.get(
      "http://localhost:8000/api/proyecto/reportar/motivos"
    );
    return response.data;
  };

  // Función para reportar un proyecto
  const reportarProyecto = async (proyecto, usuario, motivos) => {
    console.log("💀 Valores: ", proyecto, usuario, motivos);

    let formData = new FormData();
    formData.append("proyecto_id", proyecto);
    formData.append("usuario_id", usuario);
    for (const motivo of Object.values(motivos)) {
      formData.append("motivos[]", motivo);
    }

    let response = await axios.post(
      `http://localhost:8000/api/proyecto/reportar/`,
      formData
    );
    return response.data;
  };

  return {
    getMotivos,
    reportarProyecto,
  };
}
