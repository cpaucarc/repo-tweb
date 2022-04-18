import axios from "axios";

export default function useProyecto() {
  // Función para enviar un nuevo proyecto
  const saveProject = async (data) => {
    let response = await axios.post(
      "http://localhost:8000/api/proyecto/",
      data
    );
    return response.data;
  };

  // Función para obtener todos los proyectos de un usuario
  const getUserProjects = async (username, buscar) => {
    let response = await axios.get(
      `http://localhost:8000/api/proyecto/usuario/${username}?buscar=${buscar}`
    );
    return response.data;
  };

  // Función para obtener la informacion basica del usuario
  const getUserInfo = async (username) => {
    let response = await axios.get(
      `http://localhost:8000/api/proyecto/userinfo/${username}`
    );
    return response.data;
  };

  // Función para obtener todos los proyectos de un usuario
  const getUserFavorites = async (username, buscar) => {
    let response = await axios.get(
      `http://localhost:8000/api/favorito/lista/${username}?buscar=${buscar}`
    );
    return response.data;
  };

  // TODO: Endpoint para eliminar un proyecto
  const deleteProject = async (id) => {
    let response = await axios.delete(
      `http://localhost:8000/api/proyecto/eliminar/${id}`
    );
    return response.data;
  };

  return {
    saveProject,
    getUserProjects,
    getUserInfo,
    getUserFavorites,
    deleteProject,
  };
}
