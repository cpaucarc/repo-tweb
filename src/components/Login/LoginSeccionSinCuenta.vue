<template>
  <p class="text-sm text-center text-zinc-600 dark:text-zinc-400">
    ¿Aún no tienes una cuenta?
    <router-link
      class="cursor-pointer text-sky-800 hover:text-sky-700 dark:text-sky-700 dark:hover:text-sky-600 font-semibold"
      :to="{ name: 'SignUp' }"
    >
      Registrate aquí
    </router-link>
  </p>
</template>
