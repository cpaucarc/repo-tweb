<template>
  <div>
    <!-- ["Login"].indexOf($route.name) < 0 -->
    <div class="flex flex-col" v-if="!guest">
      <NavBar />
    </div>
    <div
      :class="
        guest
          ? ''
          : 'container mx-auto mt-14 mb-16 w-full sm:w-11/12 md:w-5/6 transition ease-in-out duration-300'
      "
    >
      <router-view />
    </div>
  </div>
</template>

<script>
import NavMenu from "./components/Navs/NavMenu.vue";
import NavBar from "./components/Navs/NavBar.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "App",
  components: { NavBar, NavMenu },
  setup() {
    const route = useRoute();
    const guest = computed(() => ["Login", "SignUp"].indexOf(route.name) > -1);

    return { guest };
  },
};
</script>
