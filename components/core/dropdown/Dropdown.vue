<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton>
      <slot />
    </MenuButton>
    <transition
      enter-active-class="transition ease-out duration-200" 
      enter-from-class="opacity-0 translate-y-1" 
      enter-to-class="opacity-100 translate-y-0" 
      leave-active-class="transition ease-in duration-150" 
      leave-from-class="opacity-100 translate-y-0" 
      leave-to-class="opacity-0 translate-y-1"
    >
      <slot name="items" />
    </transition>
  </Menu>
</template>

<script setup lang="ts">
  import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
</script>