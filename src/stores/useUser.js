import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref({
    isLogged: false,
    user_id: 0,
    username: "",
    fullName: "Paucar Colonia Frank",
    avatar:
      "https://i.pinimg.com/originals/49/0d/0e/490d0ecd903ffccff783652214c7d738.jpg",
  });

  if (localStorage.getItem("user")) {
    user.value = JSON.parse(localStorage.getItem("user"));
  }

  watch(
    user,
    (userVal) => {
      localStorage.setItem("user", JSON.stringify(userVal));
    },
    { deep: true }
  );

  const login = (username, password) => {
    user.value.username = username;
    user.value.user_id = password;
    user.value.isLogged = true;
    user.avatar =
      "https://i.pinimg.com/originals/49/0d/0e/490d0ecd903ffccff783652214c7d738.jpg";
  };
  const logout = () => {
    user.value.username = "";
    user.value.user_id = 0;
    user.value.isLogged = false;
    user.avatar =
      "https://i.pinimg.com/originals/49/0d/0e/490d0ecd903ffccff783652214c7d738.jpg";
  };

  return { user, login, logout };
});
