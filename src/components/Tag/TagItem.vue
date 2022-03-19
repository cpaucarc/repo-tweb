<template>
  <div
    class="bg-sky-100 text-sky-800 px-2 py-0.5 text-sm rounded flex items-center"
  >
    {{ tag }}
    <button class="text-sky-700 hover:text-sky-800 ml-2">
      <XIcon class="h-4 w-4" @click="remove" />
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
