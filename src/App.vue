<template>
  <div>
    <NavigationMenu />
    <div class="container my-8">
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

<style>
  .container {
    margin: 0 auto;
    width: 75%;
  }
  .transparent {
    background-color: transparent;
  }
  .my-8 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
</style>