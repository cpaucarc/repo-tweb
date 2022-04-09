import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref({
    isLogged: false,
    user_id: 0,
    username: "",
    fullName: "",
    avatar: "",
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

  const login = (usuario, fullname, id, avatar) => {
    user.value.username = usuario;
    user.value.fullName = fullname;
    user.value.user_id = id;
    user.value.isLogged = true;
    user.value.avatar =
      avatar ??
      "https://i.pinimg.com/originals/49/0d/0e/490d0ecd903ffccff783652214c7d738.jpg";
  };

  const logout = () => {
    user.value.username = "";
    user.value.fullName = "";
    user.value.user_id = 0;
    user.value.isLogged = false;
    user.avatar = "";
  };

  return { user, login, logout };
});
