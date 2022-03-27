import axios from "axios";
import { ref } from "vue";

export default function useUsuario() {
  const respuesta = ref([]);

  const login = async (user) => {
    // var params = new URLSearchParams();
    // params.append("usuario", user.username);
    // params.append("password", user.password);
    let res = await axios.post("http://localhost:8000/api/usuario/login", user);
    return res.data;
  };

  return { respuesta, login };
}
