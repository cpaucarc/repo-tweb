<template>
  <InputSearch @onEnter="onEnter" />
</template>

<script>
import InputSearch from "./Input/InputSearch.vue";
export default {
  name: "BuscadorGeneral",
  components: { InputSearch },
  setup() {
    const onEnter = (value) => {
      alert(`Buscando el proyecto ${value}`);
    };

    return { onEnter };
  },
};
</script>
