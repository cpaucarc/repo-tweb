<template>
  <div class="grid grid-cols-5 h-screen">
    <div class="col-span-3 bg-sky-800 grid place-items-center">
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
            <div class="w-full space-y-8">
              <div class="flex flex-col items-center">
                <div
                  class="w-24 h-24 p-4 bg-slate-100 rounded-full grid place-items-center"
                >
                  <img class="" src="../assets/repotweb-min.svg" alt="Logo" />
                </div>
                <h1 class="font-semibold text-lg text-slate-900">Bienvenido</h1>
              </div>
              <form @submit.prevent="" class="space-y-4">
                <div>
                  <input class="w-full" type="email" />
                </div>
                <div>
                  <input class="w-full" type="password" />
                </div>
                <button
                  type="submit"
                  class="bg-sky-800 text-white px-3 py-2 rounded-md w-full"
                >
                  Iniciar Sesión
                </button>
              </form>
              <p class="text-sm text-center">
                ¿Aún no tienes una cuenta?
                <span class="cursor-pointer text-sky-800 font-bold"
                  >Registrarse</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
