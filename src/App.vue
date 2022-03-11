<template>
  <div>
    <NavegationBar />
    <div
      class="container mx-auto mt-6 mb-10 grid grid-cols-5 gap-x-6 items-start"
    >
      <NavigationMenu />
      <div class="col-span-4">
        <router-view />
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
