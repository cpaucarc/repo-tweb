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

  const getDatosUsuario = async (id) => {
    let res1 = await axios.get(
      "http://localhost:8000/api/usuario/perfil/" + id
    );
    return res1.data;
  };

  const updateDatosUsuario = async (id, data) => {
    let rsp = await axios.post(
      "http://localhost:8000/api/usuario/perfil/update/" + id,
      data
    );
    return rsp.data;
  };

  const getTemasInteres = async (id) => {
    let res2 = await axios.get(
      "http://localhost:8000/api/usuario/perfil/interes/" + id
    );
    return res2.data;
  };

  const deleteTema = async (id) => {
    let res = await axios.delete(
      "http://localhost:8000/api/usuario/perfil/interes/" + id
    );
    return res.data;
  };

  const getAvatar = async (id) => {
    let res3 = await axios.get(
      "http://localhost:8000/api/usuario/perfil/avatar/" + id
    );
    return res3.data;
  };

  const updateAvatar = async (id, file) => {
    let formData = new FormData();
    formData.append("avatar", file);
    const headers = { "Content-Type": "multipart/form-data" };
    let res = await axios.post(
      "http://localhost:8000/api/usuario/perfil/avatar/update/" + id,
      formData,
      {
        headers,
      }
    );
    return res.data;
  };

  const verificaCodigo = async (codigo) => {
    let res = await axios.get(
      `http://localhost:8000/api/usuario/codigo/${codigo}`
    );
    let response = res.data;
    return response.existe;
  };

  const buscaDatosEnOge = async (codigo) => {
    let rs = await axios.get(
      `http://sga.unasam.edu.pe/api/indicadores/ensenianza_aprendizaje/01?codigo=${codigo}`
    );
    return rs.data;
  };

  return {
    respuesta,
    login,
    signup,
    getDatosUsuario,
    updateDatosUsuario,
    getTemasInteres,
    getAvatar,
    updateAvatar,
    deleteTema,
    verificaCodigo,
    buscaDatosEnOge,
  };
}
