import axios from "axios";
import { ref } from "vue";

export default function useUsuario() {
  const respuesta = ref([]);

  const login = async (user) => {
    let res = await axios.post("http://localhost:8000/api/usuario/login", user);
    return res.data;
  };

  const signup = async (data) => {
    let res = await axios.post(
      "http://localhost:8000/api/usuario/signup",
      data
    );
    respuesta.value = res.data;
  };

  const obtenerDatosUsuario = async (id) => {
    let res1 = await axios.get(
      "http://localhost:8000/api/usuario/perfil/" + id
    );
    return res1.data;
  };
  const obtenerTemasInteres = async (id) => {
    let res2 = await axios.get(
      "http://localhost:8000/api/usuario/perfil/interes/" + id
    );
    return res2.data;
  };
  const obtenerAvatar = async (id) => {
    let res3 = await axios.get(
      "http://localhost:8000/api/usuario/perfil/avatar/" + id
    );
    return res3.data;
  };

  return {
    respuesta,
    login,
    signup,
    obtenerDatosUsuario,
    obtenerTemasInteres,
    obtenerAvatar,
  };
}
