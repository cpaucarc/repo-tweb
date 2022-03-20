<template>
  <div>
    <transition-group
      tag="ul"
      name="list"
      appear
      class="flex flex-wrap gap-2 py-2 relative"
    >
      <li v-for="(tag, i) in tags" :key="i">
        <TagItem :tag="tag" @remove="removeTag" />
      </li>
    </transition-group>
  </div>
</template>

<script>
import TagItem from "./TagItem.vue";
export default {
  name: "ListaTags",
  props: { tags: Array },
  components: { TagItem },
  setup(props, { emit }) {
    const removeTag = (tag) => {
      emit("removeTag", tag);
    };
    return { removeTag };
  },
};
</script>

<style scoped>
/* list transitions */
.list-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
.list-enter-active {
  transition: all 0.4s ease;
}
.list-leave-to {
  opacity: 0;
  transform: scale(0.7);
}
.list-leave-active {
  transition: all 0.5s ease-out;
  position: absolute; /* for move transition after item leaves */
}
.list-move {
  transition: all 1s ease;
}
</style>
