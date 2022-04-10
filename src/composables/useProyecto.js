import axios from "axios";
// import { ref } from "vue";

export default function useProyecto() {
  const saveProject = async (data) => {
    let response = await axios.post(
      "http://localhost:8000/api/proyecto/",
      data
    );
    console.warn("Response: ", response);
    return response.data;
  };

  return { saveProject };
}
