<template>
  <div>
    <NavegationBar />
    <div class="container margin">
      <div class="columnas">
        <NavigationMenu />
        <div class="espacios">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationMenu from "./components/Navs/NavMenu.vue";
import NavegationBar from "./components/Navs/NavBar.vue";
export default {
  name: "App",
  components: { NavigationMenu, NavegationBar },
};
</script>

<style>
.margin {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.columnas {
  align-items: flex-start;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 2rem;
}
.espacios {
  grid-column: span 4 / span 4;
}
</style>
