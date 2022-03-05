<template>
  <div>
    <NavigationMenu />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
  import NavigationMenu from "./components/NavigationMenu.vue";
  export default {
    name: "App",
    components: { NavigationMenu },
  };
</script>