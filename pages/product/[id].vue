<template>
  <div class="flex flex-col mb-4">
    <div class="my-4">
      <StyledButton @click="router.back()" variant="outline" size="md" class="text-md px-6" rounded shadow>
        <ChevronLeftIcon class="w-4 h-4 mr-1" />
        <span>Back</span>
      </StyledButton>
    </div>
    <div class="py-4 flex flex-col lg:flex-row gap-16">
      <div class="lg:max-w-6xl lg:min-w-5xl mx-auto">
        <img :src="product.image" class="w-full object-cover object-center rounded-xl" />
      </div>
      <div class="lg:max-w-2xl flex items-center">
        <div class="flex flex-col">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{ product.name }}</h1>
          <p class="text-base mt-6 text-gray-900">{{ product.description }}</p>
          <div class="mt-6">
            <p class="text-3xl tracking-tight text-gray-900">
              ${{ product.price }}
            </p>
            <div class="mt-6">
              <Rating :reviews="product.reviews" />
            </div>
            <div class="mt-10 flex flex-row items-center gap-4">
              <StyledButton @click="isAddedToBag = !isAddedToBag" variant="primary" size="lg" class="w-full h-full max-w-lg" shadow rounded>
                <component :is="isAddedToBag ? CheckIcon : PlusIcon" class="w-6 h-6 mr-2" />
                {{ isAddedToBag ? 'Addeded to bag' : 'Add to bag' }}
              </StyledButton>
              <StyledButton @click="isWished = !isWished" class="h-full" variant="ghost" size="lg" rounded>
                <HeartIcon :class="['w-6 h-6', isWished ? 'text-indigo-600' : 'text-slate-300']" />
              </StyledButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronLeftIcon, HeartIcon, PlusIcon, CheckIcon } from '@heroicons/vue/20/solid'
import { Product } from '@prisma/client'

const router = useRouter()
const route = useRoute()
const productId = route.params.id

const isWished = ref(false)
const isAddedToBag = ref(false)

const { data } = await useFetch(`/api/products/detail/${productId}`)

const product = data
</script>