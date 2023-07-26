<template>
  <form class="mx-auto max-w-xl">
    <div class="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
      <slot />
    </div>
  </form>
</template>

<script setup lang="ts">
import { cva, type VariantProps } from "cva"
import { cn } from "@/lib/utils/style"
</script>