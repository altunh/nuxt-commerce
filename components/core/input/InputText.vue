<template>
  <input
    v-model="value"
    class="block w-full rounded-md border-0 px-3 py-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
  />
</template>

<script setup lang="ts">
  interface Props {
    modelValue: string,
  }

  const props = defineProps<Props>()
  const emit = defineEmits(['update:modelValue'])

  const value = computed({
    get() {
      return props.modelValue
    },
    set(value) {
      emit('update:modelValue', value)
    }
  })
</script>