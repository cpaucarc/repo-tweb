<template>
  <div class="relative w-52 mx-auto">
    <hr
      class="absolute top-5 border border-sky-100 border-dashed w-full -z-10"
    />
    <div class="flex justify-between items-center space-x-10">
      <StepButton @click="paso = 1" :active="paso === 1">
        <UserIcon class="h-5 w-5 flex-shrink-0" />
      </StepButton>

      <StepButton @click="paso = 2" :active="paso === 2">
        <AtSymbolIcon class="h-5 w-5 flex-shrink-0" />
      </StepButton>

      <StepButton @click="paso = 3" :active="paso === 3">
        <TagIcon class="h-5 w-5 flex-shrink-0" />
      </StepButton>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import StepButton from "../Button/StepButton.vue";
import { UserIcon, AtSymbolIcon, TagIcon } from "@heroicons/vue/outline";

export default {
  name: "PasosIconos",
  components: {
    StepButton,
    UserIcon,
    AtSymbolIcon,
    TagIcon,
  },
  setup() {
    const paso = inject("paso");
    return { paso };
  },
};
</script>
