<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Create an account
      </h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <RegisterForm />
      <p class="mt-10 text-center text-sm text-gray-500">
        Already have an account?
        {{ ' ' }}
        <NuxtLink to="/login">
          <StyledButton class="font-semibold leading-6">
            Sign in
          </StyledButton>
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">


useHead({
  title: 'Register',
})

definePageMeta({
  layout: 'default',
})
</script>
