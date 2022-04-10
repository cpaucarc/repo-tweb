import axios from "axios";
import { ref } from "vue";

export default function useFavLike() {
  //Saber si un proyecto esta en los favoritos de un usuario
  const getFavorito = async (proy_id, user_id) => {
    let response = await axios.get(
      `http://localhost:8000/api/proyecto/favorito/${proy_id}/${user_id}`
    );
    return response.data;
  };

  //Obtener la cantidad de likes del proyecto, y saber si el usuario le dio like
  const getLike = async (proy_id, user_id) => {
    let response = await axios.get(
      `http://localhost:8000/api/proyecto/valoracion/${proy_id}/${user_id}`
    );
    return response.data;
  };

  // Dar like (o quitar el like) a un proyecto
  const setLike = async (proy_id, user_id) => {
    await axios.get(
      `http://localhost:8000/api/proyecto/like/${proy_id}/${user_id}`
    );
  };

  // Agregar (o quitar el like) un proyecto a los favoritos de un usuario
  const setFav = async (proy_id, user_id) => {
    await axios.get(
      `http://localhost:8000/api/proyecto/fav/${proy_id}/${user_id}`
    );
  };

  return { getFavorito, getLike, setLike, setFav };
}
