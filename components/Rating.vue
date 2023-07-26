<template>
  <div class="flex items-center">
    <div class="flex items-center">
      <StarIcon 
        v-for="rating in [0, 1, 2, 3, 4]" 
        :key="rating" 
        :class="[averageRating > rating
          ? 'text-indigo-600'
          : 'text-gray-200', 'h-5 w-5 flex-shrink-0'
        ]" 
        aria-hidden="true" 
      />
    </div>
    <p class="sr-only">
      {{ averageRating }} out of 5 stars
    </p>
    <span class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
      {{ reviewCount }} reviews
    </span>
  </div>
</template>

<script setup lang="ts">
import { StarIcon } from '@heroicons/vue/20/solid'
import { Review } from '@prisma/client';

interface Props {
  reviews: Array<Review>
}

const { reviews } = defineProps<Props>()

const reviewCount = reviews.length
const averageRating = reviews.reduce((total: number, review: Review) => {
  return total + review.rating / reviewCount
}, 0)
</script>