<template>
  <div>
    <div class="flex flex-col gap-y-2">
      <NavBar />
      <NavMenu />
    </div>
    <div
      class="container mx-auto mt-14 mb-20 w-full sm:w-11/12 md:w-5/6 transition ease-in-out duration-300"
    >
      <router-view />
    </div>
  </div>
</template>

<script>
import NavMenu from "./components/Navs/NavMenu.vue";
import NavBar from "./components/Navs/NavBar.vue";
export default {
  name: "App",
  components: { NavBar, NavMenu },
};
</script>
