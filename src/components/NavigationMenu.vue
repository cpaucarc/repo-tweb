<template>
  <div class="container">
    <ul class="navbar">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Inicio</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">Acerca de</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "NavigationMenu",
  };
</script>

<style scoped>
  .navbar {
    column-gap: 1.5rem;
    align-items: center;
    display: flex;
    padding: 0;
  }
  .nav-item {
    color: black;
    list-style-type: none;
    appearance: unset;
  }

  .nav-link {
    text-decoration: none;
  }
</style>