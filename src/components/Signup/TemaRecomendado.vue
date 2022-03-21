<template>
  <div></div>
</template>
<script>
import SignupTag from "../Tag/SignupTag.vue";
export default {
  name: "TemaRecomendado",
  components: { SignupTag },
  props: { tema: Object },
  setup(props, { emit }) {
    const toggleTag = (id) => {
      console.log(id);
      emit("emitirTagId", id);
    };

    return { toggleTag };
  },
};
</script>
