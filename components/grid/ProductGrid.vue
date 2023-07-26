<template>
  <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
    <ProductGridItem v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script setup lang="ts">
import { Product } from '@prisma/client';

interface Props {
  products: Product[]
}

const { products } = defineProps<Props>()
</script>