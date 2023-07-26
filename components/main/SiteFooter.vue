<template>
  <div class="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
    <div class="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-5 md:px-0">
      <LogoIcon class="w-8 h-8 fill-indigo-500" />
      <p class="font-sans text-center text-sm leading-loose md:text-left">
        Built by
        {{ ' ' }}
        <a
          href="https://github.com/altunh" 
          class="font-medium underline underline-offset-4"
        >
          @altunh
        </a>
        .{{ ' ' }}
        Powered by Nuxt.js, Vue.js, Tailwind CSS and Prisma.
        {{ ' ' }}
        Hosted on Vercel.
      </p>
    </div>
    <div class="relative">
      <ThemeDropdown />
    </div>
  </div>
</template>