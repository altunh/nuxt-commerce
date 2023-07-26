<script setup lang="ts">
const { status, data, signOut, signIn } = useAuth()

const headers = useRequestHeaders(["cookie"]) as HeadersInit
const { data: token } = useFetch("/api/auth/token", {
  method: "GET",
  headers,
})

useHead({
  title: 'Account',
})
definePageMeta({ middleware: 'auth' })
</script>

<template>
  <h1>Hello {{ data?.user?.firstName }} {{ data?.user?.lastName }}</h1>
  <h3>{{ token }}</h3>
  <button @click="signOut({ callbackUrl: '/' })">
    Log Out
  </button>
</template>