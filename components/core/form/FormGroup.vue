<template>
  <div :class="cn(formGroupVariants({ span }))">
    <slot name="label" />
    <div class="mt-2">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { cva, type VariantProps } from "cva"
import { cn } from "@/lib/utils/style"

const formGroupVariants = cva("", {
  variants: {
    span: {
      half: "",
      full: "sm:col-span-2"
    }
  }
})

interface Props {
  span?: VariantProps<typeof formGroupVariants>["span"]
}

const props = withDefaults(defineProps<Props>(), {
  span: "full"
})
</script>