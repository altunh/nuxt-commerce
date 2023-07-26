<template>
  <MenuItem>
    <div class="flex flex-row items-center rounded-[4px] px-2 py-1.5 text-sm font-medium text-slate-900 cursor-pointer hover:bg-slate-100 focus:bg-slate-100">
      <slot />
    </div>
  </MenuItem>
</template>

<script setup lang="ts">
  import { MenuItem } from '@headlessui/vue'
</script>