<template>
  <div class="default flex min-h-screen flex-col">
    <header>
      <SiteHeader class="container" />
    </header>
    <main class="flex flex-1">
      <div class="container flex-1 flex min-h-full">
        <slot />
      </div>
    </main>
    <footer>
      <SiteFooter class="container" />
    </footer>
  </div>
</template>