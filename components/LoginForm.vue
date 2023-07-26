<template>
  <FormContainer @submit="login()">
    <FormGroup>
      <template #label>
        <FormLabel name="email" label="Email address" />
      </template>
      <InputText v-model="email" name="email" type="email" autocomplete="email" placeholder="john@doe.com" />
    </FormGroup>
    <FormGroup>
      <template #label>
        <FormLabel name="password" label="Password">
          <NuxtLink to="/forgot"><StyledButton>Forgot password?</StyledButton></NuxtLink>
        </FormLabel>
      </template>
      <InputText v-model="password" type="password" autocomplete="current-password" placeholder="Password" />
    </FormGroup>
    <FormGroup>
      <StyledButton type="submit" class="w-full" variant="primary" size="md" shadow rounded :loading="isLoading" :disabled="isLoading">
        Sign in
      </StyledButton>
    </FormGroup>
  </FormContainer>
</template>

<script setup lang="ts">
const { status, data, signIn } = useAuth()

const email = ref("")
const password = ref("")

const isLoading = computed(() => status.value === "loading")
const isAuthenticated = computed(() => status.value === "authenticated")

const login = async () => {
  const result = await signIn("credentials", {
    email: email.value,
    password: password.value,
    redirect: false,
  })
  if (isAuthenticated.value) {
    navigateTo("/")
  }
}
</script>