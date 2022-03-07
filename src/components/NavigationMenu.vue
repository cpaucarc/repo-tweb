<template>
  <div class="nav-menu">
    <div class="container navbar">
      <ul class="lista-rutas">
        <li class="nav-item" v-for="(ruta, i) in rutas" :key="i">
          <router-link class="nav-link item" :to="ruta.ruta">
            {{ ruta.nombre }}
          </router-link>
        </li>
      </ul>

      <div>
        <input type="text" placeholder="Buscar proyectos..." />
      </div>

      <div class="lista-rutas">
        <button class="item">+ Subir mi proyecto</button>
        <button class="item">Login</button>
        <UsuarioConectado />
      </div>
    </div>
  </div>
</template>

<script>
  import UsuarioConectado from "./Usuario/UsuarioConectado.vue";
  const rutas = [
    // Definir mas rutas en el archivo router.js
    {
      ruta: "/",
      nombre: "Inicio",
    },
    {
      ruta: "about",
      nombre: "Acerca de",
    },
  ];

  export default {
    name: "NavigationMenu",
    components: { UsuarioConectado },
    setup() {
      return { rutas };
    },
  };
</script>

<style scoped>
  .nav-menu {
    align-items: center;
    background-color: white;
    display: flex;
    height: 60px;
    width: 100%;
  }
  .navbar {
    align-items: center;
    background-color: white;
    display: flex;
    justify-content: space-between;
  }
  .lista-rutas {
    align-items: center;
    background-color: white;
    column-gap: 1.5rem;
    display: flex;
    padding: 0;
  }
  .nav-item {
    list-style-type: none;
  }
  .nav-link {
    background-color: white;
    color: #52525b;
    margin: auto;
    text-decoration: none;
  }
  .router-link-exact-active {
    color: #7c43f7;
    font-weight: bold;
    text-decoration: none;
  }
</style>