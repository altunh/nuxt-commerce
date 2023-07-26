<template>
  <FormContainer>
    <FormGroup>
      <template #label>
        <FormLabel name="email" label="Email address">
          <NuxtLink to="/forgot"><StyledButton>Forgot your email?</StyledButton></NuxtLink>
        </FormLabel>
      </template>
      <InputText v-model="email" name="email" type="email" autocomplete="email" placeholder="john@doe.com" />
    </FormGroup>
    <FormGroup>
      <StyledButton type="submit" class="w-full" variant="outline" size="md" shadow rounded>
        Send reset link
      </StyledButton>
    </FormGroup>
  </FormContainer>
</template>

<script setup lang="ts">
const email = ref("")
</script>