<template>
  <button :class="cn(buttonVariants({ size, shadow, rounded, disabled, variant }))">
    <template v-if="loading">
      <Loader2 :class="cn(loaderVariants({ size }))" />
    </template>
    <template v-else>
      <slot />  
    </template>
  </button>
</template>

<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next'
import { cva, type VariantProps } from "cva"
import { cn } from "@/lib/utils/style"

const buttonVariants = cva(
  "flex justify-center items-center font-semibold border transition-colors focus:outline-none focus:ring focus:ring-2",
  {
    variants: {
      variant: {
        primary: "text-white bg-indigo-600 border-indigo-600 hover:bg-indigo-500 hover:border-indigo-500 focus:ring-indigo-600",
        secondary: "text-slate-900 bg-slate-100 border-slate-100 hover:bg-slate-50",
        tertiary: "text-white bg-slate-900 border-slate-900 hover:bg-slate-800",
        outline: "text-slate-900 bg-white border-slate-200 hover:bg-slate-100 focus:ring-slate-50",
        ghost: "bg-transparent border-transparent hover:bg-slate-100 focus:ring-transparent",
        danger: "text-white bg-red-600 border-red-600 hover:bg-red-500 hover:border-red-500 focus:ring-red-600",
        link: "underline-offset-4 hover:underline text-indigo-600 bg-transparent border-transparent focus:ring-0 inline",
      },
      size: {
        none: "text-sm",
        fit: "px-0 py-0 text-sm",
        sm: "px-3 py-2 text-sm",
        md: "px-3 py-2 text-sm",
        lg: "px-4 py-2 text-base",
        xl: "px-6 py-3 text-base",
      },
      shadow: {
        true: "shadow-sm",
        false: "shadow-none",
      },
      rounded: {
        true: "rounded-md",
        false: "rounded-none",
      },
      disabled: {
        true: "opacity-50 cursor-default",
        false: "opacity-100 cursor-pointer",
      }
    }
  }
)

const loaderVariants = cva(
  "mx-2 animate-spin",
  {
    variants: {
      size: {
        none: "w-4 h-4",
        fit: "w-4 h-4",
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-5 h-5",
        xl: "w-6 h-6",
      },
    }
  }
)

interface ButtonProps {
  variant?: VariantProps<typeof buttonVariants>["variant"],
  size?: VariantProps<typeof buttonVariants>["size"],
  shadow?: boolean,
  rounded?: boolean,
  disabled?: boolean,
  loading?: boolean,
}

const props = withDefaults(
  defineProps<ButtonProps>(),
  {
    variant: "link",
    size: "none",
    shadow: false,
    rounded: false,
    disabled: false,
    loading: false,
  }
)

</script>