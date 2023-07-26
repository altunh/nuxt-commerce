<template>
  <MenuItems
    class="z-50 absolute min-w-[8rem] divide-y divide-gray-100 rounded-md bg-white shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none"
  >
    <div class="p-1">
      <slot />
    </div>
  </MenuItems>
</template>

<script setup lang="ts">
  import { MenuItems } from '@headlessui/vue'
</script>