<template>
  <section
    class="w-full overflow-hidden rounded-xl bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-800 px-6 py-16 text-white md:px-12 md:py-20"
    aria-label="Hero section 1"
  >
    <div class="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center md:flex-row md:text-left">
      <div class="flex-1">
        <p class="mb-3 text-sm font-semibold uppercase tracking-wider text-violet-200">
          System UI Library
        </p>
        <h1 class="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
          Build faster with approved UI patterns
        </h1>
        <p class="mt-4 max-w-xl text-base text-violet-100 md:text-lg">
          Preview, copy, and reuse navbars, hero sections, forms, and brand rules across your projects.
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
          <a
            href="#"
            class="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-violet-700 shadow-md transition-colors hover:bg-violet-50"
          >
            Browse components
          </a>
          <a
            href="#"
            class="rounded-lg border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            View documentation
          </a>
        </div>
      </div>
      <div
        class="flex h-48 w-full max-w-sm shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 md:h-56"
      >
        <img src="/logo.svg" class="h-24 w-24 object-contain opacity-90" alt="" />
      </div>
    </div>
  </section>
</template>
