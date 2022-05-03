<template>
  <div class="tag">
    {{ tag }}
    <button
      class="text-sky-700 hover:text-sky-800 dark:text-sky-600 dark:hover:text-sky-500 ml-2"
    >
      <XIcon class="icon-4" @click="remove" />
    </button>
  </div>
</template>

<script>
import { XIcon } from "@heroicons/vue/outline";
export default {
  name: "TagItem",
  props: {
    tag: String,
  },
  components: { XIcon },
  setup(props, { emit }) {
    const remove = () => {
      emit("remove", props.tag);
    };

    return { remove };
  },
};
</script>
