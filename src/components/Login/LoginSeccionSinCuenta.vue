<template>
  <p class="text-sm text-center text-slate-600">
    ¿Aún no tienes una cuenta?
    <router-link
      class="cursor-pointer text-sky-800 font-bold"
      :to="{ name: 'SignUp' }"
    >
      Registrate aquí
    </router-link>
  </p>
</template>
