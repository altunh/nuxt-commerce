<template>
  <FormContainer @submit.prevent="register">
    <FormGroup span="half">
      <template #label>
        <FormLabel name="firstName" label="First name" />
      </template>
      <InputText v-model="firstName" name="firstName" type="text" autocomplete="given-name" placeholder="John" />
    </FormGroup>
    <FormGroup span="half">
      <template #label>
        <FormLabel name="lastName" label="Last name" />
      </template>
      <InputText v-model="lastName" name="lastName" type="text" autocomplete="family-name" placeholder="Doe" />
    </FormGroup>
    <FormGroup>
      <template #label>
        <FormLabel name="email" label="Email address" />
      </template>
      <InputText v-model="email" name="email" type="email" autocomplete="email" placeholder="john@doe.com" />
    </FormGroup>
    <FormGroup>
      <template #label>
        <FormLabel name="password" label="Password" />
      </template>
      <InputText v-model="password" type="password" autocomplete="current-password" placeholder="Password" />
    </FormGroup>
    <FormGroup>
      <StyledButton type="submit" class="w-full" variant="primary" size="md" shadow rounded :loading="isLoading" :disabled="isLoading">
        Sign up
      </StyledButton>
    </FormGroup>
  </FormContainer>
</template>

<script setup lang="ts">
import { userSchema } from '@/lib/validations'

const { status, data, signOut, signIn } = useAuth()

const firstName = ref("")
const lastName = ref("")
const email = ref("")
const password = ref("")

const isLoading = ref(false)

const isValid = computed(() => {
  const res = userSchema.safeParse({
    email: email.value,
    password: password.value,
    firstName: firstName.value,
    lastName: lastName.value,
  })
  // if (!res.success && res.error) {
  //   console.error(res.error)
  // }
  return res.success
})

const register = async () => {
  isLoading.value = true
  const headers = useRequestHeaders(["cookie"]) as HeadersInit
  new Promise((resolve, reject) => setTimeout(() => {
    isLoading.value = false
    resolve(true)
  }, 3000))
  // await useFetch("/api/auth/register", {
  //   method: "POST",
  //   headers,
  //   body: {
  //     email: email.value,
  //     password: password.value,
  //     firstName: firstName.value,
  //     lastName: lastName.value,
  //   }
  // })
}
</script>