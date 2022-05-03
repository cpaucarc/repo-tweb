<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton>
      <slot name="trigger" />
    </MenuButton>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="origin-top-right z-10 overflow-hidden absolute right-0 mt-1 w-44 rounded-md shadow-lg dark:shadow-zinc-900 bg-white dark:bg-zinc-800 focus:outline-none border border-zinc-300 dark:border-zinc-900 border-opacity-50"
      >
        <slot name="items" />
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItems } from "@headlessui/vue";

export default {
  name: "Dropdown",
  components: {
    Menu,
    MenuButton,
    MenuItems,
  },
};
</script>
