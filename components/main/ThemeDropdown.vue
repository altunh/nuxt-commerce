<template>
  <Dropdown>
    <StyledButton variant="ghost" size="none" rounded class="p-1 text-indigo-500">
      <SunIcon class="w-6 h-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon class="w-5 h-5 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </StyledButton>
    <template #items>
      <DropdownItems class="right-0 bottom-11">
        <DropdownItem @click="colorMode.preference = 'light'">
          <SunIcon class="mr-2 h-4 w-4 fill-indigo-500" aria-hidden="true" />
          <span>Light</span>
        </DropdownItem>
        <DropdownItem @click="colorMode.preference = 'dark'">
          <MoonIcon class="mr-2 h-4 w-4 fill-indigo-500" aria-hidden="true" />
          <span>Dark</span>
        </DropdownItem>
        <DropdownItem @click="colorMode.preference = 'system'">
          <ComputerDesktopIcon class="mr-2 h-4 w-4 fill-indigo-500" aria-hidden="true" />
          <span>System</span>
        </DropdownItem>
      </DropdownItems>
    </template>
  </Dropdown>
</template>

<script setup lang="ts">
import { 
  SunIcon, 
  MoonIcon, 
  ComputerDesktopIcon 
} from '@heroicons/vue/20/solid'

const colorMode = useColorMode()
</script>
