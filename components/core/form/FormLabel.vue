<template>
  <div class="flex items-center justify-between">
    <label :for="name" class="block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string,
  name: string
}

const props = defineProps<Props>()
</script>