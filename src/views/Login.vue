<template>
  <div class="grid grid-cols-5 h-screen">
    <div class="col-span-3 bg-sky-800 dark:bg-sky-900 grid place-items-center">
      <div class="relative">
        <div
          class="absolute bottom-4 right-4 w-56 h-44 bg-amber-400 rounded-lg rotate-3"
        ></div>
        <div
          class="absolute top-6 w-48 h-32 left-2 bg-white rounded-lg -rotate-3"
        ></div>
        <div
          class="absolute -top-8 -right-10 w-44 h-44 bg-rose-500 rounded-lg -rotate-6"
        ></div>
      </div>
    </div>
    <div class="col-span-2">
      <div class="grid grid-cols-5">
        <div class="col-start-2 col-span-3">
          <div class="grid place-items-center h-screen">
            <LoginSeccion />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginSeccion from "../components/Login/LoginSeccion.vue";
export default {
  name: "Login",
  components: { LoginSeccion },
};
</script>
